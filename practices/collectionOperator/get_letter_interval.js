'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var result = [];
  if(number_a<number_b)
    while(number_a<=number_b)
    {
      result.push(String.fromCharCode((number_a+96)));
      number_a++;
    }

  else if(number_a==number_b)
    result.push(String.fromCharCode((number_a+96)));

  else
    while(number_a>=number_b) {
      result.push(String.fromCharCode((number_a+96)));
      number_a--;
    }

  return result;
}

module.exports = get_letter_interval;
