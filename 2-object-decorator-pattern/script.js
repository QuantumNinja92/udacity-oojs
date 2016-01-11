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
var vehiclelike = function(obj){
  obj.wheelsNo = 4;
  obj.initSpeed = 60;
  obj.maxSpeed = 200;
  obj.speed = obj.initSpeed;
  obj.incSpeed = function(){
    // this.speed+=10;
    /*
    instead of using "this" we can use "obj"
    because of closures, obj will always be available
    for the function "incSpeed" to access
    */
    obj.speed+=10;
  };
  obj.decSpeed = function(){
    obj.speed-=5;
  };
  return obj;
}

var Lemo = vehiclelike({});
Lemo.name = "Lemo";

p("Wheels No", Lemo.wheelsNo);
p("Name ", Lemo.name);
p("Speed ", Lemo.speed);
p("increasing Speed +3");
Lemo.incSpeed();
Lemo.incSpeed();
Lemo.incSpeed();
p("Speed ", Lemo.speed);
