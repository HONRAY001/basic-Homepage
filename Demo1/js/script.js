const date = () =>{

    let date_main = new Date("Jan, 04, 2023,  10:50:50");
    //console.log(date_main);
    //let current_date = new Date();
    console.log(date_main);
    let date_day = parseInt((date_main - current_date) / 1000 / 60 / 60 / 24);
    let date_hou = parseInt((date_main - current_date) / 1000 / 60 / 60)% 24;
    let date_min = parseInt((date_main - current_date) / 1000 / 60)% 60;
    let date_sec = parseInt((date_main - current_date) / 1000)% 60;
    //console.log(date_min);
    document.getElementsByClassName("time")[0].innerHTML = `
            <span>${date_day} <br> 
            <h6>30DAYS</h6>
            </span>
            <h5>:</h5>
            <span>${date_hou} <br> 
            <h6>HOURS</h6>
            </span>
            <h5>:</h5>
            <span>${date_min} <br>
            <h6>MINUTES</h6>
            </span>
            <h5>:</h5>
            <span>${date_sec} <br>
            <h6>SECONDS</h6>
            </span>
    `
}

setInterval(date, 1000);



let coin_first = document.getElementById('coin_first');
let coin = document.getElementById('coin');
let btc = document.getElementById('btc');


coin.addEventListener('change', ()=>{
    let a = coin.value; 
    coin_first.innerText = a.slice(0,1);
    if (a === "Bitcoin") {
        btc.innerText = "BTC";
    } else if (a === "Ethereum") {
        btc.innerText = "ETH";
    }else if (a === "Tether") {
        btc.innerText = "USDT";
    } else if (a === "BNB") {
        btc.innerText = "BNB";
    }
})

let gov_coins = document.getElementById('gov_coins');
let coins = document.getElementById('coins');
let gov_coinss = document.getElementById('gov_coinss');



coins.addEventListener('change', ()=>{
    let a = coins.value; 
    gov_coins.innerText = a.slice(0,1);
    if (a === "Dollar") {
        gov_coins.innerText = "$";
        gov_coinss.innerText = "USD";
    } else if (a === "Euro") {
        gov_coins.innerText = "€";
        gov_coinss.innerText = "EUR";
    }else if (a === "Japanese Yen") {
        gov_coins.innerText = "¥";
        gov_coinss.innerText = "JPY";
    } else if (a === "British Pounds") {
        gov_coins.innerText = "£";
        gov_coinss.innerText = "GBP";
    }
})

let crypto = document.getElementById('crypto');
let gov = document.getElementById('gov');

let bitcoin_dollar = 27621.00;
let ethereum_dollar = 1846.44;
let tether_dollar = 1.00;
let bnb_dollar = 311.21;



crypto.addEventListener('change', () =>{
    switch ("Bitcoin") {
        case coin.value:
            switch ("Dollar"){
                case coins.value:
                    gov.value = (crypto.value) * bitcoin_dollar;
                break;
            }
            switch ("Euro"){
                case coins.value:
                    gov.value = (crypto.value) * (bitcoin_dollar * 0.91);
                break;
            }
            switch ("Japanese Yen"){
                case coins.value:
                    gov.value = (crypto.value) * (bitcoin_dollar * 134.41);
                break;
            }
            switch ("British Pounds"){
                case coins.value:
                    gov.value = (crypto.value) * (bitcoin_dollar * 0.79);
                break;
            }
            break;
    }
})


crypto.addEventListener('change', () =>{
    switch ("Ethereum") {
        case coin.value:
            switch ("Dollar"){
                case coins.value:
                    gov.value = (crypto.value) * ethereum_dollar;
                break;
            }
            switch ("Euro"){
                case coins.value:
                    gov.value = (crypto.value) * (ethereum_dollar * 0.91);
                break;
            }
            switch ("Japanese Yen"){
                case coins.value:
                    gov.value = (crypto.value) * (ethereum_dollar * 134.41);
                break;
            }
            switch ("British Pounds"){
                case coins.value:
                    gov.value = (crypto.value) * (ethereum_dollar * 0.79);
                break;
            }
            break;
    }
})



crypto.addEventListener('change', () =>{
    switch ("Tether") {
        case coin.value:
            switch ("Dollar"){
                case coins.value:
                    gov.value = (crypto.value) * tether_dollar;
                break;
            }
            switch ("Euro"){
                case coins.value:
                    gov.value = (crypto.value) * (tether_dollar * 0.91);
                break;
            }
            switch ("Japanese Yen"){
                case coins.value:
                    gov.value = (crypto.value) * (tether_dollar * 134.41);
                break;
            }
            switch ("British Pounds"){
                case coins.value:
                    gov.value = (crypto.value) * (tether_dollar * 0.79);
                break;
            }
            break;
    }
})


crypto.addEventListener('change', () =>{
    switch ("BNB") {
        case coin.value:
            switch ("Dollar"){
                case coins.value:
                    gov.value = (crypto.value) * bnb_dollar;
                break;
            }
            switch ("Euro"){
                case coins.value:
                    gov.value = (crypto.value) * (bnb_dollar * 0.91);
                break;
            }
            switch ("Japanese Yen"){
                case coins.value:
                    gov.value = (crypto.value) * (bnb_dollar * 134.41);
                break;
            }
            switch ("British Pounds"){
                case coins.value:
                    gov.value = (crypto.value) * (bnb_dollar * 0.79);
                break;
            }
            break;
    }
})