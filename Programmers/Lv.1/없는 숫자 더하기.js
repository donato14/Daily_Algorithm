function solution(numbers) {
    var answer = -1;
    let temp = [0,1,2,3,4,5,6,7,8,9];
    
    for(let i = 0; i < numbers.length; i++){
        temp.splice(temp.indexOf(numbers[i]),1)
    }
    
    answer = temp.reduce((a, b) => (a + b));
    
    
    return answer;
}