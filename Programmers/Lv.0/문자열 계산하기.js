function solution(my_string) {
    var answer = 0;
    
    let arr = my_string.split(' ');
    let op = '+'
    
    for(let i=0; i<arr.length; i++){

        if(isNaN(Number(arr[i]))){
            op = arr[i];   
        } else {
            op == "+" ? answer += parseInt(arr[i]) : answer -= parseInt(arr[i]);
        }
    }
    
    return answer;
}
