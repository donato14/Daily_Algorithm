function solution(left, right) {
    var answer = 0;
    let divisorCnt = 0;
    
    for(let i = left; i <= right; i++){
        for(let j = 1; j <= i; j++){
            if(i % j == 0){
                divisorCnt++;
            }
        }
        
        if(divisorCnt % 2 == 0){
            answer += i;
        }else {
            answer -= i;
        }
        divisorCnt = 0;
    }
    
    return answer;
}