function solution(num_list, n) {
    var answer = [];
    let arr = [...num_list]
    
    for(let i = 0; i < num_list.length/n; i++){
        answer.push(arr.splice(0,n))
    }
    
    return answer;
}