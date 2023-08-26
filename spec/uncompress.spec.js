const uncompress1 = require("../src/structy/003-uncompress/approch1")

describe('uncompress approch 1', () => {
    it.each([['2c3a1t', 'ccaaat'], ['4s2b', 'ssssbb'], ['2p1o5p', 'ppoppppp'], ['3n12e2z', 'nnneeeeeeeeeeeezz'], ['127y', 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy']
    ])('should be able to greet %s', (input, output) => {
        expect(uncompress1(input)).toBe(output)
    })
})