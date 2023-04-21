function solution(num_list) {
  var answer = 0;
  let multi = 1;
  let sqrt = 0;
  
  for(let i = 0; i < num_list.length; i++){
      multi *= num_list[i];
  }
  
  for(let i = 0; i < num_list.length; i++){
      sqrt += num_list[i];
  }
  sqrt = sqrt * sqrt;
  
  if(multi < sqrt){
      answer = 1;
  }
  
  return answer;
}