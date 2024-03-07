"use strict";
let greet;
// greet = "hello"
greet = () => {
    console.log("Hello, again");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
