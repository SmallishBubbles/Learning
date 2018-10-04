// Data structure interfaces
// Explanation from Brian Holt, notes added.



// ****** Sets (also called collections in some languages) ******

// A set allows allows at least four things: add, remove, contains, and toList.
// The basic idea is that you can add items to a set and then later check if they're there. 
// You can also request later a list of those items in the set (though with no guaranteed order; sets have no notion of order.) 
// They're also useful for deduplication since you can only add something to a set once.

// Think of sets as an amorphous cloud. Holds just keys.

// Sets are now a native part of javascript (ES6)




// ****** Maps (also called dictionaries in some languages) ******

// Maps are quite similar to simple JavaScript objects. 
// Maps are a set/collection of keys that have values associated with those keys. 
// Unlike objects, they don't have prototypes, inheritance, methods, or anything of that sort. 
// Maps are also similar to associative arrays in other languages. 
// Again, since the keys are a set, there cannot be duplication of keys (makes sense, right?) 
// You can have duplication of values though. 
// Key 'thing' can have value 'map' while key 'other thing' can have a value of 'map' as well.
// Like sets, maps have no concept of order

// Think of maps as key value pairs. Holds keys along with a value.

// Maps are now a native part of javascript (ES6)




// ****** Stacks ******

// Stack is an interface that adheres to the "Last-In First-Out" (LIFO) mantra. 
// In a stack, you can only push (add) or pop (remove.) 
// The last thing you pushed will be what pop returns to you (pop will also remove it from the stack.) 
// Often they'll have a method called peek too which just looks at the top value of the stack without modifying the stack.
// Arrays use stack methods, but aren't actual stacks because we have access to any values, not just the last one.
// Stacks form during recursion.

// Programming is a stack, as your code gets read, diferent functions get called and pushed to the top. 
// When your code reaches a return, it pops off the item and goes down to the previous process with its new information.

function double(x) { return 2 * x; }
function squareAndAddFive(y) { return square(y) + 5; }
function square(z) { return z * z; }

function maths(num) {
    var answer = double(num);
    answer = squareAndAddFive(answer);
    return answer;
}

maths(5);

// Let's examine how JavaScript actually handles this.


//   -> maths is called; JS pushes maths call on its call stack
//   -> inside maths, double is called; JS pushes double onto its call stack
//   -> doubles completes, returns value 10; JS pops double off its call stack
//   -> back inside maths, squareAndAddFive is called;
//      JS pushes squareAndAddFive on its call stack
//   -> inside squareAndAddFive, square is called;
//      JS pushes square on its call stack

// Let's look at call stack right now

// square
// squareAndAddFive
// maths
// main

//   -> square completes, returns 100
//   -> squareAndAddFive completes, returns 105
//   -> maths completes, returns 105





// ****** Queues ******

// Queues adhere to the "First-In First-Out" mantra. 
// As the name may invoke the imagery for you, it's similar to people queueing in line (hopefully.) 
// All stacks need to have the methods enqueue (add/push) and dequeue (remove/pop). 
// Like stacks, they'll have peek to see what the next element is to dequeue.

// Queues are useful for lots of programming problems. How about print jobs? 
// Usually you want things to print in the order sent to the printer; 
// otherwise Janice from Accounting is going to be printing all of her documents before you can print anything.

// There are also priority queues as well.
// In a priority queue you also assign a priority to the elements that are enqueued. 
// Items that have higher priorities get dequeued first. This is useful for networking; 
// some packets are more important than others. If you're streaming video, 
// that gets a high priority because getting a packet later means likely skipping some frames, 
// whereas syncing to Dropbox can wait for a lull in network traffic to continue syncing.
