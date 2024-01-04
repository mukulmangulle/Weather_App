const form = document.querySelector("form");
const input = document.querySelector("input")
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const p = document.querySelector("p");
const image = document.querySelector("img");
const card = document.querySelector(".card");
const h3 = document.querySelector("h3");
const h4 = document.querySelector("h4");

const local1 = document.querySelector("#local1");
const head1 = document.querySelector("#head1");
const head2 = document.querySelector("#head2");
const head3 = document.querySelector("#head3");
const img1 = document.querySelector("#img1");

const local2 = document.querySelector("#local2");
const head4 = document.querySelector("#head4");
const head5 = document.querySelector("#head5");
const head6 = document.querySelector("#head6");
const img2 = document.querySelector("#img2");

const local3 = document.querySelector("#local3");
const head7 = document.querySelector("#head7");
const head8 = document.querySelector("#head8");
const head9 = document.querySelector("#head9");
const img3 = document.querySelector("#img3");

const local4 = document.querySelector("#local4");
const head10 = document.querySelector("#head10");
const head11 = document.querySelector("#head11");
const head12 = document.querySelector("#head12");
const img4 = document.querySelector("#img4");


const local5 = document.querySelector("#local5");
const head13 = document.querySelector("#head13");
const head14 = document.querySelector("#head14");
const head15 = document.querySelector("#head15");
const img5 = document.querySelector("#img5");

const local6 = document.querySelector("#local6");
const head16 = document.querySelector("#head16");
const head17 = document.querySelector("#head17");
const head18 = document.querySelector("#head18");
const img6 = document.querySelector("#img6");

const local7 = document.querySelector("#local7");
const head19 = document.querySelector("#head19");
const head20 = document.querySelector("#head20");
const head21 = document.querySelector("#head21");
const img7 = document.querySelector("#img7");

const getweather = async (e) => {
     e.preventDefault();

     const res = await
          fetch(`https://api.weatherapi.com/v1/forecast.json?key=e1f44f1ed32e4082a0270505231508&q=${input.value}&days=10&aqi=yes&alerts=yes`);
     const data = await res.json();
     h2.innerText = data.location.name;
     h1.innerText = data.current.temp_c + "°C";
     p.innerText = data.current.condition.text;
     image.setAttribute("src", data.current.condition.icon);
     card.className = "card p-3 shadow-lg rounded-0";

     //1
     local1.innerText = data.forecast.forecastday[0].date;
     img1.setAttribute('src', data.forecast.forecastday[0].day.condition.icon);
     head1.innerText = data.forecast.forecastday[0].day.avgtemp_c + "°C";
     head2.innerText = data.forecast.forecastday[0].day.maxwind_kph;
     head3.innerText = data.forecast.forecastday[0].day.avghumidity;

     //2
     local2.innerText = data.forecast.forecastday[1].date;
     img2.setAttribute('src', data.forecast.forecastday[1].day.condition.icon);
     head4.innerText = data.forecast.forecastday[1].day.avgtemp_c + "°C";
     head5.innerText = data.forecast.forecastday[1].day.maxwind_kph;
     head6.innerText = data.forecast.forecastday[1].day.avghumidity;

     //3
     local3.innerText = data.forecast.forecastday[2].date;
     img3.setAttribute('src', data.forecast.forecastday[2].day.condition.icon);
     head7.innerText = data.forecast.forecastday[2].day.avgtemp_c + "°C";
     head8.innerText = data.forecast.forecastday[2].day.maxwind_kph;
     head9.innerText = data.forecast.forecastday[2].day.avghumidity;

     //  // //4
     local4.innerText = data.forecast.forecastday[3].date;
     img3.setAttribute('src', data.forecast.forecastday[3].day.condition.icon);
     head10.innerText = data.forecast.forecastday[3].day.avgtemp_c + "°C";
     head11.innerText = data.forecast.forecastday[3].day.maxwind_kph;
     head12.innerText = data.forecast.forecastday[3].day.avghumidity;


     //5
     local5.innerText = data.forecast.forecastday[4].date;
     img5.setAttribute('src', data.forecast.forecastday[4].day.condition.icon);
     head13.innerText = data.forecast.forecastday[4].day.avgtemp_c + "°C";
     head14.innerText = data.forecast.forecastday[4].day.maxwind_kph;
     head15.innerText = data.forecast.forecastday[4].day.avghumidity;

     //6
     local6.innerText = data.forecast.forecastday[5].date;
     img6.setAttribute('src', data.forecast.forecastday[5].day.condition.icon);
     head16.innerText = data.forecast.forecastday[5].day.avgtemp_c + "°C";
     head17.innerText = data.forecast.forecastday[5].day.maxwind_kph;
     head18.innerText = data.forecast.forecastday[5].day.avghumidity;

     //  7
     local7.innerText = data.forecast.forecastday[6].date;
     img7.setAttribute('src', data.forecast.forecastday[6].day.condition.icon);
     head19.innerText = data.forecast.forecastday[6].day.avgtemp_c + "°C";
     head20.innerText = data.forecast.forecastday[6].day.maxwind_kph;
     head21.innerText = data.forecast.forecastday[6].day.avghumidity;
     try {
     } catch (error) {
          window.alert("Enter Valid Cityname");
     }

     form.reset();
};
form.addEventListener("submit", getweather);
