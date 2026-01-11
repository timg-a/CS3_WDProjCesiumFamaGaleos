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