function alertLocalTime(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "paris") {
      timeParis = moment().tz("Europe/Paris").format("LLLL");
      alert(`It is currently ${timeParis} in Paris, France.`);
    }
    if (event.target.value === "tokyo") {
      timeTokyo = moment().tz("Asia/Tokyo").format("LLLL");
      alert(`It is currently ${timeTokyo} in Tokyo, Japan.`);
    }
    if (event.target.value === "sydney") {
      timeSydney = moment().tz("Australia/Sydney").format("LLLL");
      alert(`It is currently ${timeSydney} in Sydney, Australia.`);
    }
  }
}

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", alertLocalTime);

setInterval(function () {
  let perthElement = document.querySelector("#perth");
  let perthDateElement = perthElement.querySelector(".date");
  let perthDate = moment().tz("Australia/Perth").format("MMMM Do, YYYY");
  perthDateElement.innerHTML = perthDate;

  let perthTimeElement = perthElement.querySelector(".time");
  let perthTime = moment().tz("Australia/Perth");
  perthTimeElement.innerHTML = `${perthTime.format(
    `h:mm:ss [<small>]A[</small]`
  )}`;

  let barcelonaElement = document.querySelector("#barcelona");
  let barcelonaDateElement = barcelonaElement.querySelector(".date");
  let barcelonaDate = moment().tz("Europe/Madrid").format("MMMM Do, YYYY");
  barcelonaDateElement.innerHTML = barcelonaDate;

  let barcelonaTimeElement = barcelonaElement.querySelector(".time");
  let barcelonaTime = moment().tz("Europe/Madrid");
  barcelonaTimeElement.innerHTML = `${barcelonaTime.format(
    `h:mm:ss [<small>]A[</small]`
  )}`;
}, 1000);
