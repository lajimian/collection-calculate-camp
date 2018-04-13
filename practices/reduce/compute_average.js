'use strict';

function compute_average(collection) {
  //在这里写入代码
  var sum=0;

  for(var i=0;i<collection.length;i++)
     sum+=collection[i];
  var ave=sum/collection.length;

  return ave;

}

module.exports = compute_average;

