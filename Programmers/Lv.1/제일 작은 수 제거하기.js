function solution(arr) {
  var answer = [];
  let delNum;

  for(let i = 0; i < arr.length; i++) {
    answer.push(arr[i])
  }

  // console.log(answer)

  arr.sort(function(a,b) {
    return a - b
  })

  delNum = arr[0]

  for(let j = 0; j < answer.length; j++){
    if(answer[j] === delNum) {
      answer.splice(j, 1);
      j--;
    }
  }

  return answer.length === 0 ? [-1] : answer;
}

