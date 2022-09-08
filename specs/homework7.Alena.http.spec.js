import { faker } from '@faker-js/faker'
import { airportClient, randomAirportID } from '../src/homework7.Al.http'

describe('Testing all airports site', () => {

    /** Positive tests */
    test('Returns all airports get /airports 200', async () => {
        const response = await airportClient.getAllAirports()
        expect(response.status).toEqual(200)
    })
    test('Returns airport by id get /airports/:id 200', async () => {
        const id = 'KIX'
        const response = await airportClient.getAirportById(id)
        expect(response.status).toEqual(200)
    })
    test('Calculate distance post /airports/distance 200', async () => {
        const distance = {    
            from: 'YBR',  
            to: 'YCB',    
        }
        const response = await airportClient.calculateDistance(distance)
        expect(response.status).toEqual(200)
    })
    test('Returns the API token post /tokens 200', async () => {
        const tokens = {
            email: 'test@airportgap.com',
            password: 'airportgappassword',
        }
        const response = await airportClient.recieveToken(tokens)
        expect(response.status).toEqual(200)
    })
    test('Returns all the favorite airports get /favorites 200', async () => {
        const response = await airportClient.getFavoriteAirports()
        expect(response.status).toEqual(200)
    })
    test.skip('Returns the favorite airport get /favorites/:id 200', async () => {
        const id = 6037
        const response = await airportClient.getFavoriteAirportById(id)
        expect(response.status).toEqual(200)
    })
    test.skip('Allows you to save a favorite airport post /favorites 201', async () => {
        const airportId = ['MAG', 'AEY', 'GOH', 'HZK', 'YAM', 'EGS', 'YBL', 'YCB']
        const airportData = {
            airport_id: randomAirportID(airportId),
            note: null,
        }
        const response = await airportClient.saveFavoriteAirport(airportData)
        expect(response.status).toEqual(201)
    })
    test('Allows you to update the note in favorite airport patch /favorites/:id 200', async () => {
        const id = "6164"
        const addNote = {note: `YAZ - Tofino / Long Beach Airport in Canada`}

        const response = await airportClient.editFavoriteAirport(id, addNote)
        expect(response.status).toEqual(200)
    })
    test.skip('Deletes one of your favorite airports delete /favorites/:id 204', async () => {
        const favoriteIdAir = [6184, 6037, 6041, 6187, 6191, 6184, 6187, 6188]
        const favoriteId = randomAirportID(favoriteIdAir)

        const response = await airportClient.deleteFavoriteAirport(favoriteId)
        expect(response.status).toEqual(204)
    })
    
    /** Negative tests */
    test('Do not return the API token post /tokens 401 (Unauthorized)', async () => {
        const tokens = {
            email: faker.internet.email(),
            password: faker.internet.password(),
        }
        const response = await airportClient.recieveToken(tokens)
        expect(response.status).toEqual(401)
    })
    test('Do not return the favorite airport get /favorites/:id 404 (Not Found)', async () => {
        const id = 6039
        const response = await airportClient.getFavoriteAirportById(id)
        expect(response.status).toEqual(404)
    })
    test('Do not calculate distance post /airports/distance 422 (Unprocessable Entity)', async () => {
        const distance = {    
            from: 'Canada',  
            to: 'New York',    
        }
        const response = await airportClient.calculateDistance(distance)
        expect(response.status).toEqual(422)
    })
});
