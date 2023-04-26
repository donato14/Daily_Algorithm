function solution(my_string, index_list) {
    var answer = '';
    let temp = [];
    
    my_string = my_string.split('');
    for(let i = 0; i < index_list.length; i++){
        temp.push(my_string[index_list[i]])
    }
    answer = temp.join('');    
    
    return answer;
}