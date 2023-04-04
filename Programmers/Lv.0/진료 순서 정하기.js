function solution(emergency) {
    var answer = [];
    const copied = [...emergency].sort((a,b) => b - a);
    let cnt = 1;
    let arr = new Array(emergency.length).fill(0);
    console.log(copied)

    for(let i = 0; i < emergency.length; i++){
        let index = emergency.indexOf(copied[i]);
        arr.splice(index, 1, cnt);
        cnt++;
    }
    
    answer = arr;
    
    return answer;
}
