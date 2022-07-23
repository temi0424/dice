var n = Math.random();
n=Math.floor(n*6)+1;
var randomNumber1 ="images/dice"+n+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomNumber1);



var i = Math.random();
i=Math.floor(i*6)+1;
var randomNumber2 ="images/dice"+i+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomNumber2);


if(randomNumber1<randomNumber2){
document.querySelector("h1").textContent="player2 wins🚩"
}
else if (randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🚩playerOne wins"
    }
else {
    document.querySelector("h1").textContent="🚩draw🚩"
}