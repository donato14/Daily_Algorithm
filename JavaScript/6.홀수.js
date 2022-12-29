function solution(arr){
  let answer=[];
  let temp = [];
  let min = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 != 0) {
      temp.push(arr[i]);
      sum += arr[i]
    } 
  }
  
  temp = temp.sort(function (a, b) {
    return a - b;
  });
  min = temp[0];
  
  answer.push(sum);
  answer.push(min);

  return answer;
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));