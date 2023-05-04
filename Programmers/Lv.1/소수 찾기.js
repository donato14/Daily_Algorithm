function solution(n) {
  var answer = 0;
  
  //0부터 시작해서 n값으로 끝나는 배열을 만들고 0,1은 소수가 아니므로 false 값을 넣고
  //나머지는 true 값을 저장해놓는다
  let arr = Array(n + 1).fill(true).fill(false, 0, 2);
  // console.log(arr)

  //2부터 n까지 반복문을 돌리며 2,3,5의 배수를 모두 false값으로 변경한다
  //에라토스네테스의 체 방식으로 최소 소수 3가지를 사용하여 n값중에 소수만을 남긴다
  for (let i = 2; i < Number(Math.sqrt(n)) + 1; i++) {
      if (arr[i]) {
          for (let j = i * 2; j <= n; j += i) {
              arr[j] = false;
          }
      }
  }
  // console.log(arr);
  // 소수값은 true값이기 때문에 true의 개수를 answer 변수에 등록한다
  for(let k = 0; k < arr.length; k++){
      if(arr[k] == true){
          answer++;
      }
  }
  
  return answer;
}