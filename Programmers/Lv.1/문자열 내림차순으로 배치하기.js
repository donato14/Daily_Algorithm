function solution(s) {
  var answer = '';

  let arr = [];
  arr.push(...s)
  
  arr.sort()
  arr.reverse()

  arr = arr.join('')


  return arr;
}

console.log(solution("Zbcdefg"))