function solution(arr)
{
    var answer = [];
    let lastNum = -1;
    
    for(let i = 0; i < arr.length; i++){
        if(lastNum != arr[i]){
            answer.push(arr[i]);
            lastNum = arr[i];
        }
    }
    
    
    
    return answer;
}