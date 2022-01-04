import { capitalizeFirstLetter,roundNumber,timeAgo, getDimension } from "./utilities";

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

describe('timeAgo',()=>{
    test('1640802214 (with now equals 1640835266) returns `9 hours ago`',()=>{
        const input = 1640802214
        const now = 1640835266
        const result = timeAgo(input,now)

        const expectedResult = '9 hours ago'
        expect(result).toBe(expectedResult)
    })

    test('1640832566 (with now equals 1640835266) returns `45 minutes ago`',()=>{
        const input = 1640832566
        const now = 1640835266
        const result = timeAgo(input, now)

        const expectedResult = '45 minutes ago'
        expect(result).toBe(expectedResult)
    })

    test('1640835100 (with now equals 1640835266) returns `just now`',()=>{
        const input = 1640835100
        const now = 1640835266
        const result = timeAgo(input, now)

        const expectedResult = 'just now'
        expect(result).toBe(expectedResult)
    })

    test('3500 second before now returns `58 minutes ago`',()=>{
        const input = Date.now()/1000 - 3500
        const result = timeAgo(input)

        const expectedResult = '58 minutes ago'
        expect(result).toBe(expectedResult)
    })
})