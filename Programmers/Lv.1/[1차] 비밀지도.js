function solution(n, arr1, arr2) {
    var answer = [];
    let temp = [];
    let temp2 = [];
    
    //arr1 배열을 2진법으로 변경
    for(let i = 0; i < arr1.length; i++){
        temp.push(arr1[i].toString(2).split(''))
        for(let j = 0; j < n; j++){
            if(temp[i].length < n){
                temp[i].unshift('0')
            }   
        }
    }
    // console.log(temp)
    //arr2 배열을 2진법으로 변경
    for(let i = 0; i < arr2.length; i++){
        temp2.push(arr2[i].toString(2).split(''))
        for(let j = 0; j < n; j++){
            if(temp2[i].length < n){
                temp2[i].unshift('0')
            }   
        }
    }
    // console.log(temp2)
    // arr1, arr2 배열중 둘 중 하나라도 1의 값을 가지면 #으로 변경
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(temp[i][j] == 1 || temp2[i][j] == 1){
                temp[i][j] = "#"
            }
        }
    }
    
    //배열중 0은 빈칸으로 바꾸기
    for(let i = 0; i < temp.length; i++){
        temp[i] = temp[i].join("");
        temp[i] = temp[i].replace(/0/g, " ");
    }
    
    // console.log(temp)
    
    answer = temp;
    
    return answer;
}
