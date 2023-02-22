
function solution(arr){  
    let answer;
    let temp = [...arr];
    let result = [];
    let temp2 = 0;
    let temp2arr = [];
    let temp3 = 0;
    let temp4 = 0
    
    //각 행의 합
    for(let i = 0; i < temp.length; i++){
      result.push(temp[i].reduce((a,b) => (a+b)));
    }
    //각 열의 합
    for(let i = 0; i < temp.length; i++){
      // console.log(temp[i][0])
      for(let j = 0; j < temp[i].length; j++){
        temp2 = temp2 + temp[j][i]
      }
      temp2arr.push(temp2);
      temp2 = 0;
    }
    //대각선
    for(let n = 0; n < temp.length; n++){
      temp3 = temp3 + temp[n][n]
    }
    for(let h = 0; h < temp.length; h++){
      temp4 = temp4 + temp[h][h]
    }


    result = [...result, ...temp2arr, temp3, temp4]

    result = (result.sort(function(a,b) {
      return b - a;
    }));

    // console.log(result)
    answer = result[0]
    return answer;
}

let arr=[[10, 13, 10, 12, 15], 
          [12, 39, 30, 23, 11],
          [11, 25, 50, 53, 15],
          [19, 27, 29, 37, 27],
          [19, 13, 30, 13, 19]];
console.log(solution(arr));
