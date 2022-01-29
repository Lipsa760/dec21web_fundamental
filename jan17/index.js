function manipulateArray(array, functionality) {
    var result = [];
    for (let i = 0; i < array.length; i++) {
     var y = functionality(array[i]);
      result.push(y);
    }
    return result;
  }
 
  
  function mulBy4(n) {
    return n * 4;
  }
  
  function add9(n) {
    return n + 9;
  }
  
  var x = [1, 2, 3, 4, 5, 6];
 
  var a = manipulateArray(x, mulBy4);
  var b = manipulateArray(x, add9);
  alert(a);
  alert(b);