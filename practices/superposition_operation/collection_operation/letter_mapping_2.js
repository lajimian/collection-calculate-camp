'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var result;
  var sum=0;


  for(var i=0;i<collection.length;i++)
    sum+=collection[i];
  var ave =Math.ceil(sum/collection.length);

  result=String.fromCharCode(ave+96);



  return result;
}

module.exports = average_to_letter;

