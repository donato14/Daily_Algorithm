function solution(n) {
  let str = n.toString()
  var answer = 0;
  answer = [...str]


  //arr 배열 정렬
  answer.sort(function(a,b) {
    return b - a
  })

  // answer.join()
  answer = answer.join('')

  answer = parseInt(answer)


  return answer;
}