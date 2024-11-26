/**
 * This JS file will return a selected animal from the 
 * list generatred from Slack in Mark's spirit animal list
 * It is intended to be used to have a defualt sleection to
 * begin the pet tracker website.
 * 
 */


export function getRandomSpiritAnimal() {
    const animals = [
        "Lion",
        "badger",
        "fox",
        "rabbit",
        "dragon",
        "bee",
        "Butterfly",
        "Horse",
        "otter",
        "Cow",
        "Dog",
        "Owl",
        "Dodo",
        "Frog",
        "Dolphin",
        "wolf",
        "snake"
    ]

    return  `${animals[Math.floor(Math.random() * animals.length)]}`;   
};