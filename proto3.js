function Person(){
	this.name = 'Aakash',
	this.hobby = 'Hacking',
	this.job = 'Yes'
}

// add  a property

Person.prototype.language = 'Hindi';

// create an object

var person2 = new Person();

Person.prototype.hobby = 'Coding';
console.log(Person.prototype.hobby === person2.__proto__.hobby)
console.log("Will we see Coding: " + person2.hobby);
console.log("Person2.language " + person2.language);

// Changing the property value of Prototype
Person.prototype.hobby = 'Coding';

var person3 = new Person();

Person.prototype.language = 'Coding';

console.log("person2.language " + person2.language);
/*
Person.prototype = {'language': "Test",
                     "toString": ()=>{while(true){}}
}
*/

Person.prototype = {'language': "Test",
                     __proto__: {__proto__: {"toString": "x"}}
}


var person7 = new Person();
//person7.__proto__.__proto__.toString = "x"
console.log(person7)

//person3.__proto__ = {'language': "Test",
//"toString": ()=>{while(true){}}}

console.log("Are protos equal" + (person2.__proto__ === person3.__proto__));

console.log(Object.prototype.toString) // Object prototype's toString method is not overridden
console.log(person2.__proto__.toString) // Object prototype's toString method is not overridden
console.log(person7.toString())  //Only the Person prototype's toString method is overridden but that may be enough
console.log(person3.language);

console.log(person2.hobby)
console.log(person2.language);
Person.__proto__.toString = ()=>{alert("polluted")}

console.log(person3.toString())

console.log(person2)
console.log("Stuck?")


