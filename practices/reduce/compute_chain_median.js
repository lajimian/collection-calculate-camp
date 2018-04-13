'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var chain = collection.split('->').sort(function (a,b){
    return a-b;
  });

  var lowMiddle = Math.floor((chain.length-1)/2);
  var highMiddle=Math.ceil((chain.length-1)/2);

  return (parseFloat(chain[lowMiddle])+parseFloat(chain[highMiddle]))/2;

}

module.exports = compute_chain_median;
