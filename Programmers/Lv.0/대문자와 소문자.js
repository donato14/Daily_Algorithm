function solution(my_string) {
  var answer = '';
  let upperCase = /[A-Z]/;
  let lowerCase = /[a-z]/;
  let arr = [];
  
  arr = my_string.split('');
  
  for(let i = 0; i < arr.length; i++){
      if(upperCase.test(arr[i])){
          arr[i] = arr[i].toLowerCase();
      }else if((lowerCase.test(arr[i]))) {
          arr[i] = arr[i].toUpperCase();
      }
  }
  answer = arr.join('');
  console.log(answer)
  return answer;
}