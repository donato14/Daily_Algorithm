function solution(num) {
    var answer = 0;
    while (num != 1 || answer > 500){
        if(num % 2 == 0){
            num = num / 2;
            answer++;
            if(num == 1){
                break
            }
        }else {
            num = num * 3 + 1;
            answer++;
            if(num == 1){
                break
            }
        }
        if(answer > 500){
            answer = -1;
            break
        }
    }
    return answer;
}
