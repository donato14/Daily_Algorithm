function solution(a, b, c) {
    let answer;

    if (a > b) {
      if (b > c) {
        answer = c;
      } else {
        answer = b;
      }
    } else {
      if (a < c) {
        answer = a;
      } else {
        answer = c;
      }
    }

    return answer;
  }

console.log(solution(6, 5, 11));
  