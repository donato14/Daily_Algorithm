function solution(rsp) {
    var answer = '';
    let arr = [];
    
    arr = rsp.split('');
    
    for(let i = 0; i < arr.length; i++){

        if(arr[i] == '2'){
            arr[i] = '0'

        }else if (arr[i] == '0'){
            arr[i] = '5'

        }else{
            arr[i] = '2'

        }
    }
    
    answer = arr.join('');
    return answer;
}
