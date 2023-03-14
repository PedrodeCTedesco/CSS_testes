let dados = [
    {
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg"
    },

    {
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg"
    },

    {
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg"
    },

    {
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg"
    }
]

let dados1 = new XMLHttpRequest();

dados1.open('get', 'data.json');