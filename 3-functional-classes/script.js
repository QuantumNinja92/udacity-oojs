// console.log();
var p = function(){
  var str = "";
  for(var i = 0; i < arguments.length; i++){
  str = str + " " + arguments[i].toString();
}
console.log(str);
};
/*
Your Code Begin Here
*/
// Constructor Function
var Car = function(name){
  var obj = {};
  obj.name = name;
  obj.initSpeed = 60;
  obj.speed = obj.initSpeed;
  //obj.incSpeed = incSpeed;
  //obj.decSpeed = decSpeed;
  $.extend(obj, Car.methods); // this way it will save effort of editing functions here
  return obj;
};
// to save memory, define functions outside the constructor function
// so the interpreter will only visit it when they use it

// Here also defining "methods" object that will contain all our function
// now you can add any function you want and it will automatically be extended

// also instead of using "var" we will declare "methods" as property of "Car"
// for the purpose of declutering the "methods" object out of the global scope
// and nothing special about "Car.methods"
Car.methods = {
  incSpeed : function(){
    this.speed +=10;
  },
  decSpeed : function(){
    this.speed -=5;
  }
}
var Lemo = Car("Lemo");
p("The Car's Name ",Lemo.name);
Lemo.incSpeed();
Lemo.incSpeed();
Lemo.incSpeed();
p("current Speed ", Lemo.speed);

/* Here i've face a problem, i accidentally defined function after defining the variable
like the following
var decSpeed = function(){
  this.speed -=5;
}
using this function will result in error
function is not defined, which reminded me with the prototypal chains
Lemo.decSpeed();
*/
