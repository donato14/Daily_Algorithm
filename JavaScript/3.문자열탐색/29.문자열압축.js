
function solution(s){
  let answer="";
  let arr=[];
  let nowChar='';
  let count = 0;
  let answerArr = [];

  arr = s.split('');
  for(let i = 0; i < arr.length; i++){
    if(nowChar != arr[i]){
      nowChar = arr[i];
      for(let j = i; j < arr.length; j++){
        if(arr[j] == nowChar){
          count++;
        }
      }
      if(count != 1){
        answerArr.push(`${nowChar}${count}`);
      }else {
        answerArr.push(nowChar)
      }
      count = 0;
    }
  }
  answer = answerArr.join('');
  return answer;
}

let str="KKHSSSSSSSE";
console.log(solution(str));
