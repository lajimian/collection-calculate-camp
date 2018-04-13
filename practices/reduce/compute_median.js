'use strict';

function compute_median(collection) {
  //在这里写入代码
  var collection_sort = collection.sort(function (a,b){
    return a-b;
  });

  var lowMiddle = Math.floor((collection_sort.length-1)/2);
  var highMiddle=Math.ceil((collection_sort.length-1)/2);

  return (collection_sort[lowMiddle]+collection_sort[highMiddle])/2;
}

module.exports = compute_median;


