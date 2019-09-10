import { drops as d } from './DropList'

const areas = [
    { 
        area: 1,
        name: "Raybach's Glade",
        minutes: 0.1,
        emoji: "612399876956749824",
        drops: [
            {
                ...d.a1,
                amount: (5 + (Math.floor(Math.random() * 3)))
            },
            {
                ...d.a2,
                amount: (3 + (Math.floor(Math.random() * 2)))
            },
            {
                ...d.a3,
                amount: (1 + (Math.floor(Math.random() * 1)))
            }
        ]
    },
    {
        area: 2,
        name: "Grotto of the Undying",
        minutes: 1,
        emoji: "612401396175732902",
        drops: [
            d.a4,
            d.a5,
            d.a6,
            d.a7
        ]
    },
    {
        area: 3,
        name: "Kithasi Forest",
        minutes: 1,
        emoji: "612403117161709588",
        drops: [
            d.a8,
            d.a9,
            d.a10,
            d.a11
        ]
    }
]


export {
    areas
}