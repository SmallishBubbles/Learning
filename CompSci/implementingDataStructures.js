// -------------- ArrayList ----------------

// ArrayList is done by directly interacting with an allocated piece of memory.
// You interact with that allocated piece of memory by addressing the specific indices in the array.
// In other words, you just treat it like a normal array.
// However things get a bit more complicated when deleting items from an ArrayList: 
// you have to collapse the list down to the spot where you deleted.


// [a, b, c, d, e, f, g]
// -> delete index 3
// -> array is[a, b, c, (blank), e, f, g]
// -> shift elements 4, 5, 6 back one index
// -> array is[a, b, c, e, f, g]
// -> decrement length


// Exercise: implement an array using objects

// Make a class (or constructor function; something you can call new on) called ArrayList.
// ArrayList should have the following properties(in addition to whatever properties you create):

// length - integer - How many elements in the array
// push - function - accepts a value and adds to the end of the list
// pop - function - removes the last value in the list and returns it
// get - function - accepts an index and returns the value at that position
// delete - function - accepts an index, removes value


class ArrayList {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    push(value) {
        this.data[this.length] = value;
        this.length++;
    }
    pop() {
        const ans = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return ans;
    }
    get(index) {
        return this.data[index];
    }
    delete(index) {
        const ans = this.data[index];
        this._collapseTo(index);
        return ans;
    }
    _collapseTo(index) {
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
    serialize() {
        return this.data;
    }
}




// -------------- LinkedList ----------------


//  LinkedList is made of a bunch of nodes that point to the next one in the list. 
// Every node in a LinkedLists has two properties, 
// the value of whatever is being store and a pointer to the next node in the list.

// The tradeoff between LinkedList and ArrayList: 
// LinkedList's adds and deletes are O(1) but the gets are O(n); 
// ArrayList's adds and deletes are O(n) but the gets are O(1)


// Exercise: implement a linked list using objects
// LinkedList is made by making nodes that have two properties, the value that's being stored and a pointer to
// the next node in the list.The LinkedList then keep track of the head and usually the tail(I would suggest
//   keeping track of the tail because it makes pop really easy.) 

//     length - integer - How many elements in the list
//     push - function - accepts a value and adds to the end of the list
//     pop - function - removes the last value in the list and returns it
//     get - function - accepts an index and returns the value at that position
//     delete - function - accepts an index, removes value from list, collapses,
//     and returns removed value


class LinkedList {
    constructor() {
        this.tail = null; // set initial tail to null
        this.head = null; // set initial head to null
        this.length = 0; // set initial length to zero
    }
    push(value) { // push method (add to end)
        const node = new Node(value); // create a new node using the node constructor class
        this.length++; // add one to length
        if (!this.head) { // if no head exists
            this.head = node; // set the head to this new node
            this.tail = node; // set the tail to this new node
        }
        else { // otherwise
            this.tail.next = node; // set the old tail's "next" to this new node
        }
        this.tail = node; // set the tail to the new node
    }
    pop() { // pop method (remove from end)
        return this.delete(this.length-1); // call the delete function the item on the end

        // if (!this.head) return null; // if no head exists return null
        // if (this.head === this.tail) { // if head = tail (there is only one element)
        //     const node = this.head; // set node to the head element
        //     this.head = this.tail = null; // set the head and tail to null
        //     return node.value; // return the value we stored in node
        // }
        // const penultimate = this._find(null, (value, nodeValue, i, current) => current.next === this.tail); // find the second to last item (??)
        // const ans = penultimate.next.value; // store the item (next value) after penultimate
        // penultimate.next = null; // set penultimate's next value to null
        // this.tail = penultimate; // set the tail to penultimate
        // this.length--; // subtract one from the length
        // return ans; // return the stored item
    }
    _find(value, test = this.test) { // find function and call test function
        let current = this.head; // set current to the head
        let i = 0; // set i to zero
        while (current) { // start a while loop
            if (test(value, current.value, i, current)) { // if the test value is equal to the value we're looking for
                return current; // return the value we're on
            }
            current = current.next; // set curent to the next node
            i++; // add one to our pointer
        }
        return null; // if we didn't find the thing at all, return null
    }
    get(index) { // get method
        const node = this._find(index, this.testIndex); // set node, call the find function for the index we are looking for and call the test index function
        if (!node) return null; // if it doesn't exist return null
        return node.value; // otherwise return the value
    }
    delete(index) { // delete method
        if (index === 0) { // if we want to delete the first item (position zero)
            const head = this.head; // set head to the head
            if (head) { // if head exists
                this.head = head.next; // set the head to the next item
            }
            else { // otherwise
                this.head = null; // set head to null
            }
            this.length--; // subract from the length
            return head.value; // return the value of the head
        }

        const node = this._find(index - 1, this.testIndex); // find the item before the one we are deleting
        const excise = node.next; // set new excise value to the next value from the node we found (this is the one we are deleting)
        if (!excise) return null; // if it doesn't exist return null
        node.next = excise.next; // set the next value of the node we found (the one before the one we're deleting) to the next value of the one we are deleting
        if (node.next && !node.next.next) this.tail = node.next; // if there's nothing after the one we just set our next value to, set the new tail value to that
        this.length--; // subract from the length
        return excise.value; // return the value we stored and removed
    }
    test(search, nodeValue) { // test function
        return search === nodeValue; // checks to see if the search we did found the value we were looking for, returns true or false
    }
    testIndex(search, __, i) { // test index function
        return search === i; // checks to see if the search we did found the pointer we were looking for
    }
    serialize() { // serialize method
        const ans = []; // set answer to empty array
        let current = this.head; // set current equal to the head
        if (!current) return ans; // if current doesn't exist return answer as is
        while (current) { // while current does exist
            ans.push(current.value); // push our current value to the new answer array
            current = current.next; // set current to the next value
        }
        return ans; // return the answer array
    }
}



class Node { // node class
    constructor(value) { // constructor method
        this.value = value; // set the value
        this.next = null; // set the next to null
    }
}






// --------------- Binary Search Tree (BST --------------

// Binary Search Tree!

/* 

Make a BST. The Tree class will have to keep track of a root which will be the first item added
to your tree. From there, if the item is less than the value of that node, it will go into its left subtree
and if greater it will go to the right subtree.

*/


class Tree {
    constructor() {
        this.root = null;
    }
    toObject() {
        return this.root;
    }
    add(value) {
        if (this.root === null) {
            this.root = new Node(value);
        }
        else {
            let current = this.root; // let current equal the root
            while (true) { // keep running until we specifically ask to break out
                if (current.value > value) { // if the root is larger than our new value
                    // go left
                    if (current.left) { // if the left node to our current node already exists
                        current = current.left; // move to that node as our current node
                    }
                    else { // if the left node to our current node does not exist
                        current.left = new Node(value); // create a new node there with our value
                        break; // break the loop
                    }
                }
                else { // if the root is smaller or equal to our new value
                    // go right
                    if (current.right) {
                        current = current.right;
                    }
                    else {
                        current.right = new Node(value);
                        break;
                    }
                }
            }
        }
        return this;
    }
}

class Node {
    constructor(value, left = null, right = null) { // set default parameters so that if nothing is passed in it will equal null
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
