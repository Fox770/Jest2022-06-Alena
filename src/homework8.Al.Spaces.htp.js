import myCredentials from '../framework/config/urls.Al.FlowFast';
import BuildColumn, { BuildSpace } from '../framework/fixtures/builder/newSpaces.Al.FF';

describe('Testing Book Store API', () => {
    /** Positive tests */
       /** Spaces tests */
    test.only('Returns New Space post 200', async () => { //success
        const title = new BuildSpace().addNewTitle().addExternalId()
        const response = await Space.createNewSpace(title)
        console.log(response.body)
        expect(response.status).toEqual(200)
        console.log(response.body)
    })
    test('Returns Generated Token post 200 my', async () => {  //success token returns
        const response = await Account.postGenerateToken(config.myCredentials)
        expect(response.status).toEqual(200)
    })

});