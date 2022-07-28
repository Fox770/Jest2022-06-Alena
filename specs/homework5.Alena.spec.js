import fetch from 'node-fetch';
import { getMethodHeaders, randomAirportID } from '../src/homework5.Al';

const baseURL = 'https://airportgap.dev-tester.com/api';

describe('Testing all airports site', () => {

    /** Positive tests */
    test('Returns all airports get /airports 200', async () => {
        const path = '/airports';
        const response = await fetch(baseURL + path, {method: 'GET'});
        const data = await response.json();
        expect(response.status).toEqual(200);
        console.log(data);
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
        console.log(response);
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
        console.log(response);
    });
    test('Returns all the favorite airports get /favorites 200', async () => {
        const path = '/favorites';
        const response = await fetch(baseURL + path, getMethodHeaders);
        expect(response.status).toEqual(200);
        console.log(response);
    });
    test('Allows you to save a favorite airport post /favorites 201', async () => {
        const path = '/favorites?';
        const airport_idValue = ['HGU', 'LAE', 'POM', 'WWK', 'UAK', 'HFN', 'PFJ', 'YAY', 'YBK', 'RKV', 'YCB'];
        const addMyFavoriteAirport_id = new URLSearchParams ({ airport_id: randomAirportID(airport_idValue) });

        const response = await fetch(baseURL + path + addMyFavoriteAirport_id, 
            { headers: {'Authorization': 'Bearer oeMbfr5Xdo4WvJbEv49sxttX', 'Content-Type': 'application/json'},
            method: 'POST', 
            body: JSON.stringify() } );
            expect(response.status).toEqual(201);
            console.log(response); 
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
        console.log(response);
    });
    test('Do not Return the favorite airport get /favorites/:id 404 (Not Found)', async () => {
        const path = '/favorites/:id';
        const getAirportID = new URLSearchParams({id: 6039});
  
        const response = await fetch(baseURL + path + getAirportID, getMethodHeaders); 
        expect(response.status).toEqual(404);
        console.log(response);
    });
});