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
