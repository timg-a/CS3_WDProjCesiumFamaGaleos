let oldPosition = window.scrollY;

window.onscroll = topUp() {
    let currentPosition = window.scrollY;

    if (oldPosition > currentPosition) {
        document.getElementsByTagName("nav").style.top = "0";
    } else {
        document.getElementsByTagName("nav").style.top = "-67px";
    }

    oldPosition = currentPosition;
}