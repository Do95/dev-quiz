
function missingNumber(ArrayNums){
  var nums = ArrayNums.sort();
  //console.log(nums);
 
  console.log(nums[nums.length-1],nums.length);
  if(nums[nums.length-1] != nums.length){
    return nums.length;
  }else if(nums[0] != 0 ){
    return 0;
  }

  for(var i = 0; i< nums.length - 1; i++){
    if(nums[i+1]-nums[i]>1){
      return nums[i+1] - 1 ;
    }
  }
  return -1;
}


const nums = [9,6,4,2,3,5,7,0,1];
console.log(missingNumber(nums));