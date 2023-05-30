// let money = [
//   1.534202, 1.823053, 4.994209, 1.361552, 0.905072, 7.064712, 22.078582,
//   6.943713, 0.931851, 0.809914, 7.83256, 7.021034, 346.100566, 15008.124477,
//   3.725822, 82.564931, 139.220259, 140.65519, 1323.431371, 17.629925, 4.601007,
//   11.065235, 1.653988, 55.890601, 4.223481, 4.622407, 79.000083, 10.812915,
//   1.350202, 34.73005, 19.972935, 1, 19.659913,
// ];
// let link = `https://api.freecurrencyapi.com/v1/latest?apikey=oeyo8n3crITsD4Ac0Lg6KrVkzn6fi1T1rxo3lfFI`;
let names = [
  "Australlia",
  "Bulgaria",
  "Brazil",
  "Canada",
  "Switzerland/Liechtenstein",
  "China",
  "Czechia",
  "Denmark",
  "Euro Countries",
  "Sterling pound Countries",
  "Hong Kong",
  "Croatia",
  "Hungary",
  "Indonesia",
  "Israeli /Shekel",
  "India/Bhutan",
  "Iceland",
  "Japan",
  "Korea",
  "Mexico",
  "Malaysia",
  "Norwegian Krone Countries",
  "New Zealand",
  "Philippines",
  "Poland",
  "Romanian Leu",
  "Russian Ruble",
  "Sweden",
  "Singapore",
  "Thailand",
  "Turkish lira",
  "United States",
  "South African Rand Countries",
];
let country = [
  "AUD",
  "BGN",
  "BRL",
  "CAD",
  "CHF",
  "CNY",
  "CZK",
  "DKK",
  "EUR",
  "GBP",
  "HKD",
  "HRK",
  "HUF",
  "IDR",
  "ILS",
  "INR",
  "ISK",
  "JPY",
  "KRW",
  "MXN",
  "MYR",
  "NOK",
  "NZD",
  "PHP",
  "PLN",
  "RON",
  "RUB",
  "SEK",
  "SGD",
  "THB",
  "TRY",
  "USD",
  "ZAR",
];
let newoption = document.querySelectorAll(".recent");
for (var i = 0; i < country.length; i++) {
  let op = `<option value="${country[i]}" id="${country[i]}">${names[i]}</option>`;
  newoption[0].innerHTML += op;
  newoption[1].innerHTML += op;
}
document.getElementById("sin").disabled = true;
console.log(newoption[0]);
let convert = document.getElementById("convert");
//
//
//BUTTON EVENT-LISTENER
//
//
convert.addEventListener("click", () => {
  let fro = document.querySelector("#from").value;
  let to = document.querySelector("#to").value;
  let num1 = document.getElementById("fin").value;
  let num2 = document.getElementById("sin");
  // console.log(num1);
  // console.log(num2);
  const host = "api.frankfurter.app";
  var ans;
  async function ap() {
    await fetch(`https://${host}/latest?amount=${num1}&from=${fro}&to=${to}`)
      .then((resp) => resp.json())
      .then((data) => {
        ans = Object.entries(data.rates);
        // console.log(`${num1} ${fro} = ${ans[0][1]} ${to}`);
        num2.value = ans[0][1];
        console.log(ans[0][1]);
      })
      .catch((msg) =>
        alert("Check if both format of the currency are different")
      );
  }
  ap();
});
let interchange = document.getElementById("bton");
//
//
//INTERCHANGE EVENT-LISTENER
//
//
interchange.addEventListener("click", () => {
  let fro = document.querySelector("#from").value;
  let to = document.querySelector("#to").value;
  document.getElementById("from").value = `${to}`;
  document.getElementById("to").value = `${fro}`;
});
