$( document ).ready(function() {
    console.log( "the html has loaded and my script file is properly loaded into my website code" );

    var morning = "morning.gif";
    var afternoon = "afternoon.gif";
    var night = "night.gif";


    setInterval(function() {
   var d = new Date(),
       hours = d.getHours(),
       min = d.getMinutes(),
       sec = d.getSeconds();
   if (hours === 12 && min === 45 && sec === 01) {
       var Hilde = document.getElementsByTagName('audio')[0]
       //add the time in seconds
       Hilde.currentTime = 0;
       Hilde.play()
       Hilde.style.display = 'block'
   }
}, 1000)
    
    // audio on mobile 
  body.addEventListener('click', function(e){
    Hilde.play();
    Hilde.loop = true;
    Hilde.autoplay = true;
  })

$("#color").click(function() {
  $("body").css({
    "background-color": "pink"
  });
});

$("#text").click(function() {
  $("p").html("I like to eat snails");
});

$("#show").click(function() {
  $(this).attr("src", "2.png");
});


});
