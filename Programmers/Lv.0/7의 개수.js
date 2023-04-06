function solution(array) {
    var answer = 0;
    
    for(let i = 0; i < array.length; i++){
        let arr = (array[i]+'').split('');

        for(let j = 0; j < arr.length; j++){
            if(arr[j] == 7){
                answer++;
            }
        }
    }
    
    return answer;
}