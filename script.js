function homeBT1() {
    alert("This is just a waste of time, that's why I said do not click!");
}

function homeBT2() {
    
        if(confirm("are you sure?")){
            alert("This is just a waste of time v2");
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