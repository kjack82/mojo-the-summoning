const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User } = require('.')
const db = require('../db/config')

// define in global scope
let card

it('has the correct name', function () {
    expect(card.name).toBe('Niv Mizzet')
})
it('has the correct mojo', function( {
    expect(card.mojo).toBe.(5)
}))
it('has the correct stamina', function () {
    expect(card.stamina).toBe(6)
})
it('has the correct imgUrl', function() {
    expect(card.imgUrl).toBe('https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=645349&type=card')
})
test('imgUrl is actually a URL', function () {
    expect(card.imgUrl).toMatch(/\b(https?|ftp):\/\/[-A-Za-Z0-9+&@#/%?=~_|!:,.;]*[-A-Za-z0-9+&@#/%=~_|]/)
})
test('imgUrl is actually a URL', function() {
    const urlPattern = /\b(https?|ftp):\/\/[-A-Za-Z0-9+&@#/%?=~_|!:,.;]*[-A-Za-z0-9+&@#/%=~_|]/
    expect(card.imgUrl).toMatch(urlPattern)
})