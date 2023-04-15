function solution(s) {
    var answer = false;
    let test = 'abc';
    const regex = /[a-zA-z]/;
    
    if(s.length == 4 || s.length == 6){
        if(regex.test(s)){
            answer = false;
        }else{
            answer = true;
        }
    }
    
    
    return answer;
}