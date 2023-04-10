function solution(id_pw, db) {
    var answer = '';
    // console.log(id_pw[0])
    // console.log(db[0][0])
    // console.log(db.length)
    
    for(let i = 0; i < db.length; i++){
        //아이디 비교시 아이디 맞을때
        if(id_pw[0] == db[i][0]){
            //비밀번호까지 맞을때
            if(id_pw[1] == db[i][1]){
                answer = 'login';
            }
            //비밀번호 틀릴때
            else{
                answer = 'wrong pw';
                break
            }
        //아이디 틀렸을때
        }else {
            answer = 'fail'
        }
    }
    return answer;
}