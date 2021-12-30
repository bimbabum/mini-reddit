import { capitalizeFirstLetter,roundNumber } from "./utilities";

describe('capitalizeFirstLetter',()=>{
    test('party returns Party',()=>{
        const input = 'party'
        const result = capitalizeFirstLetter(input)

        const expectedResult = 'Party'
        
        expect(result).toBe(expectedResult)
    })
})

describe('roundNumber', ()=>{
    test('`23409 returns 23.4k', ()=>{
        const input = 23409
        const result = roundNumber(input)

        const expectedResult = '23.4k'
        expect(result).toBe(expectedResult)
    })

    test('`349` returns `349`', ()=>{
        const input = 349
        const result = roundNumber(input)

        const expectedResult = 349
        expect(result).toBe(expectedResult)
    })
})