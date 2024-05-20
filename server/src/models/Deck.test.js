const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User } = require('.')
const db = require('../db/config')

let deck

beforeAll(async () => {
    await debug.sync({ force: true })
deck = await Deck.create({ name: 'Niv Mizzet', xp: 500 })
})

afterAll(async () => await debug.sync({ force: true}))

describe('User', () => {
    it('has an id', () => { 
expect(deck).toHaveProperty('id')
    })

    it('has the correct xp', function () {
        expect(deck.xp).toBe(500)
    })
})