// Sorting method 1:
//  Bubble Sort

// Bubble sort works by comparing two adjacent numbers next to each other and then
// swapping their places if the smaller index's value is larger than the larger
// index's. Continue looping through until all values are in ascending order


// Excersize 1: Create a bubble sort algorithm

function bubbleSort(nums) {
    do {
        var swapped = false;
        for (var i = 0; i < nums.length; i++) {
            //console.log(nums);
            if (nums[i] > nums[i + 1]) {
                var temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return nums;
};

bubbleSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]);





// Sorting method 2:
// Insertion Sort

// The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
// The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is.The inner
// loop goes over the sorted part of the list and inserts it into the correct position in the array.

function insertionSort(nums) {
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            //console.log(nums)
            if (nums[i] < nums[j]) {
                let spliced = nums.splice(i, 1); // splice takes out an element. This line makes a new array by going to position i and taking out 1 element for itself.
                nums.splice(j, 0, spliced[0]); // splice the number in. Go to position j, take out zero elements, and put in the element at position 0 from our new "spliced" array.
            }
        }
    }
    return nums;
};

insertionSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1])

// Note to self, learn more about splicing and modifying arrays ...







// Sorting method 3:
// Merge sort

// The basic gist of merge sort is that you're going to take your big list, and first divide down in 
// two half size lists and recursively call merge sort on those smaller list, which in turn will do the 
// same. The base case is when you have a list of one, at which point you will return that sorted list 
// of one. On the way up the recursive calls, you will merge those sorted lists together (preferably by 
// another merge function you'll write) that walks through both lists simultaneously and inserts the smaller 
// value first, effectively creating a bigger sorted list.


function mergeSort(nums) {
    if (nums.length < 2) {
        return nums; // if the length of the array is already one, just return it and end the loop
    }
    const length = nums.length;
    const middle = Math.floor(length / 2);
    const left = nums.slice(0, middle); // slice out the first half of the array
    const right = nums.slice(middle, length); // slice out the second half of the array

    // can also use the below instead of calling the recursion in the return
    // const sortedLeft = mergeSort(left);
    // const sortedRight = mergeSort(right);

    return merge(mergeSort(left), mergeSort(right)); // return calling merge which is below, 
};                                                  // and the recursive function mergeSort, 
                                                    // which is progressively making new smaller arrays
                                                    // until it gets to lengths less than 2


function merge(left, right) { //merge takes in both the left and right arrays
    const results = []; 

    while (left.length && right.length) { // while both arrays remain/exist
        if (left[0] <= right[0]) { // if the first item in the "left" array is smaller
            results.push(left.shift()); // push it to the front of results and remove it from the array
        }
        else {
            results.push(right.shift()); // otherwise push the first item from "right" and remove it
        }
    }

    return results.concat(left, right); // return results with the remainder of the left or right array (whichever remained)
}; // remember that this function is being recursively called, within the mergeSort array, so this will happen until we get back to one long array, now sorted!

mergeSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1])




// Sorting method 4
// Quick Sort

// The basic gist is that you take the last element in the list and call that the pivot. 
// Everything that's smaller than the pivot gets put into a "left" list and everything 
// that's greater get's put in a "right" list. You then call quick sort on the left and right 
// lists independently (hence the recursion.) After those two sorts come back, you concatenate 
// the sorted left list, the pivot, and then the right list (in that order.) The base case is 
// when you have a list of length 1 or 0, where you just return the list given to you.


// [4,9,3,5] list
// -> 5 is made the pivot since it's the last in the array
// -> divide list into two lists, [4,3] and [9]
// -> call quicksort on those two lists

// [4, 3]
// -> 3 is pivot
// -> call quicksort on [] and [4]
// -> those both return as is as they are the base case of length 0 or 1
// -> concat [], 3, and [4]
// -> return [3,4]

// [9]
// -> returns as this it is a base case of length 1

// (back into the original function call)
// -> call concat on [3,4], 5, and [9]
// -> return [3,4,5,9]



// Quicksort should grab a pivot from the end and then separate the list (not including the pivot)
// into two lists, smaller than the pivot and larger than the pivot.Call quickSort on both of those
// lists independently.Once those two lists come back sorted, concatenate the "left"(or smaller numbers)
// list, the pivot, and the "right"(or larger numbers) list and return that.The base case is when quickSort
// is called on a list with length less - than - or - equal - to 1. In the base case, just return the array given.



function quickSort(nums){
    if (nums.length < 2){
        return nums;
    }

    let pivot = nums[nums.length-1];
    let left = []
    let right = []

    for (var i=0; i<nums.length-1; i++){
        if (nums[i] <= pivot) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];

}

quickSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]);