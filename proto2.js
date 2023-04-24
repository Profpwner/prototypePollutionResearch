function Person(){
	this.name = 'Aakash',
	this.hobby = 'Hacking',
	this.job = 'Yes'
}

var person4 = new Person();

person4.hobby = "lkjsdflkjs"

//console.log(person4.__proto__ === person5.__proto__);
console.log(person4.__proto__ === Person.prototype);
console.log("Object's Object's Parent Proto " + (person4.__proto__.__proto__ === Object.prototype)) 

Person.__proto__.hobby = 'Coding';
var person5 = new Person();

console.log(person5.hobby)
console.log(person4.hobby)
console.log(Person.__proto__.hobby)