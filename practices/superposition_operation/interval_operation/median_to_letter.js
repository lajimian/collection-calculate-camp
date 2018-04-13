'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var lowmid=collection[Math.floor((collection.length-1)/2)];
  var highmid=collection[Math.ceil((collection.length-1)/2)];;

  var mid_collection=Math.ceil((lowmid + highmid)/2);

  var result=String.fromCharCode(97)+String.fromCharCode(mid_collection-26+96);

  return result;



}

module.exports = median_to_letter;
