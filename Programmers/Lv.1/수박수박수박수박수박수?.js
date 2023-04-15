function solution(n) {
    var answer = '';
    let watermelon = '수박';
    let repeatNum = 0;
    
    if(n % 2 == 1){
        repeatNum = Math.floor(n / 2);
        answer = watermelon.repeat(repeatNum)+'수';
    }else{
        repeatNum = n / 2;
        answer = watermelon.repeat(repeatNum);
    }
    
    return answer;
}