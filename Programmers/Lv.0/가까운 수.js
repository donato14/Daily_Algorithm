function solution(array, n) {
    var answer = 0;
    let temp = 0;
    let temp1 = 0;
    let temp2 = 0;
    array = array.sort((a,b) => {return a - b});
    
    for(let i = 0; i < array.length; i++){
        if(array[i] > n){
            temp = array[i];
            temp1 = array[i - 1];
            if(temp - n > -(temp1 - n)){
                answer = array[i - 1];
            } else if (temp - n == -(temp1 -n)){
                answer = array[i - 1];
            }else {
                answer = array[i]
            }
            break
        }
        if(temp == 0) {
            temp1 = array[0];
            temp2 = array[array.length - 1];
            if(n - temp1 < n - temp2){
                answer = array[0]
            }else if (n - temp1 == n - temp2){
                answer = array[array.length - 1];  
            }else {
                answer = array[array.length - 1];
            }
        }
    }

    
    
    return answer;
}
