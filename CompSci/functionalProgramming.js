// Functional Programming 101

/*
Helps structure your code to make it maintainable, compose able, and easy to reason about.
Helps avoid side effects
Using higher order functions and functions within functions
Begin to describe what we want to happen rather than imperatively telling how
*/

// Higher order functions

// .map 
// loops through an array and modifies each item in the array
/* Map has similarities to forEach. It takes a function in and applies that function individually to each element in that array. 
Where it differs from forEach is that map creates a new array of the values returned within the function. 
It allows you to transform whole lists of values without modifying the original list.*/

const double = num => 2 * num;
const doubleEach = input => input.map(double);

const square = num => num * num;
const squareEach = input => input.map(square);

const doubleAndSquareEach = input => input.map(double).map(square);


// example of what map is doing in the background
const myMap = (array, fn) => {
    const answer = [];
    for (let i = 0; i < array.length; i++) {
        answer.push(fn(array[i]));
    }
    return answer;
};



// .reduce 
//takes in an array and combines it to a single item
/*
Useful when you ave a list of values that you want to combine in some meaningful way down to one value
A reduce function involves a list it's being called, 
    a function that does the reducing, 
    the accumulator, 
    and the seed value. 
    
The accumulator is the interim value that is passed into each call of the reducer function that the function then returns. 
The value returned is then passed into the next call of the reducer function on the next value. 
The seed value is the value of the first accumulator. If there's no seed value, the zero index in the array is the seed.
*/

const addTogether = list => {
    return list.reduce((acc, num) => acc + num, 0);
};

const concatenateStringsWithSpaces = list => {
    return list.reduce((acc, string) => acc + string + " ", "");
};

const squaresAndSubtracts = list => {
    return list
        .map(num => num * num)
        .reduce((accumulator, num) => accumulator - num);
};


// example of what reduce is doing in the background
const myReduce = (list, fn, seed) => {
    let answer = seed;
    for (let i = 0; i < list.length; i++) {
        answer = fn(answer, list[i]);
    }
    return answer;
};



// .filter
// .filter takes a list of items and returns a more useful subset

/* 
Filter takes a list of items and pares out some of the items you don't need in the list. 
All you have to do is write a filter function that returns true if you want the item to stay in the list or false if you want it removed from the list. 
The returned result is a new list with just the items you returned true on.
*/

const filterOutOdds = nums => nums.filter(num => num % 2 === 0);

const filterState = (list, state) => list.filter(person => person.state === state);

const showOutOfCADevs = list => {
    return list
        .filter(person => person.state !== 'CA')
        .map(person => person.name.toUpperCase())
        .reduce((acc, name) => `${acc}, ${name}`);
};


// example of what filter is doing in the background
const myFilter = (list, fn) => {
    const answer = [];
    for (let i = 0; i < list.length; i++) {
        if (fn(list[i])) {
            answer.push(list[i]);
        }
    }
    return answer;
};