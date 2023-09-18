
  /*  Title :-  Return Something to me

    Write a function that returns the string "something" joined with a space " " and the given argument a.

    Examples
    giveMeSomething("is better than nothing") ➞ "something is better than nothing"

    giveMeSomething("Bob Jane") ➞ "something Bob Jane"

    giveMeSomething("something") ➞ "something something"
*/

var element = ["is better than nothing", "Bob Jane", "something"]
 
function giveMeSomething (args){
return "Something " + args;
};
for(var i=0;i<element.length;i++){
    console.log(giveMeSomething(element[i]));
};