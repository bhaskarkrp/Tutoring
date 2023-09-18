/*
            Title :-Basic Variable Assignment
        A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

        Examples
    nameString("Mubashir") ➞ "MubashirEdabit"

    nameString("Matt") ➞ "MattEdabit"

    nameString("javaScript") ➞ "javaScriptEdabit"

*/
  
var arr = ["Mubashir" , "Matt" , "javaScript" ];

function nameString(args){
    return args + "Edabit";
};
for(var i=0;i<arr.length;i++){
    console.log(nameString(arr[i]));
}