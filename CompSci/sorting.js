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
    const right = nums.slice(middle); // slice out the second half of the array

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