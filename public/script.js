
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

            function addPoint(type) {
                scores[type] = scores[type] + 1;
            }

            if (form.get("q2") === "agree") addPoint("Aggressor");
            if (form.get("q2") === "neutral") addPoint("Controller");
            if (form.get("q2") === "disagree") {
                addPoint("AllRounder");
                addPoint("Defender");
                addPoint("BrickWall");
            }

            if (form.get("q3") === "agree") addPoint("Aggressor");
            if (form.get("q3") === "neutral") {
                addPoint("AllRounder");
                addPoint("Controller");
                addPoint("BrickWall");
            }
            if (form.get("q3") === "disagree") addPoint("Defender");

            if (form.get("q4") === "agree") {
                addPoint("Controller");
                addPoint("AllRounder");
                addPoint("BrickWall");
                addPoint("Defender");
            }
            if (form.get("q4") === "disagree") addPoint("Aggressor");

            if (form.get("q5") === "agree") {
                addPoint("BrickWall");
                addPoint("Defender");
            }
            if (form.get("q5") === "neutral") {
                addPoint("AllRounder");
                addPoint("Controller");
            }
            if (form.get("q5") === "disagree") addPoint("Aggressor");

            if (form.get("q6") === "agree") {
                addPoint("Controller");
                addPoint("Defender");
            }
            if (form.get("q6") === "neutral") {
                addPoint("BrickWall");
                addPoint("AllRounder");
            }
            if (form.get("q6") === "disagree") addPoint("Aggressor");

            var highest = 0;
            var winner = "";

            for (var type in scores) {
                if (scores[type] > highest) {
                    highest = scores[type];
                    winner = type;
                }
            }

            localStorage.setItem("playstyle", winner);
            localStorage.setItem("allScores", JSON.stringify(scores));

            document.getElementById("result").innerText =
                "Your Playstyle: " + winner;
        });
    }

});