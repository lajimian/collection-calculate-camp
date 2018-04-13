'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var result = [];

  result.push(collection[0]);

  for (var i = 1; i < collection.length; i++) {
    for (var j = 0; j < result.length; j++)
    { if (result[j] == collection[i])
        break;
      if(j==result.length-1)
        result.push(collection[i]);
    }

  }





      return result;
}

module.exports = choose_no_repeat_number;
