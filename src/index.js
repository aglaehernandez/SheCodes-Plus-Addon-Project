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

  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesDate = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do, YYYY");
  losAngelesDateElement.innerHTML = losAngelesDate;

  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    `h:mm:ss [<small>]A[</small]`
  )}`;
}, 1000);

function updateCity(event) {
  setInterval(function () {
    let cityTimeZone = event.target.value;

    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }

    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities-container");

    citiesElement.innerHTML = `
    <div class="cities">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
      </div>
      <div class="time">${cityTime.format(`h:mm:ss`)} <small>${cityTime.format(
      `A`
    )}</small></div>
    </div>

        <a href="/">Return to All cities</a>
  `;
  }, 1000);
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
