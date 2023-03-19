function solution(box, n) {
  var answer = 0;
  let width = 0;
  let height =0;
  let above = 0;
  
  //상자 가로에 몇 개 들어가나
  width = Math.floor(box[0] / n);
  //상자 세로에 몇 개 들어가나
  height = Math.floor(box[1] / n);
  //상자 높이에 몇 개 들어가나
  above = Math.floor(box[2] / n);
  
  answer = (width * height) * above;
  
  return answer;
}