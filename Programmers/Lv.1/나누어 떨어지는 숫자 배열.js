function solution(arr, divisor) {
    var answer = [];
    let test = [];
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] % divisor == 0){
            answer.push(arr[i])
            answer.sort(function(a, b){return a - b})
        }
    }
    if(answer[0] == undefined){
        answer.push(-1)
    }
    return answer;
}