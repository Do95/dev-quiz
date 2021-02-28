function lengthOfLongestSubstring(text) {
  str = text.toLowerCase();
  if (str.length <= 1){
    return str.length
  }else{
    var loop;
    var subStr;
    var i = 0 ;
    var length = 0;

    for (var j = 0; j < str.length; j++) {
      i = j;
      loop = true;
      subStr = '';
      while (loop) {
          subStr += str[i];        
          i++;
          if (subStr.includes(str[i]) || i >= str.length) {
              loop = false;
              if (subStr.length > length) {
                  length = subStr.length;
              }
          }
      }
    }
    return length;
  } 
}

const tests = ["abcabcbb","bbbbb","pwwkew",""]
tests.forEach(function(v,k){
    console.log("------Test " + (k+1) +"-------")
    console.log("Entrada:",v)
    console.log("Salida:",lengthOfLongestSubstring(v))
});


