function solution(A, B) {
    var answer = 0;
    let arr = [];
    arr = A.split('');
    let temp = [];
    temp = [...arr];
    let right = 0;
    
    if(A == B){
        answer = 0
    } else {
        for(let i = 0; i < temp.length; i++){
            let fChar = temp[temp.length - 1];
            temp.pop();
            temp.unshift(fChar);
            right++;
            
            if(temp.join('') == B){
                answer = right;
                console.log(right)
                break
            }else {
                answer = -1;
            }
        }    
    }
    
    
    return answer;
}