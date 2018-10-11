// Hi :)

// https://www.codewars.com/kata/persistent-bugger

/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until you reach a single digit.

For example:
 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit
 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2
 persistence(4) === 0 // because 4 is already a one-digit number
 
 
 > change to string xx
 > separate digits xx
 > use a while loop OR recursion
 > keep a count (new var)
 > return the count
 
 */


function persistence(num) {
    let digits = num.toString().split(''); // ['3', '9'] // ['2', '7'] // ['1', '4'] // ['4']
    let count = 0; // 1 // 2 // 3
    while (digits.length > 1) {
        let sum = digits[0];
        for (var i = 1; i < digits.length; i++) {
            sum = sum * digits[i];
        }
        digits = sum.toString().split('');
        count++
    }
    return count;
}


persistence(39) // 3



/****************************************************

// https://www.codewars.com/kata/find-the-odd-int

Given an array, find the int that appears an odd number of times.
There will always be only one integer that appears an odd number of times.


  > for loop
  > way to keep track
  > modulous operator % to see if even or odd
  > for loop inside of for loop
  > or key / object
  
  > loop through the whole array
  > each time we get to item, check if it already in the key
  > if yes, add to the count of that key
  > if no, add new key
  
  > check values of the key for an odd int


*/

/*var obj = {0: 8, 1: 9, 2: 10};

var keys = Object.keys(obj);

var len = keys.length*/

function findOdd(A) {
    let myKeys = {}; // create new object 
    let ans = undefined; // save spot for answer

    for (var i = 0; i < A.length; i++) { // loop through given array
        if (myKeys.hasOwnProperty(A[i]) === true) { // if our "myKeys" object already has an item named for the value we are on
            myKeys[A[i]]++; // add one to the count of that value
        }
        else { // if it does not already have the number in our key
            myKeys[A[i]] = 1; // create the number and start it at 1
        }
    }
    console.log(myKeys); //{ 1: 2, 2: 2, 3: 2, 4: 2, 5: 3, 20: 2, '-1': 2, '-2': 2 }


    let keyNames = Object.keys(myKeys); // make an array with the key names only // ['1', '2', '3', '4', '5', '20', '-1', '-2'];
    let keyValues = Object.values(myKeys); // make an array with key values only // [2,    2,   2,   2,   3,    2,    2,    2]


    for (var i = 0; i < keyValues.length; i++) { // use a new for loop to loop through key values
        if (keyValues[i] % 2 !== 0) { // if the value is odd
            // return Number(keyNames[i])
            ans = keyNames[i] // set anser to the actual number, not the count
        }
    }

    return Number(ans); // return the answer as a number
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]) // 5






function findOdd2(A) {
    let answer = 0; // save a spot for answer
    let count = 0; // save a spot for a count

    for (var i = 0; i < A.length; i++) { // loop through given array
        for (var j = 0; j < A.length; j++) { // secondary loop inside
            if (A[j] == A[i]) { // if the current item in our second loop is the same as the item in our first loop
                count++; // add to the count
            }
        }
        if ((count % 2) == 1) { // if the count is odd
            answer = A[i]; // set the anser to that item
            count = 0; // return the count to zero
            // could also return here
        } else { // if the count is even
            count = 0; // reset the count
        }
    }
    return answer;  