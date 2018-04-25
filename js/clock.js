const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setDate() {
   const fech = new Date(); // metodo para actualizar fecha;
   const seconds = fech.getSeconds();// segundo actual
   const mins = fech.getMinutes();// minuto actual
   const hour = fech.getHours();// hora actual
   
   const secondsDegrees = ((seconds / 60) * 360) + 90;
   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
   
   const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
   minsHand.style.transform = `rotate(${minsDegrees}deg)`;
   
   const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }
  setInterval(setDate, 1000);//Intervalo de un segundo

  setDate();