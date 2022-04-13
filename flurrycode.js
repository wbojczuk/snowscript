document.getElementById("code1").textContent = '<script src="flurryscript.js" defer></script>';

document.getElementById("color").value = flurryStorm.flakeColor;
document.getElementById("minWindX").value = flurryStorm.minWindX;
document.getElementById("maxWindX").value = flurryStorm.maxWindX;
document.getElementById("minWindY").value = flurryStorm.minWindY;
document.getElementById("maxWindY").value = flurryStorm.maxWindY;
document.getElementById("minSize").value = flurryStorm.minFlakeSize;
document.getElementById("maxSize").value = flurryStorm.maxFlakeSize;
document.getElementById("meltSpeed").value = flurryStorm.meltSpeed;


document.getElementById("colorButton").addEventListener("click", function(){
    flurryStorm.flakeColor = document.getElementById("color").value;
});

document.getElementById("WindXButton").addEventListener("click", function(){
    flurryStorm.minWindX = parseInt(document.getElementById("minWindX").value);
    flurryStorm.maxWindX = parseInt(document.getElementById("maxWindX").value);
});

document.getElementById("WindYButton").addEventListener("click", function(){
    flurryStorm.minWindY = parseInt(document.getElementById("minWindY").value);
    flurryStorm.maxWindY = parseInt(document.getElementById("maxWindY").value);
});

document.getElementById("sizeButton").addEventListener("click", function(){
    flurryStorm.minFlakeSize = parseInt(document.getElementById("minSize").value);
    flurryStorm.maxFlakeAmount = parseInt(document.getElementById("maxSize").value);
});

document.getElementById("meltSpeedButton").addEventListener("click", function(){
    flurryStorm.meltSpeed = parseFloat(document.getElementById("meltSpeed").value);
});

document.getElementById("flakeStick").addEventListener("click", function(){
    if (flurryStorm.flakeStick == true) {
        flurryStorm.flakeStick = false;
    }else if (flurryStorm.flakeStick == false) {
        flurryStorm.flakeStick = true;
    }
});