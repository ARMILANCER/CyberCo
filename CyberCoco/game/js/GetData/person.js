class Person {
    constructor() {
        this.image = new Image();
    }

    randPerson() {
        const randNum = Math.floor(Math.random() * 6) + 1;
        // Assuming you have an array of image URLs named 'personImages'
        this.image.src = `person${randNum}.png`; // Assuming the images are named like 'person1.png', 'person2.png', etc.
    }
}

// Usage example
const person = new Person();
person.randPerson();
