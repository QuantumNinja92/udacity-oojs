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
  // instead of object literal notation {}
  // we will use the Object notation to create new Object
  // so we can assign the prototype Object
  // that will delegate the failed lookups to it
  // instead of $.extend(obj, Car.methods);
  var obj = Object.create(Car.prototype);
  obj.name = name;
  obj.initSpeed = 60;
  obj.speed = obj.initSpeed;
  return obj;
};
Car.prototype.incSpeed = function(){
    this.speed +=10;
  };
Car.prototype.decSpeed = function(){
    this.speed -=5;
  };

var Lemo = Car("Lemo");
p("The Car's Name ",Lemo.name);
Lemo.incSpeed();
Lemo.incSpeed();
Lemo.incSpeed();
p("current Speed ", Lemo.speed);
console.log(Lemo);
console.log(Lemo.constructor);
console.log(Lemo instanceof Car ); // this check if the rightoperand.prototype is found on the leftoperand.prototype chain
var Dog = function(){
  return {legs: 4, bark:alert};
};
var fido = Dog();
console.log(fido instanceof Dog);
