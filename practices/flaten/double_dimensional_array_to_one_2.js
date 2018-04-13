'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var collection_one = [].concat.apply([], collection);

  var result = [];

  result.push(collection_one[0]);

  for (var i = 1; i < collection_one.length; i++) {
    for (var j = 0; j < result.length; j++) {
      if (result[j] == collection_one[i])
        break;
      if (j == result.length - 1)
        result.push(collection_one[i]);
    }


  }

  return result;
}






module.exports = double_to_one;
