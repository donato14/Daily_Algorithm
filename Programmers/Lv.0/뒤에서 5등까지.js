function solution(num_list) {
    var answer = [];
    let arr = [];
    
    arr = num_list.sort((a,b) => {return a - b });
    
    for(let i = 0; i < 5; i++){
        answer.push(arr[i]);
    }
    
    
    return answer;
}