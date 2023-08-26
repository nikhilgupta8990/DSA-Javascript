const greet1 = require("../src/structy/000-hey-programmer/approch1")

describe('hey programmer Approch 1', () => {
    it.each(['alvin', 'jason', 'how now brown cow'
    ])('should be able to greet "%s" to prefix with "hey "', (val) => {
        expect(greet1(val)).toBe(`hey ${val}`)
    })
})