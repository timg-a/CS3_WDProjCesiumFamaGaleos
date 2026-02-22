
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
document.addEventListener("DOMContentLoaded", function () {

    var loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            if (username && password) {
                alert("Welcome " + username + "!");
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                window.location.href = "index.html";
            } else {
                alert("Please fill in all fields.");
            }
        });
    }

    var quizForm = document.getElementById("quizForm");

    if (quizForm) {
        quizForm.addEventListener("submit", function (event) {

            event.preventDefault();

            var form = new FormData(this);

            if (form.get("q1") === "yes") {
                localStorage.setItem("playstyle", "Beginner");
                document.getElementById("result").innerText = "You are a Beginner.";
                return;
            }

            var scores = {
                Aggressor: 0,
                Controller: 0,
                AllRounder: 0,
                Defender: 0,
                BrickWall: 0
            };

            function addPoint(type, n) {
                scores[type] = scores[type] + n;
            }

            if (form.get("q2") === "agree") addPoint("Aggressor", 4);
            if (form.get("q2") === "neutral") addPoint("Controller", 4);
            if (form.get("q2") === "disagree") {
                addPoint("AllRounder", 2);
                addPoint("Defender", 3);
                addPoint("BrickWall", 1);
            }

            if (form.get("q3") === "agree") addPoint("Aggressor", 4);
            if (form.get("q3") === "neutral") {
                addPoint("AllRounder", 3);
                addPoint("Controller", 3);
                addPoint("BrickWall", 1);
            }
            if (form.get("q3") === "disagree") addPoint("Defender", 4);

            if (form.get("q4") === "agree") {
                addPoint("Controller", 4);
                addPoint("AllRounder", 4);
                addPoint("BrickWall", 3);
                addPoint("Defender", 4);
            }
            if (form.get("q4") === "disagree") addPoint("Aggressor", 4);

            if (form.get("q5") === "agree") {
                addPoint("BrickWall", 3);
                addPoint("Defender", 4);
                addPoint("AllRounder", 2);
            }
            if (form.get("q5") === "neutral") {
                addPoint("Controller", 4);
            }
            if (form.get("q5") === "disagree") addPoint("Aggressor", 4);

            if (form.get("q6") === "agree") {
                addPoint("Controller", 3);
                addPoint("Defender", 4);
            }
            if (form.get("q6") === "neutral") {
                addPoint("BrickWall", 4);
                addPoint("AllRounder", 3);
            }
            if (form.get("q6") === "disagree") addPoint("Aggressor", 4);

            var highest = 0;
            var winner = "";

            for (var type in scores) {
                if (scores[type] > highest) {
                    highest = scores[type];
                    winner = type;
                }
            }

            localStorage.setItem("playstyle", winner);

            document.getElementById("result").innerText =
                "Your Playstyle: " + winner;
        });
    }

});

function checkData() {
    if (!localStorage.getItem("username")) {
        alert("Please log in to access the Equipment page.");
        return false;
    }
}