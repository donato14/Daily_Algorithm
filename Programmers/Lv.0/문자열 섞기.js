function solution(str1, str2) {
    var answer = '';
    let str1Arr = [];
    let str2Arr = [];
    let arr = [];
    
    str1Arr = str1.split('');
    str2Arr = str2.split('');
    
    for(let i = 0; i < str1.length; i++){
        arr.push(str1[i]);
        arr.push(str2[i]);
    }
    
    answer = arr.join('');
    return answer;
}