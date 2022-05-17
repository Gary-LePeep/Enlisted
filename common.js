recalibrateSize();
window.addEventListener('resize', recalibrateSize);

function recalibrateSize() {
    document.getElementsByTagName('BODY')[0].style.transform = "scale(" + window.innerWidth / 1920 + "," + window.innerHeight / 927 + ")";
    document.getElementsByTagName('BODY')[0].style.transformOrigin = "0 0";
}