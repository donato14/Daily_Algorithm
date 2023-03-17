function solution(money) {
  var answer = [];
  let coffee = 0;
  let changeMoney = 0;
  
  coffee = Math.floor(money / 5500);
  changeMoney = money - (coffee * 5500);
  
  answer.push(coffee);
  answer.push(changeMoney);
  
  return answer;
}