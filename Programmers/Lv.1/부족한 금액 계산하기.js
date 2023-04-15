function solution(price, money, count) {
    var answer = -1;
    let priceSum = 0;

    for(let i = 1; i <= count; i++){
        priceSum += (price * i)
    }
    if((priceSum - money) > 0){
        answer = priceSum - money;
    }else {
        answer = 0;
    }
    
    return answer;
}