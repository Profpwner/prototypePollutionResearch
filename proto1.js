const a = {"isAdmin":false};
const b = new Object();
console.log(a.__proto__ === b.__proto__);
console.log(a.__proto__ === Object.prototype);

a.__proto__.isAdmin = true;
console.log("Is a an admin now: " + a.isAdmin + " b's prototype " + b.__proto__.isAdmin);
console.log("How about b.isAdmin (not directly prototype) " + b.isAdmin);
a.__proto__.toString = "x";
a.constructor.prototype.toString = "x";

const c = new Object();

console.log(a)
console.log(c)
console.log(a.toString())