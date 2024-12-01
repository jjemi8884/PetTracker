/**
 * Jusitn Jemison
 * 11/30/2024
 * 
 * This is a javascript that will input a list of pets for me.
 */



export function createPets() {
    const pets = {}
    petNames.forEach(animal => {
           const pet = {
            "id" : crypto.randomUUID(),
            "name": animal,
            "dob" : `${ranYear()}-${ranMonth()}-${ranDay()}`,
            "gender" : ranGender(),
            }
        pets[pet.id] = pet;
        });
    return pets;
}

const petNames = [ "Bob", "Gorge", "Sally", "Rosie", "Roxie", "Jelly"];

/**
 * 
 * @returns a year between 2000 and 2024
 */
function ranYear () {

    return Math.floor((Math.random() * 25) + 2000)
}

/**
 * @returns random month
 * 
*/
function ranMonth() {
    return Math.floor((Math.random() * 12) + 1)
}
/**
 *@reutrns a random day (yea no birhtday at the end of the month) 
 */
function ranDay() {
    return Math.floor((Math.random() * 28) + 1)
}

function ranGender () {
    const x = Math.floor(Math.random() * 100);
    if(x < 50) {
        return "Male";
    }else { 
        return "Female";
    };
}