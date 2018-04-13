'use strict';
var rank_asc = function(collection){

  for(var i=0;i<collection.length-1;i++){

    for(var j=0;j<collection.length-i-1;j++) {
      if (collection[j] < collection[j + 1]) {
        var t = collection[j];
        collection[j] = collection[j + 1];
        collection[j + 1] = t;
      }
    }
    }
  return collection;
};

module.exports = rank_asc;
