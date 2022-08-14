import supertest from 'supertest';
import myCredentials from '../framework/config/urls.Al.FlowFast';
const { myUrl } = myCredentials;

 /** Describe functions for FlowFast Developers API website
 to create space, get spaces and don't return it if token is invalid
 
 * @param {string} space 
 * @param {string} space_id
 * @returns {object} answer from server
 */
 
const Space = {
    createNewSpace: (space) => {
        return supertest(myUrl)
        .post('/spaces')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${myCredentials.token}`)
        .send(space)
    },
    getListSpaces: () => {
        return supertest(myUrl)
        .get('/spaces')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${myCredentials.token}`)
    },
    getSpace: (space_id) => {
        return supertest(myUrl)
        .get(`/spaces/${space_id}`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${myCredentials.token}`)
    },
    donotcreateNewSpace: (space) => {
        return supertest(myUrl)
        .post('/spaces')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${myCredentials.invalidToken}`)
        .send(space)
    },
}

export default Space;
