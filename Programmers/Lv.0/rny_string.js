function solution(rny_string) {
    var answer = '';
    let regex = /m/ig;
    answer = rny_string.replace(regex, 'rn')
    return answer;
}