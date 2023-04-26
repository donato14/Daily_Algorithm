function solution(d, budget) {
  var answer = 0;
  d = d.sort((a,b) => {return a - b})
  for(let i = 0; i < d.length; i++){
      if(budget - d[i] >= 0){
          budget = budget - d[i]
          answer++;
      }else{
          break
      }
  }
  return answer;
}