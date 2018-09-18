// recursion example 1 : Fibonacci sequence

function fibonacci(n) {
    if (n <= 2) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

function listFibonacci(places) {
    let sequence = [];
    for (var i = 1; i <= places; i++) {
        sequence.push(fibonacci(i));
    }
    return sequence;
}

listFibonacci(12);