/* 

Tree traversal

serializing a tree into a flat array

> depth first traversal
     > pre-order - use when copying a tree
            process self
            process left
            process right
     > in-order - use when order is important
            process left
            process self
            process right
     > post-order - use when deleting a tree
            process left
            process right
            process self
> breadth first traversal

*/


// depth first exercise

const preorderTraverse = (node, array) => {
    // fill this out
    if (!node) {
        return array
    }
    else {
        array.push(node.value);
        array = preorderTraverse(node.left, array);
        array = preorderTraverse(node.right, array);
    }
    return array;
};

const inorderTraverse = (node, array) => {
    // fill this out
    if (!node) {
        return array;
    }
    else {
        array = inorderTraverse(node.left, array);
        array.push(node.value);
        array = inorderTraverse(node.right, array);
    }
    return array;
};

const postorderTraverse = (node, array) => {
    // fill this out
    if (!node) {
        return array;
    }
    else {
        array = postorderTraverse(node.left, array);
        array = postorderTraverse(node.right, array);
        array.push(node.value);
    }
    return array;
};


// unit tests
// do not modify the below code
describe('tests', function () {

    const tree = {
        value: 8,
        left: {
            value: 4,
            left: {
                value: 3,
                left: {
                    value: 2,
                    left: null,
                    right: null
                },
                right: null
            },
            right: {
                value: 5,
                left: null,
                right: {
                    value: 7,
                    left: {
                        value: 6,
                        left: null,
                        right: null
                    }
                }
            }
        },
        right: {
            value: 12,
            left: {
                value: 10,
                left: {
                    value: 9,
                    left: null,
                    right: null
                },
                right: {
                    value: 11,
                    left: null,
                    right: null
                }
            }
        }
    };

    it('preorderTraverse', () => {
        expect(preorderTraverse(tree, [])).toEqual([8, 4, 3, 2, 5, 7, 6, 12, 10, 9, 11]);
    });

    it('inorderTraverse', () => {
        expect(inorderTraverse(tree, [])).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    });

    it('postorderTraverse', () => {
        expect(postorderTraverse(tree, [])).toEqual([2, 3, 6, 7, 5, 4, 9, 11, 10, 12, 8]);
    });
});





