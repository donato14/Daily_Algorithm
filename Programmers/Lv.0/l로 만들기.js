function solution(myString) {
    var answer = '';
    let regex = /[a-k]/gi;
    
    answer = myString.replace(regex, 'l')
    
    return answer;
}