const compress1 = require("../src/structy/004-compress/approch1")

describe('compress approch 1', () => {
    it.each([['ccaaatsss', '2c3at3s'], ['ssssbbz', '4s2bz'], ['ppoppppp', '2po5p'], ['nnneeeeeeeeeeeezz', '3n12e2z'], ['yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy', '127y']
    ])('should be able to greet %s', (input, output) => {
        expect(compress1(input)).toBe(output)
    })
})