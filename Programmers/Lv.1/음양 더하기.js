function solution(absolutes, signs) {
    var answer = 123456789;
    
    for(let i = 0; i < signs.length; i++){
        if(signs[i] == false){
            absolutes[i] *= -1;
        }
    }
    
    answer = absolutes.reduce((a,b)=>(a+b))
    return answer;
}