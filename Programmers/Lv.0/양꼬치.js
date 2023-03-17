function solution(n, k) {
  var answer = 0;
  let serviceDrink = 0;
  
  //양꼬치 가격
  answer = n * 12000;
  
  //서비스 받은 음료
  if(n >= 10) {
      serviceDrink = Math.floor(n/10);
  }
  
  //서비스 받은 음료보다 시킨 음료가 많을때
  if(serviceDrink < k) {
      answer = answer + (k - serviceDrink) * 2000;
  }
  
  return answer;
}