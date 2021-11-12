document.getElementById("sonido1").onclick = playPauseAudio;


function playPauseAudio() {
    //    document.getElementById("musica").muted = false;

    if (document.getElementById("musica").paused) {
        document.getElementById("musica").play();
       
        
    } else {
        
        document.getElementById("musica").pause();
    }

}

document.getElementById("sonido2").onclick = playPauseAudio2;


function playPauseAudio2() {
    //    document.getElementById("musica").muted = false;

    if (document.getElementById("musica2").paused) {
        document.getElementById("musica2").play();
       
        
    } else {
        
        document.getElementById("musica2").pause();
    }

}

document.getElementById("sonido3").onclick = playPauseAudio3;


function playPauseAudio3() {
    //    document.getElementById("musica").muted = false;

    if (document.getElementById("musica3").paused) {
        document.getElementById("musica3").play();
       
        
    } else {
        
        document.getElementById("musica3").pause();
    }

}

document.getElementById("sonido4").onclick = playPauseAudio4;


function playPauseAudio4() {
    //    document.getElementById("musica").muted = false;

    if (document.getElementById("musica4").paused) {
        document.getElementById("musica4").play();
       
        
    } else {
        
        document.getElementById("musica4").pause();
    }

}


document.getElementById("sonido5").onclick = playPauseAudio5;


function playPauseAudio5() {
    //    document.getElementById("musica").muted = false;

    if (document.getElementById("musica5").paused) {
        document.getElementById("musica5").play();
       
        
    } else {
        
        document.getElementById("musica5").pause();
    }

}

document.getElementById("sonido6").onclick = playPauseAudio6;


function playPauseAudio6() {
    //    document.getElementById("musica").muted = false;

    if (document.getElementById("musica6").paused) {
        document.getElementById("musica6").play();
       
        
    } else {
        
        document.getElementById("musica6").pause();
    }

}


document.getElementById("sonido7").onclick = playPauseAudio7;


function playPauseAudio7() {
    //    document.getElementById("musica").muted = false;

    if (document.getElementById("musica7").paused) {
        document.getElementById("musica7").play();
       
        
    } else {
        
        document.getElementById("musica7").pause();
    }

}

document.getElementById("sonido8").onclick = playPauseAudio8;


function playPauseAudio8() {
    //    document.getElementById("musica").muted = false;

    if (document.getElementById("musica8").paused) {
        document.getElementById("musica8").play();
       
        
    } else {
        
        document.getElementById("musica8").pause();
    }

}

document.getElementById("sonido9").onclick = playPauseAudio9;


function playPauseAudio9() {
    //    document.getElementById("musica").muted = false;

    if (document.getElementById("musica9").paused) {
        document.getElementById("musica9").play();
       
        
    } else {
        
        document.getElementById("musica9").pause();
    }

}

document.getElementById("sonido10").onclick = playPauseAudio10;


function playPauseAudio10() {
    //    document.getElementById("musica").muted = false;

    if (document.getElementById("musica10").paused) {
        document.getElementById("musica10").play();
       
        
    } else {
        
        document.getElementById("musica10").pause();
    }

}

document.getElementById("sonido11").onclick = playPauseAudio11;


function playPauseAudio11() {
    //    document.getElementById("musica").muted = false;

    if (document.getElementById("musica11").paused) {
        document.getElementById("musica11").play();
       
        
    } else {
        
        document.getElementById("musica11").pause();
    }

}

document.getElementById("sonido12").onclick = playPauseAudio12;


function playPauseAudio12() {
    //    document.getElementById("musica").muted = false;

    if (document.getElementById("musica12").paused) {
        document.getElementById("musica12").play();
       
        
    } else {
        
        document.getElementById("musica12").pause();
    }

}

document.getElementById("sonido13").onclick = playPauseAudio13;


function playPauseAudio13() {
    //    document.getElementById("musica").muted = false;

    if (document.getElementById("musica13").paused) {
        document.getElementById("musica13").play();
       
        
    } else {
        
        document.getElementById("musica13").pause();
    }

}

document.getElementById("sonido14").onclick = playPauseAudio14;


function playPauseAudio14() {
    //    document.getElementById("musica").muted = false;

    if (document.getElementById("musica14").paused) {
        document.getElementById("musica14").play();
       
        
    } else {
        
        document.getElementById("musica14").pause();
    }

}

document.getElementById("sonido15").onclick = playPauseAudio15;


function playPauseAudio15() {
    //    document.getElementById("musica").muted = false;

    if (document.getElementById("musica15").paused) {
        document.getElementById("musica15").play();
       
        
    } else {
        
        document.getElementById("musica15").pause();
    }

}

document.getElementById("sonido16").onclick = playPauseAudio16;


function playPauseAudio16() {
    //    document.getElementById("musica").muted = false;

    if (document.getElementById("musica16").paused) {
        document.getElementById("musica16").play();
       
        
    } else {
        
        document.getElementById("musica16").pause();
    }

}
//Quan carreguem la pàgina assignem a l'slider el valor que tingui el volum
document.getElementById("sliderVol").value = document.getElementById("musica").volume;


//Fem que quan es toqui l'slider s'executi la funció canviaVolum
document.getElementById("sliderVol").oninput = canviaVolum;

function canviaVolum() {
    //Assignem el valor de l'slider al volum de l'audio
   document.getElementById("musica").volume = document.getElementById("sliderVol").value;
    
    document.getElementById("musica2").volume = document.getElementById("sliderVol").value;
    
    document.getElementById("musica3").volume = document.getElementById("sliderVol").value;
    
    document.getElementById("musica4").volume = document.getElementById("sliderVol").value;
    
    document.getElementById("musica5").volume = document.getElementById("sliderVol").value;
    
    document.getElementById("musica6").volume = document.getElementById("sliderVol").value;
    
    document.getElementById("musica7").volume = document.getElementById("sliderVol").value;
    
    document.getElementById("musica8").volume = document.getElementById("sliderVol").value;
    
    document.getElementById("musica9").volume = document.getElementById("sliderVol").value;
    
    document.getElementById("musica10").volume = document.getElementById("sliderVol").value;
    
    document.getElementById("musica11").volume = document.getElementById("sliderVol").value;
    
    document.getElementById("musica12").volume = document.getElementById("sliderVol").value;
    
    document.getElementById("musica13").volume = document.getElementById("sliderVol").value;
    
    document.getElementById("musica14").volume = document.getElementById("sliderVol").value;
    
    document.getElementById("musica15").volume = document.getElementById("sliderVol").value;
    
    document.getElementById("musica16").volume = document.getElementById("sliderVol").value;
}



document.getElementById("sliderDur").max = document.getElementById("musica").duration;

//Fem que quan es toqui l'slider s'executi la funció de canviar el temps
document.getElementById("sliderDur").oninput = canviaTemps;

function canviaTemps() {
    //Assignem el valor de l'slider al temps de reproducció
   document.getElementById("musica").currentTime =  document.getElementById("sliderDur").value;
}













