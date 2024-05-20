const { describe, it, expect, beforeAll, afterAll } = require ('@jest/globals')
const { User, Deck, Card, Attack } = require('.')
const db = require('./src/db/config')

describe('user and deck', () => {
    it('has a one-to-one association', async () => {
        const user = await User.create({
            username: 'Gandalf'
        })

        const deck = await Deck.create({
            name: 'Niv Mizzet',
            xp: 500
    })

    await user.setDeck(deck)

    const associateDeck = await user.getDeck()
    expect(associateDeck.UserId).toBe(user.id)
})
})

describe('deck and card', () => {
    it('has a one-to-many association', async () => {
        const deck = await Deck.create({
            name: 'Niv Mizzet',
            xp: 500
        })

        const card0 = await Card.create({
            name: 'Niv Mizzet',
            mojo: 5,
            stamina: 6,
            imgUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=645349&type=card'
        })
        const card1 = await Card.create({
            name: 'Niv Mizzet',
            mojo: 5,
            stamina: 6,
            imgUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=645349&type=card'
        })
        const associateCards = await deck.getCards()
        expect(associateCards).toHaveLength(3)

        await deck.addCards([card0, card1, card2])

        const associatedCards = await deck.getCards()
        expect(associateCards[0].name).toBe('Niv Mizzet 0')
        expect(associateCards[0].name).toBe('Niv Mizzet 1')
        expect(associateCards[0].name).toBe('Niv Mizzet 2')
    })
})
describe('card and attack', () => {
    it('has a many-to-many association', async () => {
        const card = await Card.create({
            name: 'Niv Mizzet',
            mojo: 5,
            stamina: 6,
            imgUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=645349&type=card'
        })
        const attack = await Attack.create({
            title: 'Lightening Breath',
            mojoCost: 3,
            staminaCost: 5
        })
        await card.addAttack(attack)
        await attack.addCard(card)

        const associatedAttacks = await card.getAttacks()
        expect(associatedAttacks).toHaveLength(1)
    })
})
describe('card and attack', () => {
    it ('has a many-to-many association' , async () => {
        const card = await Card.create({'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=645349&type=card'})
    })}

    const attack = await Attack.create({
        title: 'Lightening Breath',
        mojoCost: 3,
        staminaCost: 5
    })

    await card.addAttack(attack)
    await attack.addCard(card)

    const associatedAttacks = await card.getAttacks()
    expect(associatedAttacks).toHaveLength(1)
    expect(associatedAttacks[0].title).toBe('Lightening Breath')

    const associateCards = await attack.getCards()
        expect(associateCards).toHaveLength(1)
        expect(associateCards[0].name).toBe('Niv Mizzet')


