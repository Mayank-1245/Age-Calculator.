function agecalculator(){
  let months = document.getElementById('age').value;
  let days = document.getElementById('age').value;
  let hrs = document.getElementById('age').value;
  let min = document.getElementById('age').value;
  let secs = document.getElementById('age').value;
  document.write(months * 12+' Months' + ' ' + '<br/>' + days * 12* 30+' Days' + ' ' + '<br/>'
 + hrs * 12 * 30 * 24+' Hours'+ ' ' + '<br/>'
  + min * 12 * 30 * 24 * 60+' Minutes' +' ' + '<br/>'
  + secs * 12 * 30 * 24 * 60 * 60 +' Seconds');
}
