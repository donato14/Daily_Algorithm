
function solution(day, arr){
  let answer = 0;
  let backNum = '';
  
  for (let i = 0; i < arr.length; i++){
    backNum = (arr[i].toString().substring(1, 2));
    
    if (backNum == day.toString()) {
      answer++;
    }
  }
  
  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];

console.log(solution(3, arr));