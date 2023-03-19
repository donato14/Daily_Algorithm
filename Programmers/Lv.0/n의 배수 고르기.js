function solution(n, numlist) {
  var answer = [];
  let multipleArr = [];
  
  for(let i = 0; i < numlist.length; i++){
      if(numlist[i] % n === 0){
          multipleArr.push(numlist[i]);
      }
  }
  
  console.log(multipleArr)
  answer = multipleArr;
  
  return answer;
}