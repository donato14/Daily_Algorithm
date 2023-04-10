function solution(s) {
    var answer = 0;
    let arr = s.split(' ');

    let lastNum = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != 'Z'){
            // console.log(arr[i])
            lastNum = parseInt(arr[i]);
            answer += parseInt(arr[i]);    
        }else if (arr[i] == 'Z'){
            answer -= lastNum
        }
        
        
    }
    
    return answer;
}