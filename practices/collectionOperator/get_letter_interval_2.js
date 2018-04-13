'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var result = [];
  if(number_a<number_b)
    while(number_a<=number_b)
    {
      if(number_a<=26)
        result.push(String.fromCharCode((number_a+96)));
      else if(number_a<=52)
        result.push(String.fromCharCode(97)+String.fromCharCode(number_a-26+96));
      else
        result.push(String.fromCharCode(98)+String.fromCharCode(number_a-26-26+96));
      number_a++;
    }

  else if(number_a==number_b)
    if(number_a<=26)
      result.push(String.fromCharCode((number_a+96)));
    else if(number_a<=52)
      result.push(String.fromCharCode(97)+String.fromCharCode(number_a-26+96));
    else
      result.push(String.fromCharCode(98)+String.fromCharCode(number_a-26-26+96));

  else
    while(number_a>=number_b) {
      if(number_a<=26)
        result.push(String.fromCharCode((number_a+96)));
      else if(number_a<=52)
        result.push(String.fromCharCode(97)+String.fromCharCode(number_a-26+96));
      else
        result.push(String.fromCharCode(98)+String.fromCharCode(number_a-26-26+96));

      number_a--;
    }

  return result;
}

module.exports = get_letter_interval_2;

