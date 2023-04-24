function Person(){
	this.name = 'Aakash',
	this.hobby = 'Hacking',
	this.job = 'Yes'
}

const a = { isAdmin: false };
const b = new Object();
const c = new Person();


a.constructor.prototype.toString = "x";

try {
  console.log(a);  // console.log does not call toString() on the "a" object
} catch (error) {
  console.log('Error:', error.message); // Output: Error: a.toString is not a function
}

try {
  console.log(b.toString());
} catch (error) {
  console.log('Error:', error.message); // Output: Error: b.toString is not a function
}

try {
    console.log(c.toString());  // Person object has been affected by the change to a.constructor.prototype
  } catch (error) {
    console.log('Error:', error.message); // Output: Error: b.toString is not a function
  }