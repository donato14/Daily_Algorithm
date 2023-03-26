function solution(my_string) {
    var answer = '';
    let arr = [];
    let arr2 = [];
    
    arr = my_string.split('');
    
    let set = new Set(arr);
    arr2 = [...set];
    answer = arr2.join('');
    
    return answer;
}