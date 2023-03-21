function solution(age) {
  var answer = '';
  let ageArr = ['a','b','c','d','e','f','g','h','i','j'];
  let inputAgeArr = [];
  let inputAge = "";
  
  inputAge = age;
  inputAge = inputAge.toString();    
  inputAgeArr = inputAge.split('');
  
  for(let i = 0; i < inputAgeArr.length; i++){
      inputAgeArr[i] = parseInt(inputAgeArr[i]);
      answer += ageArr[inputAgeArr[i]];
  }
  
  return answer;
}

//if 문으로 풀 수 있지만 split을 사용해 for문으로 풀어 봤음