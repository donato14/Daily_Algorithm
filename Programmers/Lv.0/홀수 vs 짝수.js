function solution(num_list) {
    var answer = 0;
    let odd = 0;
    let even = 0;
    
    for(let i = 0; i < num_list.length; i++){
        //첫번째 원소를 1번 원소라 정해놨기에
        //원래의 짝수 부분이 홀수가 된다
        if(i%2 == 0){
            odd = odd + num_list[i]
        }else{
            even = even + num_list[i]
        }
    }
    console.log(odd)
    console.log(even)
    if(odd == even){
        answer = odd;
    }else if(odd > even){
        answer = odd;
    }else {
        answer = even;
    }
    return answer;
}