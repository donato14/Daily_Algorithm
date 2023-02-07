function solution(arr){
  let answer=arr;
  let upperNum = (arr.reduce((a, b) => a + b, 0));

  for (let i = 0; i < arr.length; i++){
    for (let j = i+1; j < arr.length; j++){
      if (arr[i] + arr[j] == (upperNum - 100)) {
        // console.log(arr[i]);
        // console.log(arr[j]);
        arr.splice(j, 1);
        arr.splice(i, 1);
        
      }
    }
  }

  // console.log(upperNum)
  return answer;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));