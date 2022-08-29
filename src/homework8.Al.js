import supertest from 'supertest';
import config from '../framework/config/urls.Al.BookStore';
const { url } = config;

 /** Describe functions for Book Store API website
 * to create account, generate token, create user and delete it
 
 * @param {object} login 
 * @param {string} token 
 * @param {object} user 
 * @returns {object} answer from server
 */
 
const Account = {
    postAuthorized: (login) => {
        return supertest(url)
        .post('/Account/v1/Authorized')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(login)
    },
    postGenerateToken: (token) => {
        return supertest(url)
        .post('/Account/v1/GenerateToken')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(token)
    },
    postUser: (user) => {
        return supertest(url)
        .post('/Account/v1/User/')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${config.myCredentialsToken.token}`)
        .send(user)
    },

}

export default Account;

export const BookStore = {
    getBooks: () => {
        return supertest(url)
        .get('/BookStore/v1/Books')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${config.myCredentialsToken.token}`)
    }
};
