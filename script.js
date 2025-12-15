let oldPosition = window.pageYOffset;

window.onscroll = topUp() {
    let currentPosition = window.pageYOffset;

    if (oldPosition > currentPosition) {
        document.getElementsByTagName("nav").style.top = "0";
    } else {
        document.getElementsByTagName("nav").style.top = "-67px";
    }

    oldPosition = currentPosition;
}