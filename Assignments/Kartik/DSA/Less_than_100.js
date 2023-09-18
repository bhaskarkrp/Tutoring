/*
            Title :- Less Than 100?
        Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

        Examples
        lessThan100(22, 15) ➞ true
        // 22 + 15 = 37

        lessThan100(83, 34) ➞ false
        // 83 + 34 = 117

        lessThan100(3, 77) ➞ true
*/


function lessThan100(value1,value2){
    if(value1 + value2 <= 100) {
        console.log("True");
    }
    else{
        console.log("False");
    }
    return;
}

lessThan100(22,15);