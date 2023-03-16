
function solution(arr){         
  let answer=0, cnt=0;
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 1) {
      answer += 1;

      if(arr[i + 1] === 1){
        cnt ++;
      }else{
        cnt = 0;
      }
      answer = answer + cnt;

    }
  }
      
  return answer;
}


let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
