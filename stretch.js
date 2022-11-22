// 1. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).


var addSix = createBase(6);

function createBase(num1) {
    return function (num2) {
        return num1 + num2;
    };
}

console.log(addSix(10));
console.log(addSix(21));

// 2. Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!

/* FP is programming based on functions that do not alter state and do not rely on any closures. If the same input is entered, the function will ALWAYS return the same output. This makes for less bugs, but can also be tedious.

OOP is based on mutable states. Function outputs are based on what state is input. This often leads to errors as states are changed and cannot be checked against previous states for accuracy, but it allows for greater flexibility when dealing with numerous objects/states. It is also generally easier to understand as it mimics real-world structure. */