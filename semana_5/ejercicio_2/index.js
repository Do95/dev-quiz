
function setNumber(ArrayNums){
  var nums = ArrayNums.sort();

  var repeat = 0;
  var missing =0;
  var min = nums[0];
  var max = nums[nums.length-1];

  for(var i = 0; i <nums.length-1;i++){
      if(nums[i]==nums[i+1]){
        repeat = nums[i];
      }
      if(nums[i+1]-nums[i]>1){
        missing= nums[i+1] -1;
      }
  }
  if(missing == 0){
    if(min !=1){
      missing = 1
    }else{
      missing = max+1
    }
  }
  var res = [];
  res[0]= repeat;
  res[1]= missing;
  return res;
}


const nums = [1,2,2,4];
console.log(setNumber(nums));