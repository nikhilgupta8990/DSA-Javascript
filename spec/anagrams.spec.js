import { describe, expect, it } from 'bun:test'
const anagrams1 = require("../src/structy/005-anagrams/approch1")

describe('Anagrams Approch 1', () => {
    it.each([
        [['restful', 'fluster'], true],
        [['cats', 'tocs'], false],
        [['monkeyswrite', 'newyorktimes'], true],
        [['paper', 'reapa'], false],
        [['elbow', 'below'], true],
        [['tax', 'taxi'], false],
        [['taxi', 'tax'], false],
        [['night', 'thing'], true],
        [['abbc', 'aabc'], false]
    ])('should be able to find whether anagram is true/false for %s', (input, output) => {
        const [input1, input2] = input
        expect(anagrams1(input1, input2)).toBe(output)
    })
})