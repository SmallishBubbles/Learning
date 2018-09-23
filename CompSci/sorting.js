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





