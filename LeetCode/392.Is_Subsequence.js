/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let a = [...s.split("")];
  let b = [...t.split("")];
  let result = [];
  console.log(a)

  for(let i = 0; i < a.length; i++){
    for(let j = 0; j < b.length; j++){
      console.log(a[i]+'=='+b[j])
      if(a[i] == b[j]) {
        result.push(j)
        // result[i] = i;
      }
    }
  }

  console.log(b.filter(x => a.includes(x))) 
  console.log(result)
  let set = new Set(result);

  if(result.length !== a.length) { 
    console.log(false)
    return false
  }
  if(set.size !== result.length){
    console.log(false)
    return false
  }
  

  if(result.length === a.length) {
    // console.log(result.length)

    for(let j = 0; j < result.length; j++){
      if (result[j+1] < result[j]) {
        console.log(false)
        return false
      }
    }
    console.log(true)
    return true 
  }

};

isSubsequence('ab', 'baab')