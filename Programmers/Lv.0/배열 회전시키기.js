function solution(numbers, direction) {
  var answer = [];
  let temp = 0;
  

  if(direction == 'left'){
      temp = numbers[0];
      numbers.shift();
      numbers.push(temp)
      temp = 0;
  }else {
      temp = numbers[numbers.length - 1];
      numbers.pop();
      numbers.unshift(temp)
      temp = 0;
  }
  answer = numbers
      

  return answer;
}