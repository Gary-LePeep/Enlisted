recalibrateSize();
window.addEventListener('resize', recalibrateSize);

function recalibrateSize() {
    document.getElementsByTagName('BODY')[0].style.transform = "scale(" + window.innerWidth / 1920 + "," + window.innerWidth / 1920 + ")";
    document.getElementsByTagName('BODY')[0].style.transformOrigin = "0 0";
}

function initCSS() {
    // Create new css link Element
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.type = 'text/css';
    css.href = '../style.css';
    document.getElementsByTagName('HEAD')[0].appendChild(css);
}

function titleBar(active) {
    var topnav = document.createElement("div");
    topnav.className = "topnav";
    topnav.style = "position: absolute; top: 0px; left: 0px; width: 1700px; height: 53px";
    document.getElementsByTagName('BODY')[0].appendChild(topnav);
    var compareButton = document.createElement("button");
    if (active == "comparison") {
        compareButton.className = "active";
    }
    compareButton.textContent = translate("linkWeaponCompare");
    compareButton.onclick = function () { window.location = "https://gary-lepeep.github.io/Enlisted/comparison" };
    topnav.appendChild(compareButton);
    var datamineButton = document.createElement("button");
    if (active == "datamine") {
        datamineButton.className = "active";
    }
    datamineButton.textContent = translate("linkDatamine");
    datamineButton.onclick = function () { window.location = "https://gary-lepeep.github.io/Enlisted/datamine" };
    topnav.appendChild(datamineButton);
    var updateButton = document.createElement("button");
    if (active == "updates") {
        updateButton.className = "active";
    }
    updateButton.textContent = translate("linkUpdate");
    updateButton.onclick = function () { window.location = "https://gary-lepeep.github.io/Enlisted/updates" };
    topnav.appendChild(updateButton);
    // warning if update was recent
    if (wasRecent(parseInt(document.cookie))) {
        updateButton.className = "blink-bg";
        updateButton.textContent += "⚠️";
    }
    var statsButton = document.createElement("button");
    if (active == "statistics") {
        statsButton.className = "active";
    }
    statsButton.textContent = translate("linkStats");
    statsButton.onclick = function () { window.location = "https://gary-lepeep.github.io/Enlisted/soldier_stats" };
    topnav.appendChild(statsButton);

    topnav.appendChild(translate("language", "b", "position:absolute; top:20px; left:1700px; font-size:16px; text-align:center; color: white"));
    var title = translate(active, "div");
    title.className = "TITLE";
    document.getElementsByTagName('BODY')[0].appendChild(title);
}