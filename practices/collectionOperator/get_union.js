'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var result =[];
  var i=0,j=0;

  for(var k=0;k<collection_a.length;k++)
    result.push(collection_a[k]);

  while(j<collection_b.length) {
    if (result[i] == collection_b[j]) {
      j++;
      i = 0;
    }
    else {
      i++;
      if (i == collection_a.length) {
        result.push(collection_b[j]);
        j++;
        i = 0;
      }
    }
  }

  return result;


  }










module.exports = get_union;

