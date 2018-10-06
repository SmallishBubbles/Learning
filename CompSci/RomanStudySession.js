//Codewars Descending Order (7kyu)


function descendingOrder(n) {
    let digits = n.toString().split("").map(Number);
    // bubble sort
    do {
        var swapped = false;
        for (var i = 0; i < digits.length; i++) {
            console.log(digits);
            if (digits[i] < digits[i + 1]) {
                var temp = digits[i];
                digits[i] = digits[i + 1];
                digits[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped === true);
    return Number(digits.join(""));
}

descendingOrder(123456789)




function descendingOrder2(n) {
    let digits = n.toString().split("").map(Number);
    digits.sort(function (a, b) { return b - a });
    return Number(digits.join(""));
}

descendingOrder2(123456789) // 987654321







// Codewars Square Every Digit (7kyu)

// Welcome.In this kata, you are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
    let nums = num.toString().split(""); // ["9","1","1","9"];
    let ans = []; // make empty answer array

    for (var i = 0; i < nums.length; i++) { // loop through nums
        ans.push(Math.pow(nums[i], 2)); // push squared number in to answer [81,1,1,81]
    }

    return Number(ans.join("")) // return the array joined together as a number

}

squareDigits(9119); // 811181







// https://www.codewars.com/kata/find-the-next-perfect-square
// CodeWars find the next perfect square (7kyu)

// You might know some pretty large perfect squares.But what about the NEXT one ?

//     Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square, than - 1 should be returned.You may assume the parameter is positive.

//     Examples:

// findNextSquare(121)-- > returns 144
// findNextSquare(625)-- > returns 676
// findNextSquare(114)-- > returns - 1 since 114 is not a perfect


// check to see if sq is a perfect square Math.sqrt(x)
// if not, return negative 1
// if yes, find the next perfect square
// take square root, add one, square that


function findNextSquare(sq) {
    if (Math.sqrt(sq) % 1 === 0) { // if the square root is a whole number (no remainder when divided by one)
        return (Math.pow(Math.sqrt(sq) + 1, 2)) // return the quare root plus one, squared
    } else { // if the square root is not a whole number
        return -1; // return -1
    }
}


findNextSquare(121) // 144