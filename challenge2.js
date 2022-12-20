function findNumber(nums, sum) {
  let result = nums.reduce((pre, curr) => {
    return (Math.abs(curr - sum) < Math.abs(pre - sum) ? curr : pre); //หาเลขใกล้
  })
  let result2 = sum - result;
  if (result2 <= 0) {
    console.log(`Output: no output`)
    console.log(`Explanation: The are no two numbers that add up to ${sum}`)
    
    return;
  }
  let index1 = nums.indexOf(result2);
  nums[index1] = 0;
  console.log(`Output: ${index1}, ${nums.indexOf(result)}`)
  console.log(`Explanation: The are no two numbers that add up to ${sum} \n`)
}

findNumber([2,7,11,15], 9);
findNumber([3,2,4], 6);
findNumber([3,1,2,3], 6);
findNumber([3,2], 3);