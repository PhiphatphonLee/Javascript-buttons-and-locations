function homeBT1() {
    alert("Nothing");
}

function homeBT2() {
    
        if(confirm("are you sure?")){
            alert("Nothing v2");
        }
}

function homeBT3() {
    let something = prompt("Put something in here", "something");
    if(something == null || something == ""){
        null;
    } else {
        alert("I eat " + something + " for breakfast.")
    }
}   

function aboutMeBT1(color) {
    document.body.style.background = color;
}
function aboutMeBT2(color) {
    document.body.style.background = color;
}
function aboutMeBT3(color) {
    document.body.style.background = color;
}

function locationBT1() {
    setTimeout(function location1() {
        var text = "Hi"
        document.querySelector("#aboutMetxt").innerHTML = text;
    }, 3000);
}

function locationBT2() {
    setTimeout(function location2() {
        var text = "Hi Hi!"
        document.querySelector("#aboutMetxt2").innerHTML = text;
    }, 4000);
}

function locationBT3() {
    setTimeout(function location3() {
        var text = "Hi Hi Hi!"
        document.querySelector("#aboutMetxt3").innerHTML = text;
    }, 5000);
}

function orderBT1() {
     mytime = setInterval(myTimer, 1000);

    function myTimer() {
        const d = new Date();
        document.getElementById("aboutMetxt").innerHTML = d.toLocaleTimeString();
    }
}

function orderBT2() {
    clearInterval(mytime);
}

function orderBT3() {
    setTimeout(displayMessage, 6000);
    setInterval(displayMessage, 6500);
   
   
     var timeleft = 11;
       var downloadTimer = setInterval(function(){
       timeleft--;
       document.getElementById("aboutMetxt3").textContent = timeleft;
       if(timeleft <= 0)
           clearInterval(downloadTimer);
       },1000);

       function displayMessage() {
        var wordCount = 0;
      // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
      var msgInterval = setInterval(function() {
        if (words[wordCount] === undefined) {
          clearInterval(msgInterval);
        } else {
          mainEl.textContent = words[wordCount];
          wordCount++;
        }
      }, 500);
    }
    
}
