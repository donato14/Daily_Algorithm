function solution(s) {
    var answer = '';
    let temp = s.split(' ');
    let regex = /,/gi

    
    for(let i = 0; i < temp.length; i++){
        // console.log(temp[i].split(''));
        temp[i] = temp[i].split('');
        // console.log(temp[i])
        for(let j = 0; j < temp[i].length; j++){
            if(j % 2 == 0){
                temp[i][j] = temp[i][j].toUpperCase();
            }else {
                temp[i][j] = temp[i][j].toLowerCase();
            }
        }
        // console.log(temp[i])
    }
    

    // console.log(temp.join(' ').replace(regex, ''))

    answer = temp.join(' ').replace(regex, '')
    return answer;
}