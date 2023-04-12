function solution(n) {
    var answer = 0;
    let temp = Math.sqrt(n);
    console.log(Number.isInteger(temp))
    
    if(Number.isInteger(temp)){
        answer = (temp+1) * (temp+1);
    }else{
        answer = -1;
    }
    
    return answer;
}