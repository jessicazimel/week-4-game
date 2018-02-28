
//computer generates random numbers
// New game with 4 crystals/images
// on click each crystal generates a new random number between 1-12
// every time you click on a crystal the previous number adds to the new number
// 
//if total score (previous + new number) === copmuter number = win
//if total score (previus + new number) > copmuter number = lose
//new number should generate after win or lose


//all variables for game

var random_result;

var lost = 0;

var win = 0;

var previous = 0;

var images =[
"https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/355734/300/200/m1/fpnw/wm0/cristabsbac-.jpg?1424057323&s=0eb20681bed1e0f97f5d8a20dcfa44cf",
"http://farm3.static.flickr.com/2560/3866947638_5bf3ff1bdd.jpg",
"https://78.media.tumblr.com/c1d3453705dd57c47a5fa40158fc3359/tumblr_ojwdevJ5xy1rt4knxo1_500.jpg",
"http://monodomo.com/free-wallpapers/crystal-background-For-Free-Wallpaper.jpg"
];


//rest and start function

var resetAndStart = function() {

    $(".images").empty(crystal)

//computer guess random result 19-120


random_result = Math.floor(Math.random() * 101)+19 

//write elements to DOM 

$("#result").text("Match Those Numbers!: " + random_result);
$("#previous").text("Total Score:" + previous);
$("#win").text("YOU WON!:" +  win);
$("#lost").text("you lose:"  + lost);



// console.log(random_result);

for(var i = 0; i < 4; i++){

var random = Math.floor(Math.random() *  11)+1

    var crystal = $("<div>");
        
    crystal.attr({"class": "crystal","data-random":random
    
});

    crystal.css({
        "background-image":"url('" + images[i] + "')",
        "background-size":"cover"
    })
  
     $(".images").append(crystal);
    
    } 

} 

resetAndStart();

$(document).on("click", ".crystal", function () {
var num = parseInt($(this).attr("data-random"));

previous += num;

$("#previous").text("Total Score: " + previous);

console.log(previous);

if(previous > random_result){ 
    
    lost++; 
    $("#lost").text( " " + lost);

    previous= 0;

    
    
    resetAndStart();
}

else if(previous === random_result){ 
    
    win++;  
    $("#win").text(" " + win);
    previous=0;

    resetAndStart(); 

}

});