function solution(s){
    var answer = true;
    s = s.toLowerCase();
    let arr = s.split('');
    
    let pNum = 0;
    let yNum = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 'p'){
            pNum++;
        }else if(arr[i] == 'y'){
            yNum++;
        }
    }
    if(pNum == yNum){
        answer = true
    }else {
        answer = false
    }

    return answer;
}