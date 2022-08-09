import supertest from 'supertest';
import myCredentials from '../framework/config/urls.Al.FlowFast';
const { myUrl } = myCredentials;
 /** Describe functions for Book Store API website
 * to create account, generate token, create user and delete it
 
 * @param {string} title 
 * @param {string} space_id
 * @returns {object} answer from server
 */
 
const Space = {
    createNewSpace: (title) => {
        return supertest(myUrl)
        .post('/spaces')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${myCredentials.token}`)
        .send(title)
    },
    getListSpaces: () => {
        return supertest(myUrl)
        .get('/spaces')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${myCredentials.token}`)
    },
    editSpace: (space_id) => {
        return supertest(myUrl)
        .patch(`/spaces/${space_id}`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${myCredentials.token}`)
        .send(space_id)
    },
}

export default Space;