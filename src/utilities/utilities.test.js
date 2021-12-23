import { capitalizeFirstLetter } from "./utilities";

describe('capitalizeFirstLetter',()=>{
    test('party returns Party',()=>{
        const input = 'party'
        const result = capitalizeFirstLetter(input)

        const expectedResult = 'Party'
        
        expect(result).toBe(expectedResult)
    })
})