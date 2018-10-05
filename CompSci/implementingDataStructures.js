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