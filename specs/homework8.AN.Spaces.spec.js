import BuildSpace, { SpaceId, newSpace } from '../framework/fixtures/builder/newSpaces.Al.FF';
import Space from '../src/homework8.Al.Spaces';

describe('Testing Book Store API', () => {
    /** Positive Spaces tests */
    test('Returns New Space with builder post 200', async () => { 
        const title = new BuildSpace().addNewTitle().addDefaultCardTypeId().addExternalId()
        const response = await Space.createNewSpace(title)
        expect(response.status).toEqual(200)
    })
    test('Returns New Space with params post 200', async () => { 
        const response = await Space.createNewSpace(newSpace)
        expect(response.status).toEqual(200)
    })
    test('Returns list of spaces get 200', async () => { 
        const response = await Space.getListSpaces()
        expect(response.status).toEqual(200)
    })
    test('Returns space from account get 200', async () => { 
        const space_id = 75314
        const response = await Space.getSpace(space_id)
        expect(response.status).toEqual(200)
    })
    /** Negative Spaces tests */
    test('Does not Return New Space without body post 400', async () => { 
        const response = await Space.createNewSpace()
        expect(response.status).toEqual(400)
        expect(response.body).toEqual({message: "Space should have required property 'title'"}) 
    })
    test('Does not Return New Space with invalid apiKey post 401 Unauthorized', async () => { 
        const response = await Space.donotcreateNewSpace(SpaceId)
        expect(response.status).toEqual(401)
    })
});
