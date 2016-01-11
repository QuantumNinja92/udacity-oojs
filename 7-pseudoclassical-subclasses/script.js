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
var Car = function(loc){
  this.loc = loc;
};
Car.prototype.move = function(){
  this.loc++;
};

var Van = function(loc){
  Car.call(this, loc); // using the call function allow us to choose the context where Car is defined
};
Van.prototype = Object.create(Car.prototype);
Van.prototype.constructor = Van;
Van.prototype.grab = function(){};
/*
* for the sake of simplicity
* we will create two objects,
* one from the superclass
* another from the subclass
*/
var zed = new Car(3);
zed.move();

var amy = new Van(9);
amy.move();
amy.grab();
