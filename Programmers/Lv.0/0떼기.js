function solution(n_str) {
    var answer = '';
    let temp = [];
    temp = n_str.split('');

    for(let i = 0; i < temp.length; i++){
        if(temp[i] == '0'){
            temp.shift()
            i--;
        }else {
            break;
        }
    }
    answer = temp.join('');
    return answer;
}