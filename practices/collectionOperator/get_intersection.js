'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var i = 0,j = 0;
  var result = [];
  while(j<collection_b.length)
  {
    if(collection_a[i]==collection_b[j]) {
      result.push(collection_a[i]);
      j++;
      i=0;
    }
    else {
      i++;
      if (i == collection_a.length ) {
        i = 0;
        j++;
      }
    }
    }
  return result;
    }






module.exports = get_intersection;
