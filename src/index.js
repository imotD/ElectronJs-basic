const { ipcRenderer, ipcMain } = require("electron");
const axios = require("axios");

const notifyBtn = document.getElementById("notifyBtn");
let price = document.querySelector("h1");
let targetPrice = document.getElementById("targetPrice");

function getBTC() {
  axios
    .get(
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD&api_key=3dc72d12493deedabc4133e2039bed1d734a00a7a58049783ee1716c1361f8f2"
    )
    .then(res => {
      const cryptos = res.data.BTC.USD;
      price.innerHTML = `$${cryptos.toLocaleString("en")}`;
    })
    .catch(e => console.log(e));
}

getBTC();
setInterval(getBTC, 30000);

notifyBtn.addEventListener("click", e => {
  ipcRenderer.send("main:notifyBtn");
});

ipcRenderer.on("targetPriceVal", (event, arg) => {
  (targetPriceVal = Number(
    arg
  )), (targetPrice.innerHTML = `$${targetPriceVal.toLocaleString("en")}`);
});
