
function solution(s){
  let answer="YES";
  let lowerCaseS = s.toLowerCase();
  let arrS = lowerCaseS.split('');

  let isTrue = arrS.sort((a,b) => {
    return a - b;
  });
  isTrue = isTrue.join('');

  if(lowerCaseS == isTrue){return answer;}
}

let str="goooG";
console.log(solution(str));


