const pet = {
    "name": "Buddy",
    "species": "Dog",
    "age": 5
};

console.log(pet.name);
console.log(pet.species);
console.log(pet.age);

pet.age = 6;
console.log(pet.age);

// TODO: What do you think each console.log will print?
//It will print the name,species and age of the pet

const book = {
    "title": "JavaScript for Beginners",
    "author": "Jane Doe",
    "pages": 250,
    "isPublished": true
};

// TODO: List all the keys as a comment 
// (title, author, pages,   isPublished)
// TODO: List all the values as a comment 
// (Javascript for Beginners, Jane Doe, 250, true)

// Exercise 2: Create Your Own POJO
const pet = {
    "name": "Buddy",
    "species": "Dog",
    "age": 5
};

console.log(pet);

// TODO: What are the values for name, species, and age? Write as comments.
//Buddy, Dog, 5

const cableShow = {
    "name": "The Nanny",
    "created": "1993"
    "starred": "Fran Drescher"

};

console.log(cableShow);

//values: The Nanny, 1993, Fran Drescher

const sprite = {
    "name": "Hero",
    "x": 100,
    "y": 200
};

console.log(sprite);

// TODO: What does this object represent? Write your explanation as a comment.
//the object is the const sprite and it is described with the key-value pairs
//There are three properties and each propery holds a key-value pair. The keys are name,x,y  and the values are Hero,100,200

const car = {
    "make": "Toyota",
    "model": "Corolla",
    "year": 2020,
    "color": "Blue"
};
console.log(car);

// TODO: Fix the syntax error.
// TODO: Explain what was wrong in a comment. Mixing the comma behind value 2020


const sprite = {
    "name": "Hero",
    "x": 100,
    "y": 200
};

console.log(sprite.x);
sprite.x = 150;
console.log(sprite.x);

sprite.y = 250;
console.log(sprite.y);

// TODO: Write your guesses for each console.log as comments.
//sprite = 50