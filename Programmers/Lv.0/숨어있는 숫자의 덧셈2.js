function solution(my_string) {
    var answer = 0;
    
    let test = my_string.replace(/[a-zA-Z]/g, ' ');
    test = test.split(' ')
    for(let i = 0; i < test.length; i++){
        if(test[i] != ''){
            answer += parseInt(test[i])
        }
    }
    return answer;
}