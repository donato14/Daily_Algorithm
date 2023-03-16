

function solution(a, b, c){
  let answer = "YES";
  let max;

  //삼각형 조건 세변의 길이 중 가장 긴 변의 길이가 나머지 두개의 변의 합보다 작아야 한다.

  // if (a > b) max = a;
  // else max = b;
  // if (c > max) max = c;

  // console.log(max)

  let arr = [a, b, c];
  arr.sort()
  arr.reverse()

  if (arr[0] < (arr[1] + arr[2])) {
    return answer;
  } else {
    answer = "NO";
  }

  return answer;
}

console.log(solution(13, 33, 17));
