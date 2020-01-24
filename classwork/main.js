var coins = 5
var insert_coins = 1
var highscore = 5
var left_star = 1
var right_star = 1

document.getElementById("number").innerHTML=coins;
document.getElementById("highnumber").innerHTML=highscore;
document.getElementById("myAnchor").addEventListener("click", function(event){
    event.preventDefault();
    var image=Math.floor(Math.random()*3);
    var image2=Math.floor(Math.random()*3);
    if (image==0) {
        document.getElementById("myImage").src="redstar.png";
        left_star=0;
    }
    if (image==1) {
        document.getElementById("myImage").src="yellowstar.png";
        left_star=1;
    }
    if (image==2) {
        document.getElementById("myImage").src="greenstar.png";
        left_star=2;
    }
    if (image2==0) {
        document.getElementById("myImage2").src="redstar.png";
        right_star=0;
    }
    if (image2==1) {
        document.getElementById("myImage2").src="yellowstar.png";
        right_star=1;
    }
    if (image2==2) {
        document.getElementById("myImage2").src="greenstar.png";
        right_star=2;
    }
    if (left_star===right_star) {

    // increase value
        coins=coins+(insert_coins*4);
    } else {
        coins=coins-insert_coins;
        // decrease value
    }
    document.getElementById("number").innerHTML=coins;
    if (coins>highscore) {
        highscore=coins;
    }
    document.getElementById("highnumber").innerHTML=highscore;
});







