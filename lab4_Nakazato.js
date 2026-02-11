//Task1
function calculateSum (n1, n2) {
    return n1 + n2;
}

let calculateproduct = function(n1, n2) {
    return n1 * n2;
};

let calculateDifference = (n1, n2) => n1 - n2;

console.log(calculateSum(10, 20));
console.log(calculateproduct(10, 20));
console.log(calculateDifference(10, 20));


//Task2
function calculateAverage(...nums) {
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    return total / nums.length;
}
console.log(calculateAverage(10, 20));


function greetUser(name = 'Guest') {
    return 'Hello ' + name;
}

console.log(greetUser());
console.log(greetUser('Alice'));


function totalArguments(){
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(totalArguments(1, 2, 3, 4));


//Task3
function createUser(username, role) {
    return {
        username: username,
        role: role
    }; 
    }

    console.log(createUser('Alice', 'Admin'));


    function isPositive(num) {
        return num > 0;
    }

    console.log(isPositive(5));
    console.log(isPositive(-3));

function logMessage(message) {
    console.log(message);
}
console.log(logMessage('Hello, World!'));


//Task4
function outerMessage() {
    let message = 'Hello from outer function!';
    return function inner() {
        console.log(message);
    };
}
let innerFunction = outerMessage();
innerFunction();

function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
        getValue: function() {
            return count;
        }
    };
}

let counter = createCounter();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
counter.decrement();
console.log(counter.getValue());

