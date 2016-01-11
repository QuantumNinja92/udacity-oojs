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
var gold = {
  a : 1
};

var rose = Object.create(gold);
gold.b = 2;

p("rose.a ", rose.a);
p("rose.b ", rose.b);
p("rose.constructor ", rose.constructor);
