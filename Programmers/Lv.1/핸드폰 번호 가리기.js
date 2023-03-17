function solution(phone_number) {
  var answer = '';

  answer = phone_number;
  for(let i =0; i< answer.length - 4; i++){
    answer = answer.replaceAt(i, '*')

  }
  return answer;
}

String.prototype.replaceAt=function(index, character) {
  return this.substr(0, index) + character + this.substr(index+character.length);
}