function MaxArea(array) {
  var start = 0;
  var end = array.length - 1;
  var area = 0;
  var aux;
  while(start < end) {
    aux = (end - start) * Math.min(array[start], array[end])
    area < aux ? area = aux : null
    if(array[start] < array[end]) {
      start++
    } else {
      end--
    }
  }
  return area
};

function MaxArea_2(array) {
  let start = 0;
  let end = array.length - 1;
  let area = 0
  while(start<end) {
    let min = Math.min(array[start], array[end])
    area = Math.max(((end-start) * min), area)
    if (array[start] > array[end]) {
      end--
    } else {
      start++
    }
  }
  return area
};

const test = [1,8,6,2,5,4,8,3,7];
console.log("------Test -------");
console.log("Entrada:",test);
console.log("Salida:",MaxArea(test))
console.log("Salida:",MaxArea_2(test))