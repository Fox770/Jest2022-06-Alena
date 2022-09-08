import config from '../framework/config/urls.Al.BookStore';
import Account, { BookStore } from '../src/homework8.Al';
import BuildAccount from '../framework/fixtures/builder/newAccount.BS';

describe('Testing Book Store API', () => {
    /** Positive tests */
       /** Account tests */
    test('Returns Account Authorized post 200 my', async () => { //success
        const response = await Account.postAuthorized(config.myCredentials)
        expect(response.status).toEqual(200)
        expect(response.body).toEqual(true)
    })
    test('Returns Generated Token post 200 my', async () => {  //success token returns
        const response = await Account.postGenerateToken(config.myCredentials)
        expect(response.status).toEqual(200)
    })
       /** Book Store test */
    test('Returns BookStore Books get 200', async () => { // success
        const response = await BookStore.getBooks()
        expect(response.status).toEqual(200)
    })
    /** Negative tests */
    test('Returns Empty Account Authorized post 400', async () => {
        const response = await Account.postAuthorized({})
        expect(response.status).toEqual(400)
        expect(response.body).toEqual({ code: '1200', message: 'UserName and Password required.' })
    })
    test('Returns Account Unauthorized post 404', async () => {
        const login = { "userName": "greg", "password": "12hhp" }
        const response = await Account.postAuthorized(login)
        expect(response.status).toEqual(404)
        expect(response.body).toEqual({ code: '1207', message: 'User not found!' })
    })
    test('Returns User post 406', async () => { // user is authorized, but 406 anyway
        const response = await Account.postUser(config.myCredentials)
        expect(response.status).toEqual(406)
        expect(response.body).toEqual({ code: '1204', message: 'User exists!' })
    })
    test('Returns Generated Token with Builder post 200 authorization failed', async () => {
        const token = new BuildAccount().addUsername().addPassword().generateToken()
        const response = await Account.postGenerateToken(token)
        expect(response.status).toEqual(200) 
        expect(response.body).toEqual({ token: null, expires: null, status: 'Failed', result: 'User authorization failed.'})
    })
});
