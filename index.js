if(document.getElementById("ButtonModal-anillo")) {
    var modal1 = document.getElementById("Modal-anillo");
    var Button1 = document.getElementById("ButtonModal-anillo");
    var span1 = document.getElementsByClassName("close-anillo")[0];
    var body = document.getElementsByTagName("body");

    Button1.onclick = function() {
        modal1.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span1.onclick = function() {
        modal1.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
}

if(document.getElementById("ButtonModal-Frodo")) {
    var modal2 = document.getElementById("Modal-Frodo");
    var Button2 = document.getElementById("ButtonModal-Frodo");
    var span2 = document.getElementsByClassName("close-Frodo")[0];
    var body = document.getElementsByTagName("body");

    Button2.onclick = function() {
        modal2.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span2.onclick = function() {
        modal2.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
}

if(document.getElementById("ButtonModal-Gondor")) {
    var modal3 = document.getElementById("Modal-Gondor");
    var Button3 = document.getElementById("ButtonModal-Gondor");
    var span3 = document.getElementsByClassName("close-Gondor")[0];
    var body = document.getElementsByTagName("body");

    Button3.onclick = function() {
        modal3.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span3.onclick = function() {
        modal3.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
}