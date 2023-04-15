function solution(a, b) {
    var answer = 1234567890;
    let resArr = [];
    
    for(let i = 0; i < a.length; i++){
        resArr.push(a[i] * b[i]);
    }
    
    // console.log(resArr)
    answer = resArr.reduce((a,b) => (a + b));
    
    return answer;
}