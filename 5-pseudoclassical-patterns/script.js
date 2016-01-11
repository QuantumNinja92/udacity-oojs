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
  this.name = name;
  this.initSpeed = 60;
  this.speed = this.initSpeed;
};
Car.prototype.incSpeed = function(){
    this.speed +=10;
  };
Car.prototype.decSpeed = function(){
    this.speed -=5;
  };
var Lambo = Car("Lambo"); // this won't work
console.log(Lambo)
var Lemo = new Car("Lemo"); // this will work
console.log(Lemo);
