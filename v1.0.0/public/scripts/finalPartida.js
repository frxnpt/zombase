function finalPartida() {
    var menuMuerte = document.getElementById("menuMuerte");
    menuMuerte.style.display = "inherit";
    menuMuerte.style.zIndex = "999999999";

    menuMuerte.style.left = container.getBoundingClientRect().width / 2 -
        menuMuerte.getBoundingClientRect().width / 2 + "px";
    menuMuerte.style.top = container.getBoundingClientRect().height / 2 -
        menuMuerte.getBoundingClientRect().height / 2 + "px";
    pausa = true;
}