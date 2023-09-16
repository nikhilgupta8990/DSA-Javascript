import { describe, expect, it } from 'bun:test'
const maxValue1 = require("../src/structy/001-max-value/approch1")

describe('max Value Approch 1', () => {
    it.each([[[4, 7, 2, 8, 10, 9], 10], [[10, 5, 40, 40.3], 40.3], [[-5, -2, -1, -11], -1],
    [[42], 42], [[1000, 8], 1000], [[1000, 8, 9000], 9000], [[2, 5, 1, 1, 4], 5]
    ])('should be able find max from "%s" to be "%s"', (arr, res) => {
        expect(maxValue1(arr)).toBe(res)
    })
})