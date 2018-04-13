'use strict';
var is_exist_element = function(collection,element){
  for(var i=0;i<collection.length;i++) {
    if (i % 2 == 0 && collection[i] == element) {
      return true;
      break;
    }
  }

    if(i==collection.length)
      return false;



};
module.exports = is_exist_element;
