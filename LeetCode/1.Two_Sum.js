var twoSum = function (nums, target) {
  // console.log(nums, target);
  

  for (let i = 0; i < nums.length; i++){
    for (let j = (i + 1); j < nums.length; j++){
      if (nums[i] + nums[j] === target) {
        if (nums.length === 2) {
          // console.log([0, 1])
          return [0, 1];
        } else {
          let a = nums.indexOf(nums[i])
          let b = nums.indexOf(nums[j], a+1)
          return [a, b];
        }
      }
    }
  }
};

twoSum([3, 2, 3], 6);