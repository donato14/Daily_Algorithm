
function solution(s, t){
  let answer=[];
  let arr = [];
  let left = 0;
  let right = 0;
  let nowChar = '';

  arr = s.split('');
  for(let i = 0; i < arr.length; i++){
    nowChar = arr[i]; //'t'
    if(t == nowChar){
      answer.push(0)
    }else{
      for(let j = i; j < arr.length; j++){
        if(arr[j] != t){
          right++;
        }else {
          break;
        }
      }
      for(let k = i; k >= 0; k--){
        if(arr[k] != t){
          left++;
        }else{
          break;
        }
      }
      if(right > left){
        answer.push(left);
      }else {
        answer.push(right);
      }
      right = 0;
      left = 0;
    }
  }


  return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));