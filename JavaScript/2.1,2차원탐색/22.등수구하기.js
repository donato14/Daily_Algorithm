
function solution(arr){  
  let temp = [...arr];
  temp = temp.sort(function(a,b) {
    return b - a
  });
  
  for(let i = 0; i < temp.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(temp[i] == arr[j]){
        arr[j] = i+1;
      }
    }
  }
  let answer = arr;
  return answer;
}

let arr=[87, 89, 92, 100, 76];
console.log(solution(arr));
