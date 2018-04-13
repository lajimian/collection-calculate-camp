'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  var min_num=collection[0];

  for(var i=0;i<collection.length;i++)
    if(collection[i]<min_num)
      min_num=collection[i];

  return min_num;
}

module.exports = collect_min_number;

