// closure

// var | let | const
// global | block | block
// function block
// mutable | mutable | immutable

function f_name(param1, param2) {
    var name = "asgar";
  
    name = "Bhaskar";
  
    let name1 = "asgar";
  
    console.log(name, name1);
    // call the api
  
    return function l_name() {
      const hello = "hello";
      console.log(name, name1, hello);
  
      return function name_() {
        console.log(hello, name, name1);
      };
    };
  }
  
  var res = f_name();
  console.log(res);
  var res2 = res();
  console.log(res2);
  res2();
  
  // callback function -> when a function is passed as a parameter to another function
  function send(b, c) {
    console.log(b + c + 10);
    return b + 10 + c;
  }
  
  function call(param1, param2, callbackFunc) {
    let add = param1 + param2;
    let add2 = add + param1;
  
    return callbackFunc(add, add2);
  }
  
  let callbackRes = call(1, 2, send);
  console.log({ callbackRes });
  
  // HOF => Higher Order Functions
  // filter | forEach | map | splice | splice
  
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  let condition = function (value) {
    return value > 5;
  };
  
  let conditionRes = condition(6);
  console.log({ conditionRes });
  
  let filteredValues = arr.filter(condition);
  console.log({ filteredValues });
  
  //Ecma
  // arrow function
  let fun = (value) => {
    return value < 5;
  };
  
  let x = fun(9);
  console.log({ x });
  
  let filteredValues2 = arr.filter(fun);
  console.log(filteredValues2);
  
  let filteredValues3 = arr.filter((val) => val <= 5);
  console.log(filteredValues3);
  
  let mapRes = arr.map((val) => val + "-");
  console.log(mapRes);
  