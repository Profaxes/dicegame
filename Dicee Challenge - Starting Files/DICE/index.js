
let randomNumber1 = Math.floor(Math.random() * 6) +1; //1 ile arasinda random bir sayi talep edilmektedir.

let randomDiceImage = "dice" + randomNumber1 +".png"; // dice1 den dice6 resim dosyalarindan birtanesini sectirdik

let randomimageSource = "images/"+randomDiceImage; // belirlenen dice1-6 arasindaki dosyayi eklenmesi icin tayin ettik

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimageSource);

let randomNumber2= Math.floor(Math.random() * 6 ) +1;

let randomimageSource2 = "images/dice" + randomNumber2 + ".png"; 

document.querySelectorAll("img")[1].setAttribute("src", randomimageSource2);




