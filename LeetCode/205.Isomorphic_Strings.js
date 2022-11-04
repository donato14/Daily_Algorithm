/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
  // console.log(s,t)
  // let arr1 = [];
  // let arr2 = [];

  // let arr3 = [];
  // let arr4 = [];
  // let temp = 0;

  // arr1 = s.split("");
  // arr2 = t.split("");

  // for(let i = 0; i < arr1.length; i++){
  //   for(let j = i+1; j < arr1.length; j++){
  //     if(arr1[i] == arr1[j]){
  //       arr3.push(1);
  //     }
  //     else {
  //       arr3.push(0);
  //     }
  //   }
  // }


  // for(let i = 0; i < arr2.length; i++){
  //   for(let j = i+1; j < arr2.length; j++){
  //     if(arr2[i] == arr2[j]){
  //       arr4.push(1);
  //     }else {
  //       arr4.push(0);
  //     }
  //   }

  // }


  // if (arr3.join("") == arr4.join("")) {
  //   console.log(true)
  //   return true
  // } else {
  //   console.log(false)
  //   return false
  // }


  if(!s && !t) return true;
  if(!s || !t) return false;
  if(s.length !== t.length) return flase;

  var map = new Map();
  var set = new Set();

  for (let i = 0; i < s.length; i++){
    var ch = map.get(s[i]);
    if(!ch){
      if(set.has(t[i])) return false;
      set.add(t[i]);
      map.set(s[i], t[i]);
    } else if (ch !== t[i]) return false;
    // console.log(map.set(s[i], t[i]))
  }
};

isIsomorphic('egg', 'add')
isIsomorphic('foo', 'bar')
isIsomorphic('paper', 'title')
isIsomorphic('bbbaaaba', 'aaabbbba')