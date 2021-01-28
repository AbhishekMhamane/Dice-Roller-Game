var rnum=Math.floor(Math.random()*6)+1;

var diceimage="dice"+ rnum +".png";

var randomsource="images/"+diceimage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomsource);


var rnum2=Math.floor(Math.random()*6)+1;

var diceimage2="dice"+rnum2+".png";

var randomsource2="images/"+diceimage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomsource2);

if(rnum > rnum2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(rnum2 > rnum)
{
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
