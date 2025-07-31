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



//Exercise 1

const book = {
    "title": "JavaScript for Beginners", //key = title, value =  "JavaScript for Beginners"
    "author": "Jane Doe", // key = author , value =  Jane Doe
    "pages": 250, // key = pages, values = 250
    "isPublished": true // key = isPublished, value = true
};

// TODO: List all the keys as a comment
// TODO: List all the values as a comment
//------------------------------------------------------------------------------------------

//Exercise 2 (updated for lesson4-3 exercise 2)

const pet2 = {
    "name": "Buddy", // value Buddy
    "species": "Dog", // value Dog
    "age": 5 // value 5
};

console.log(pet2.name);
console.log(pet2.age);
pet2.age = 6;
console.log(pet2.age);

// TODO: Print the number of pages.
// TODO: Update pages to 300.
// TODO: Print pages again to confirm update.
// TODO: What are the values for name, species, and age? Write as comments.

//-----------------------------------------------------------------------------------------

//Exercise 3 (changed for "look and guess" lesson 4-3, changed for 4-3 exercise 3)
const sprite = {
    "name": "Hero",
    "x": 100,
    "y": 200
};
console.log(sprite);
console.log(sprite.x); // prints 100
sprite.x = 150; // changes x to 150
console.log(sprite.x); //prints 150

sprite.y = 250; // changes y to 250
console.log(sprite.y); //prints 250

console.log(sprite.x); // lesson 4-3-3
console.log(sprite.y); // lesson 4-3-3
sprite.x = 120; // lesson 4-3-3
sprite.y = 220; // lesson 4-3-3
console.log(sprite.x); // lesson 4-3-3
console.log(sprite.y); // lesson 4-3-3

// this object repersent a sprite, assuming the main character of a game, and its starting location
// TODO: What does this object represent? Write your explanation as a comment.
// TODO: Write your guesses for each console.log as comments.

// TODO: Print x and y values. 4-3-3
// TODO: Update x to 120 and y to 220. 4-3-3
// TODO: Print x and y again. 4-3-3

//-----------------------------------------------------------------------------------------------

//Exercise 4

const car = {
    "make": "Toyota",
    "model": "Corolla",
    "year": 2020, // missing comma after 2020
    "color": "Blue"
};

// TODO: Fix the syntax error.
// TODO: Explain what was wrong in a comment.
console.log(car);








