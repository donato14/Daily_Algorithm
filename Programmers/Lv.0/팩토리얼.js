function solution(n) {
    var answer = 0;
    let temp = 1;
    let arr = [];

    for(let i = 1; i <= n; i++){
        temp = temp * (1 * i);
        if(temp <= n){
            arr.push(temp)
        }else{
            break
        }
    }
    console.log(arr)
    
    answer = arr.length
    return answer;
}
