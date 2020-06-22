var a = document.getElementById("audio1");
var b = document.getElementById("audio2");
var c = document.getElementById("audio3");
var d = document.getElementById("audio4");
var e = document.getElementById("audio5");
var f = document.getElementById("audio6");
var g = document.getElementById("audio7");
function playAudio1(){a.play();}
function playAudio2(){b.play();}
function playAudio3(){c.play();}
function playAudio4(){d.play();}
function playAudio5(){e.play();}
function playAudio6(){f.play();}
function playAudio7(){g.play();}
document.addEventListener('keydown',function(e){
    if(e.keyCode == 65){a.play();}
   else if(e.keyCode == 66){b.play();}
   else if(e.keyCode == 67){c.play();}
    else if(e.keyCode == 68){d.play();}
    else if(e.keyCode == 69){e.play();}
    else if(e.keyCode == 70){f.play();}
    else if(e.keyCode == 71){g.play();}
    else{error;}
});
