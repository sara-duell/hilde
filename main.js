
$( document ).ready(function() {
    console.log( "the html has loaded and my script file is properly loaded into my website code" );
    
// get hours for title, and minutes for rotation
var s = new Date().getSeconds();
var m = new Date().getMinutes();
var h = new Date().getHours();

// audio; begins playing at the corresponding minute and second mark of the time when the website is loaded
function theHoursOST(){
  var theHoursOST = new Audio;
  theHoursOST.src = `audio/hilde.mp3`;
  theHoursOST.play();
  theHoursOST.loop = true;
  theHoursOST.autoplay = true;

  // audio on mobile
  body.addEventListener('click', function(e){
    theHoursOST.play();
    theHoursOST.loop = true;
    theHoursOST.autoplay = true;
  })
  // console.log(`audio/hilde.mp3#t=00:${m}:${s}`);
}
