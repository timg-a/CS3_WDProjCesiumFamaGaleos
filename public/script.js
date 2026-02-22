
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

            var form = new FormData(this);

            var scores = {
                Beginner: 0,
                Aggressor: 0,
                Controller: 0,
                AllRounder: 0,
                Defender: 0,
                BrickWall: 0
            };

            function addPoint(type, n) {
                scores[type] = scores[type] + n;
            }

            if (form.get("q1") === "yes") {
                addPoint("Beginner", 9999);
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
            return;
        });
    }

});

function checkData() {
    if (!localStorage.getItem("username")) {
        event.preventDefault();
        alert("Please log in to access this page.");
        window.location.href = "login.html";
    } else if (!localStorage.getItem("playstyle")) {
        event.preventDefault();
        if (confirm("A quiz must be taken to access this page. Would you like to take the quiz now?")) {
            window.location.href = "quiz.html";
        } else {
            event.preventDefault();
        }
    }
}

const aggressor = document.getElementById("aggressor");
const controller = document.getElementById("controller");
const allRounder = document.getElementById("all-rounder");
const brickWall = document.getElementById("brick-wall");
const defender = document.getElementById("defender");

function playstyleDiv() {
    aggressor.style.display = "none";
    controller.style.display = "none";
    allRounder.style.display = "none";
    brickWall.style.display = "none";
    defender.style.display = "none";

    let playstyle = localStorage.getItem("playstyle");

    if (playstyle === "Aggressor") {
        aggressor.style.display = "block";
    }
    if (playstyle === "Controller") {
        controller.style.display = "block";
    }
    if (playstyle === "AllRounder") {
        allRounder.style.display = "block";
    }
    if (playstyle === "BrickWall") {
        brickWall.style.display = "block";
    }
    if (playstyle === "Defender") {
        defender.style.display = "block";
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    playstyleDiv();
});