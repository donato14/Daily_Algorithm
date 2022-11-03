/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let resultArr = [];
    // console.log(nums)
    resultArr.push(nums[0])
    let a = nums[0]; 
    for(let i = 0; i < nums.length -1; i++){
      a += nums[i+1]
      // nums[i] += nums[i] + nums[i+1]
      resultArr.push(a)
    }
    // console.log(resultArr)
    return resultArr
};


runningSum([3,1,2,10,1])