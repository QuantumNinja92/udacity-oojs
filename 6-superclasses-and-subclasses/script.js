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
// Super Class
var Car = function(){
  var obj = {loc: loc};
  obj.move = function(){
    obj.loc++;
  };
  return obj;
};

// SubClass Van
var Van = function(loc){
  var obj = Car(loc);
  obj.grab = function{};
  return obj;
}

// SubClass Cop
var Cop = function(loc){
  var obj = Car(loc);
  obj.call = function{};
  return obj;
}
