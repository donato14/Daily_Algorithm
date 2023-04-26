function solution(s) {
  var answer = '';
  let temp = [];
  s = s.split(' ');
  
  for(let i = 0; i < s.length; i++){
      s[i] = parseInt(s[i])
  }
  s = s.sort((a,b) => {return a - b})
  temp.push(s[0]);
  temp.push(s[s.length - 1]);

  answer = temp.join(' ')
  return answer;
}