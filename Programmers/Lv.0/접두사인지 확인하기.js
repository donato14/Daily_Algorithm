function solution(my_string, is_prefix) {
  var answer = 0;
  console.log(my_string.slice(0, is_prefix.length))
  if(my_string.slice(0, is_prefix.length) == is_prefix){
      answer = 1;
  }
  return answer;
}