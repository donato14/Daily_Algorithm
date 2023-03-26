function solution(before, after) {
    var answer = 0;
    let beforeArr = [];
    let afterArr = [];
    let cant = 0;
    
    beforeArr = before.split('').sort();
    afterArr = after.split('').sort();

    if(beforeArr.join('') == afterArr.join('')){
        answer = 1;
    }else {
        answer = 0;
    }

    return answer;
}