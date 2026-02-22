let oldPosition = window.scrollY;

window.onscroll = function() {
    let currentPosition = window.scrollY;

    if (oldPosition > currentPosition) {
        document.getElementsByTagName("nav")[0].style.top = "0";
    } else {
        document.getElementsByTagName("nav")[0].style.top = "-67px";
    }

    oldPosition = currentPosition;
}

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        alert("Welcome " + username + "!");
        window.location.href = "index.html";
    } else {
        alert("Please fill in all fields.");
    }
});