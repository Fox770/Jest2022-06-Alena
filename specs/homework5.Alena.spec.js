import fetch from 'node-fetch';
import { getMethodHeaders, randomAirportID } from '../src/homework5.Al';

const baseURL = 'https://airportgap.dev-tester.com/api';

describe('Testing all airports site', () => {

    /** Positive tests */
    test('Returns all airports get /airports 200', async () => {
        const path = '/airports';
        const response = await fetch(baseURL + path, {method: 'GET'});
        expect(response.status).toEqual(200);
    });
    test('Calculate distance post /airports/distance 200', async () => {
        const path = '/airports/distance';
        const distance = {
            from: 'YBR',
            to: 'YCB',
        };
        const response = await fetch(baseURL + path, 
            { method: 'POST', headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(distance) });
        expect(response.status).toEqual(200);
    });
    test('Returns the API token post /tokens 200', async () => {
        const path = '/tokens';
        const loginparams = {
            email: 'test@airportgap.com',
            password: 'airportgappassword',
        };
        const response = await fetch(baseURL + path, 
        { method: 'POST', headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(loginparams)});
        expect(response.status).toEqual(200);
    });
    test('Returns all the favorite airports get /favorites 200', async () => {
        const path = '/favorites';
        const response = await fetch(baseURL + path, getMethodHeaders);
        expect(response.status).toEqual(200);
    });
    test.skip('Allows you to save a favorite airport post /favorites 201', async () => {
        const path = '/favorites?';
        const airportIdValue = ['GOH', 'THU', 'SIJ', 'EGS', 'PFJ'];
        const addMyFavoriteAirportId = new URLSearchParams({airport_id: randomAirportID(airportIdValue)});

        const response = await fetch(baseURL + path + addMyFavoriteAirportId, 
            { headers: {'Authorization': 'Bearer oeMbfr5Xdo4WvJbEv49sxttX', 'Content-Type': 'application/json'},
            method: 'POST', 
            body: JSON.stringify() } );
        expect(response.status).toEqual(201);
    });
    /** Negative tests */
    test('Do not Return all the favorite airports get /favorites 401 (Unauthorized)', async () => {
        const path = '/favorites';
        const response = await fetch(baseURL + path,  {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer null',
                'Content-Type': 'application/json'
            }
        });
        expect(response.status).toEqual(401);
    });
    test('Do not Return the favorite airport get /favorites/:id 404 (Not Found)', async () => {
        const path = '/favorites/:id';
        const getAirportID = new URLSearchParams({id: 6039});
  
        const response = await fetch(baseURL + path + getAirportID, getMethodHeaders); 
        expect(response.status).toEqual(404);
    });
});