var isPalindrome = function(x) {
  let arr = [];
  let arr2 = [];

  let result;
  let result2;

  let a = x.toString();

  a.split("");
  arr = [...a];

  arr2 = [...arr];
  arr2.reverse();
  result = arr.join("");
  result2 = arr2.join("");
  // Number(result);
  // Number(result2);
  //console.log(typeof(result))
  // console.log(result2)
  
  if (result == result2) {
    console.log('true');
    return true
  } else {
    console.log('false');
    return false
  }

};

isPalindrome(-121)