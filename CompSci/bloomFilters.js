/*
Bloom filters

Uses an array of true/false values and multiple hashing functions.
Will give you a "no" or a "maybe"
Works very fast
Is good for situations where a false positive is okay, but never a false negative
Eg. Recommending new news articles that someone hasn't read yet or might be interested in

you can not delete from a bloom filter
you can not allocate more space to a bloom filter later - set it up large enough in the first place
*/


// Bloom filter exercise


// here are your hashing functions. it's not essential you know how they work
// a library called xxhashjs is being loaded (as XXH) and we're using three different
// instances of that as your hashing functions
const h1 = string => Math.abs(XXH.h32(0xABCD).update(string).digest().toNumber() % 100);
const h2 = string => Math.abs(XXH.h32(0x1234).update(string).digest().toNumber() % 100);
const h3 = string => Math.abs(XXH.h32(0x6789).update(string).digest().toNumber() % 100);

// fill out these two methods
// `add` adds a string to the bloom filter and returns void (nothing, undefined)
// `contains` takes a string and tells you if a string is maybe in the bloom filter
class BloomFilter {
    // you'll probably need some instance variables
    store = new Array(100).fill(0);

    add(string) {
        // code here
        this.store[h1(string)] = 1;
        this.store[h2(string)] = 1;
        this.store[h3(string)] = 1;
        return undefined;
    }
    contains(string) {
        // code here
        if (this.store[h1(string)] === 1 && this.store[h2(string)] === 1 && this.store[h3(string)] === 1) {
            return true
        } else {
            return false
        }
    }
};

// unit tests
// do not modify the below code
describe('BloomFilter', function () {
    let bf;
    beforeEach(() => {
        bf = new BloomFilter;
    })
    it('returns false when empty', () => {
        expect(bf.contains("Brian")).toBe(false);
        expect(bf.contains("Sarah")).toBe(false);
        expect(bf.contains("Simona")).toBe(false);
    });
    it('handles one item', () => {
        expect(bf.contains("Brian")).toBe(false);
        bf.add("Brian");
        expect(bf.contains("Brian")).toBe(true);
        expect(bf.contains("Sarah")).toBe(false);
        expect(bf.contains("Simona")).toBe(false);
    });
    it('handles many items', () => {
        const names = ["Brian", "Simona", "Sarah", "Asim", "John", "Sean", "Jessie", "Paige", "Ashley"];
        names.forEach((item) => bf.add(item));
        names.forEach((item) => expect(bf.contains(item)).toBe(true));
        ["Sam", "Chris", "Taylor", "Florence"].forEach((item) => expect(bf.contains(item)).toBe(false));
    });
});