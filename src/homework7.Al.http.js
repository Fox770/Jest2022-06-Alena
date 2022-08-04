import { clientGet, clientGetAuth, clientPost, clientPostAuth, clientPatchAuth, clientDeletehAuth } from '../framework/services/airports.service';

/** Description of Airport Client function
 * Allows you to retun, create, update and delete 
 * your data in Airport Gap account
 * @param {integer} id
 * @param {object} distance
 * @param {object} tokens
 * @param {string} airportId
 * @param {string} id the second id from editFavoriteAirport
 * @param {string} note from editFavoriteAirport
 * @param {integer} favoriteId
 * @return {object} ответ от сервера
 */
export const airportClient = {
    getAllAirports: () => {
        return clientGet('/airports')
    },
    getAirportById: (id) => {
        return clientGet(`/airports/${id}`)
    },
    calculateDistance: (distance) => {
        return clientPost('/airports/distance', distance)
    },
    recieveToken: (tokens) => {
        return clientPost('/tokens', tokens)
    },
    getFavoriteAirports: () => {
        return clientGetAuth('/favorites')
    },
    getFavoriteAirportById: (id) => {
        return clientGetAuth(`/favorites/${id}`)
    },
    saveFavoriteAirport: (airportId) => {
        return clientPostAuth('/favorites', airportId)
    },
    editFavoriteAirport: (id, note) => { 
        return clientPatchAuth(`/favorites/${id}`, note)
    },
    deleteFavoriteAirport: (favoriteId) => { 
        return clientDeletehAuth(`/favorites/${favoriteId}`)
    },
};

/** Random function of airportId values
 * @param {string} airportId
 */
export const randomAirportID = (airportId) => {
    for (let i = 0; i < 2; i++) {
        const random = airportId[Math.floor(Math.random() * airportId.length)];
        return random
    }
};