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





// Sorting metho 2:
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



