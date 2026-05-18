let random = Math.floor(Math.random() * 100) + 1;

function checknum() {
    let span=document.getElementById("span").value;

    let user = Number(document.getElementById("input").value);
    if(user==""){
        document.getElementById("span").innerHTML="Please Enter Your Number...";
        span1.innerHTML = "";

    }

    let span1 = document.getElementById("span1");

    if (user == random) {
        span1.innerHTML = "Correct Number!";
        document.getElementById("span").innerHTML="";

    }

    else if (user > random) {
        span1.innerHTML = "Too High! Try Again";
        document.getElementById("span").innerHTML="";

    }

    else { 
        span1.innerHTML = "Too Low! Try Again";
        document.getElementById("span").innerHTML="";

    }
}