function solution(my_string) {
    var answer = [];
    let regex = /a-z/;
    let temp = '';
    
    temp = my_string.replace(/[a-z]/g, '');
    
    answer = temp.split('')
    for(let i = 0; i < answer.length; i++){
        answer[i] = parseInt(answer[i]);
    }
    
    answer = answer.sort(function(a,b){
        return a - b;
    })
    
    return answer;
}