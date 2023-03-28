function solution(dots) {
    var answer = 0;
    let width = 0;
    let height = 0;
    
    width = Math.max(...dots.map(e => e[0])) - Math.min(...dots.map(e => e[0]));
    heigth = Math.max(...dots.map(e => e[1])) - Math.min(...dots.map(e => e[1]));
    
    
    answer = width * heigth;
    return answer;
}