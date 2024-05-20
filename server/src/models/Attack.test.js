const { Attack } = require('.')
const db = require('../db/config')

let Attack
beforeAll(async () => { 
    await db.sync({ force:true})
    attack = await Attack.create ({
        title: 'Lightening Breath',
        mojoCost: 3,
s       staminaCost: 5
    })
})

afterAll(async () => await db.sync({ force: true }))

describe('User', () => { 
    it('has an id', () => {
       expect(attack).toHaveProperty('id') 
    })
it('has correct title', function () {
expect(attack.title).toBe('Lightening Breath')
})
it('has the correct mojoCost', function () {
    expect(attack.mojoCost).toBe(3)
})
it('has the correct staminaCost', function () {
    expect(attack.staminaCost).toBe(5)
})
})