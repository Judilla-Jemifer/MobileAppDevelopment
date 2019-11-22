//This is a creation of an object using "object literal" 
//the properties are the characteristics of the object such as "name" while the value is its corresponding value such as "Philippine Peso"
var curr = {
  name: "Philippine Peso",
  code: "PhP",
  country: "Philippines",
  value: 50.92
};



function showObject() {
var currencymsg = curr.name + " is also known as " + curr.code + ". It is used in the " + curr.country + " and has a value of " + curr.value + " for every 1 USD.";
document.getElementById("objectoutput").innerHTML = currencymsg;
}



function updateobject() {
     var inname = document.getElementById('nameinput').value;
 var incode = document.getElementById('codeinput').value;
 var incountry = document.getElementById('countryinput').value;
 var invalue = parseFloat(document.getElementById('valueinput').value);

//This is the "object constructor syntax" which uses the keyword "new Object()" to create an object    
    curr = new Object();
    curr.name = inname;
    curr.code = incode;
    curr.country = incountry;
    curr.value = invalue;
    
    document.getElementById("updateoutput").innerHTML = curr.name + " is also known as " + curr.code + ". It is used in the " + curr.country + " and has a value of " + curr.value + " for every 1 USD. -- This is created using new Object() function.";
}

//Javascript uses inheritance which means that it can inherit any property or method of an object. Since Javascript is using prototypes, it is using prototypal inheritance and not class inheritance. Code below shows how the User inherited the properties of Person.

//When it comes to instantiations, there are different types: functional, functional with shared methods, prototypal, and pseudo classical.

function Person(firstName, lastName) {
    this.First = firstName;
    this.Last = lastName;
}

Person.prototype.getName = function () {
    return "Hi! This is " + this.First + " " + this.Last + ". Welcome to my page! This message is created using Javascript inheritance. Check my topic2.js to know more.";
}

function User(firstName, lastName, age) {
    Person.call(this, firstName, lastName);
    
    this.age = 30;
}
//Prototypal Instantiation using the keyword "prototype" which is also part of the prototypical inheritance
User.prototype = new Person();
User.prototype.constructor = User;

//Instantiation using "new" keyword is Pseudoclassical
var usr = new User("Jemifer","Judilla", 31);
function inheritance() {
alert(usr.getName());
}