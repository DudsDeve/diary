const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
/* o document.getelement = pega os elementos que voce quer do html e liga com o JS,
tanto por ID, NOME entre outros */

const clock = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (hr < 10) min = '0' + min;
    if (hr < 10) s = '0' + min;
// se a HORA for MENOR que 10, a HORA vai ser IGUAL a 0 + HORA
// isso serve para adicionar um 0 na frente do tempo


  hours.textContent = hr;
  minutes.textContent = min;
  seconds.textContent = s ;
})
/* let sempre dentro dos SCOPES*/