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






// --------------- Binary Search Tree (BST) --------------

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



// --------------- AVL Tree (balanced BST) --------------

// AVL trees actively check if the tree is balanced after each add. 
// This happens recursively up the branches, checking to see the difference in length of each branch (right/left) 
// if the difference is not greater than 1, the tree is balanced at that point
// if the difference is more than that, we performa a rotation




/*
  AVL Tree
  
  
  Make a Tree class and a Node class as well (it will help _a lot_ with AVL trees) Whereas with BSTs we 
  could get away with most of the logic living in the Tree class, that will be a lot tougher with AVL
  trees dues how the function calls must be recursive in order to get the balancing correct.
  
  Tree must a method called add that takes a value and adds it to the tree and then correctly balances the
  tree. There is only one correct structure for any given order of adding numbers and the unit tests enforce
  that structure.


5
 \
  8

-> Currently valid AVL tree
-> .add called with 9

5 - node A
 \
  8 - node B
   \
    9 - node C

(on the way up from the recursion)
-> check balance of node C: left height is 0, right height is 0, balanced
-> check balance of node B: left height is 0, right height is 1, balanced
-> check balance of node A: left height is 0, right height is 2
   unbalanced, right heavy, child is right heavy

-> perform right rotation
-> swap the values of nodes A and B
-> make node B the left child of node A
-> make node C the right child of node A
-> move node B's right child to its left child
   (in this case they're both null)
-> make node A's _original_ left child
   (which was null in this case) the left child of node B
-> update the heights of all the nodes involved

      8 - node A
   /     \
  5        9
node B   node C


    
*/

// code exercise

class Tree {
    constructor() {
        this.root = null; // start our tree with a null root
    }
    add(value) { // to add a node/value
        if (!this.root) { // if there is no root
            this.root = new Node(value); // add a new node at the root
        }
        else { // otherwise
            this.root.add(value); // call the add function inside of our root node
        }
    }
    toJSON() { // return data in json format
        return JSON.stringify(this.root.serialize(), null, 4);
    }
    toObject() { // return data as an object
        return this.root.serialize();
    }
}

class Node {
    constructor(value = null, left = null, right = null) { // to make a new node we set the base values to null
        this.left = left; // if they give us a left value, add it (otherwise null)
        this.right = right; // if they give us a right value, add it (otherwise null)
        this.value = value; // if they give us a value, add it (otherwise null)
        this.height = 1; // set the basic height to one
    }
    add(value) { // add a new node to the tree

        if (value < this.value) { // if the value is smaller than the node we're in
            // go left

            if (this.left) { // if left already exists
                this.left.add(value); // recursively call the add function on that node
            }
            else { // if not
                this.left = new Node(value); // add the new value to the left of the node we're in
            }
            if (!this.right || this.right.height < this.left.height) { // if there is no right node at all, or the height of right is less than height of left
                this.height = this.left.height + 1; // add one to our height
            }
        }
        else { // otherwise
            // go right

            if (this.right) {
                this.right.add(value);
            }
            else {
                this.right = new Node(value);
            }
            if (!this.left || this.right.height > this.left.height) {
                this.height = this.right.height + 1;
            }
        }
        this.balance(); // call the balance function
    }
    balance() {
        const rightHeight = (this.right) ? this.right.height : 0; // check for the height of the right (if this.right exists, return the height of right, otherwise return zero)
        const leftHeight = (this.left) ? this.left.height : 0; // check for the height of the left

        console.log(this.value, leftHeight, rightHeight);

        if (leftHeight > rightHeight + 1) { // if the height of left is more than the height of right plus one
            const leftRightHeight = (this.left.right) ? this.left.right.height : 0; // check for the heights of that one's nodes
            const leftLeftHeight = (this.left.left) ? this.left.left.height : 0;

            if (leftRightHeight > leftLeftHeight) { // if the left value of the right node is more than the left left
                this.left.rotateRR(); // do a right rotation
            }

            this.rotateLL(); // do a left rotation
        }
        else if (rightHeight > leftHeight + 1) { // same on other side
            const rightRightHeight = (this.right.right) ? this.right.right.height : 0;
            const rightLeftHeight = (this.right.left) ? this.right.left.height : 0;

            if (rightLeftHeight > rightRightHeight) {
                this.right.rotateLL();
            }

            this.rotateRR(); // do a right rotation
        }
    }
    rotateRR() { // right rotation
        const valueBefore = this.value; // remember the value of the node we're on
        const leftBefore = this.left; // remember the node to the left
        this.value = this.right.value; // change the value of the node we're on to the value of the node to our right
        this.left = this.right; // change the node to the left of us to the node on the right of us
        this.right = this.right.right; // change the node on the right of us to the node on its right
        this.left.right = this.left.left; // change left's right to left's left
        this.left.left = leftBefore; // change the node on our left's left to the node that was originally on our left
        this.left.value = valueBefore; // change the value of our left node to the value that used to be ours
        this.left.updateInNewLocation(); // call update to set new heights on our left
        this.updateInNewLocation(); // and also on ourself
    }
    rotateLL() { // left rotation
        const valueBefore = this.value;
        const rightBefore = this.right;
        this.value = this.left.value;
        this.right = this.left;
        this.left = this.left.left;
        this.right.left = this.right.right;
        this.right.right = rightBefore;
        this.right.value = valueBefore;
        this.right.updateInNewLocation();
        this.updateInNewLocation();
    }
    updateInNewLocation() {
        if (!this.right && !this.left) { // if there is no right and there is no left
            this.height = 1; // set our height to one
        }
        else if (!this.right || (this.left && this.right.height < this.left.height)) { // if there is no right but there is a left and the right height is less than the left height
            this.height = this.left.height + 1; // set our height to the left height plus one
        }
        else { //if (!this.left || this.right.height > this.left.height)
            this.height = this.right.height + 1; // otherwise set the height to our right height plus one
        }
    }
    serialize() { // see everything in the tree
        const ans = { value: this.value };
        ans.left = this.left === null ? null : this.left.serialize();
        ans.right = this.right === null ? null : this.right.serialize();
        ans.height = this.height;
        return ans;
    }
}