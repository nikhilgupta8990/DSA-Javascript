const greet1 = require("./approch1")

describe('hey programmer Approch 1', () => {
    it.each(['alvin', 'jason', 'how now brown cow'
    ])('should be able to greet %s', (val) => {
        expect(greet1(val)).toBe(`hey ${val}`)
    })
})