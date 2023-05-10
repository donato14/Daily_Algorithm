function solution(numbers) {
    var answer = 0;
    let s = numbers;
    let regex0 = /zero/gi;
    let regex1 = /one/gi;
    let regex2 = /two/gi;
    let regex3 = /three/gi;
    let regex4 = /four/gi;
    let regex5 = /five/gi;
    let regex6 = /six/gi;
    let regex7 = /seven/gi;
    let regex8 = /eight/gi;
    let regex9 = /nine/ig;
    
    s = s.replace(regex0, 0);
    s = s.replace(regex1, 1);
    s = s.replace(regex2, 2);
    s = s.replace(regex3, 3);
    s = s.replace(regex4, 4);
    s = s.replace(regex5, 5);
    s = s.replace(regex6, 6);
    s = s.replace(regex7, 7);
    s = s.replace(regex8, 8);
    s = s.replace(regex9, 9);
    
    answer = parseInt(s);
    return answer;
}