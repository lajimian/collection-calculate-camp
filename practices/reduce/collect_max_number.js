'use strict';

function collect_max_number(collection) {

  //在这里写入代码
  var max_num=collection[0];

  for(var i=0;i<collection.length;i++)
    if(collection[i]>max_num)
      max_num=collection[i];

  return max_num;
}

module.exports = collect_max_number;
