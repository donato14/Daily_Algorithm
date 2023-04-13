function solution(s) {
    var answer = '';
    let arr = s.split('')
    let temp = [];
    if(s.length % 2 == 1){
        answer = s[Math.floor(s.length/2)]
    }else {
        temp.push(s[Math.floor(s.length/2)-1],s[Math.floor(s.length/2)]);
        answer = temp.join('');
    }
    return answer;
}