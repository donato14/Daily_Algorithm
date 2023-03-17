function solution(hp) {
  var answer = 0;
  let general = 5;
  let soldier = 3;
  let worker = 1;
  let remainHp = 0;
  
  //hp가 5보다 높을때
  if(hp >= general){
      console.log('5보다 높음')
      
      remainHp = hp % general;
      
      //장군개미 마리수
      answer = Math.floor(hp/general);
      
      //reaminHp 가 3보다 높을때
      if(remainHp >= soldier){
          
          //병정개미 마리수
          answer = answer + Math.floor(remainHp/soldier);
          remainHp = remainHp % soldier;
          
          //일개미 마리수
          answer = answer + remainHp;
      }
      else{
          answer = answer + remainHp;
      }
  }
  //hp가 5보다 낮을때
  else if (general > hp && hp >= soldier){
      console.log('5보다 낮고 3보다 높거나 같음')
      
      //병정개미 마리수
      answer = Math.floor(hp/soldier);
      remainHp = hp % soldier;
      
      //일개미 마리수
      answer = answer + remainHp;
  }
  //hp가 3보다 낮을때
  else{
      console.log('3보다 낮음')
      
      //일개미 마리수
      answer = hp
  }
  
  
  return answer;
}