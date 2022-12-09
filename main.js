$( document ).ready(function() {
    console.log( "the html has loaded and my script file is properly loaded into my website code" );

//     var morning = "morning.gif";
//     var afternoon = "afternoon.gif";
//     var night = "night.gif";
//
//
//     setInterval(function() {
//    var d = new Date(),
//        hours = d.getHours(),
//        min = d.getMinutes(),
//        sec = d.getSeconds();
//    if (hours === 16 && min === 15 && sec === 01) {
//        var audio = document.getElementsByTagName('audio')[0]
//        //add the time in seconds
//        audio.currentTime = 0;
//        audio.play()
//        audio.style.display = 'block'
//    }
// }, 1000)

$( document ).ready(function() {
    console.log( "the html has loaded and my script file is properly loaded into my website code" );

//     var morning = "morning.gif";
//     var afternoon = "afternoon.gif";
//     var night = "night.gif";
//
//
//     setInterval(function() {
//    var d = new Date(),
//        hours = d.getHours(),
//        min = d.getMinutes(),
//        sec = d.getSeconds();
//    if (hours === 16 && min === 15 && sec === 01) {
//        var audio = document.getElementsByTagName('audio')[0]
//        //add the time in seconds
//        audio.currentTime = 0;
//        audio.play()
//        audio.style.display = 'block'
//    }
// }, 1000)
$( document ).ready(function() {
    console.log( "the html has loaded and my script file is properly loaded into my website code" );

//     var morning = "morning.gif";
//     var afternoon = "afternoon.gif";
//     var night = "night.gif";
//
//
//     setInterval(function() {
//    var d = new Date(),
//        hours = d.getHours(),
//        min = d.getMinutes(),
//        sec = d.getSeconds();
//    if (hours === 16 && min === 15 && sec === 01) {
//        var audio = document.getElementsByTagName('audio')[0]
//        //add the time in seconds
//        audio.currentTime = 0;
//        audio.play()
//        audio.style.display = 'block'
//    }
// }, 1000)

// get hours for title, and minutes for rotation
var s = new Date().getSeconds();
var m = new Date().getMinutes();
var h = new Date().getHours();

// audio; begins playing at the corresponding minute and second mark of the time when the website is loaded
function theHoursOST(){
  var s = String(new Date().getSeconds()).padStart(2, "0");
  var m = String(new Date().getMinutes()).padStart(2, "0");
  var theHoursOST = new Audio;
  theHoursOST.src = `audio/hilde.mp3#t=00:${m}:${s}`;
  theHoursOST.play();
  theHoursOST.loop = true;
  theHoursOST.autoplay = true;

  // audio on mobile
  body.addEventListener('click', function(e){
    theHoursOST.play();
    theHoursOST.loop = true;
    theHoursOST.autoplay = true;
  })
  // console.log(`audio/the-hours.mp3#t=00:${m}:${s}`);
}


});
