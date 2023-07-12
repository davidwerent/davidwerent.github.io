let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1");
let btn1 = document.getElementById("btn2");
let btn1 = document.getElementById("btn3");
let btn1 = document.getElementById("btn4");
let btn1 = document.getElementById("btn5");
let btn1 = document.getElementById("btn6");

btn1.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 1!");
        item = "1";
        tg.MainButton.show();
    }
});
btn2.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 2!");
        item = "2";
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.SendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.first_name}
${tg.initDataUnsafe.last_name}`;

usercard.appendChild(p);





