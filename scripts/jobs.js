"use strict"

function jobs() {
    var buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", storeRefNumber);
    }
}

function storeRefNumber(e) {
    if (e.target.id == "ui-developer") {
        var refNumber = "12345";
    } else if (e.target.id == "cyber-security") {
        var refNumber = "55555";
    }
    localStorage.setItem("refNumber", refNumber);
    window.location.href = "apply.html";
}

window.addEventListener("load", jobs);