const BODY = document.getElementsByTagName('BODY')[0];

function recalibrateSize() {
  BODY.style.transform = `scale(${window.innerWidth / 1920},${window.innerWidth / 1920})`;
  BODY.style.transformOrigin = '0 0';
}

recalibrateSize();
window.addEventListener('resize', recalibrateSize);

function initCSS() {
  // Create new css link Element
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.type = 'text/css';
  css.href = '../style.css';
  document.getElementsByTagName('HEAD')[0].appendChild(css);
}

function titleBar(active) {
  const topnav = document.createElement('div');
  topnav.className = 'topnav';
  topnav.style = 'position: absolute; top: 0px; left: 0px; width: 1700px; height: 53px';
  BODY.appendChild(topnav);
  const compareButton = document.createElement('button');
  if (active === 'comparison') {
    compareButton.className = 'active';
  }
  compareButton.textContent = translate('linkWeaponCompare');
  compareButton.onclick = () => { window.location = 'https://gary-lepeep.github.io/Enlisted/comparison'; };
  topnav.appendChild(compareButton);
  const datamineButton = document.createElement('button');
  if (active === 'datamine') {
    datamineButton.className = 'active';
  }
  datamineButton.textContent = translate('linkDatamine');
  datamineButton.onclick = () => { window.location = 'https://gary-lepeep.github.io/Enlisted/datamine'; };
  topnav.appendChild(datamineButton);
  const updateButton = document.createElement('button');
  if (active === 'updates') {
    updateButton.className = 'active';
  }
  updateButton.textContent = translate('linkUpdate');
  updateButton.onclick = () => { window.location = 'https://gary-lepeep.github.io/Enlisted/updates'; };
  topnav.appendChild(updateButton);
  // warning if update was recent
  if (wasRecent(parseInt(document.cookie))) {
    updateButton.className = 'blink-bg';
    updateButton.textContent += '⚠️';
  }
  const statsButton = document.createElement('button');
  if (active === 'statistics') {
    statsButton.className = 'active';
  }
  statsButton.textContent = translate('linkStats');
  statsButton.onclick = () => { window.location = 'https://gary-lepeep.github.io/Enlisted/soldier_stats'; };
  topnav.appendChild(statsButton);

  topnav.appendChild(translate(''
  + 'language', 'b', 'position:absolute; top:20px; left:1700px;font-size:16px; text-align:center; color: white'));
  const title = translate(active, 'div');
  title.className = 'TITLE';
  BODY.appendChild(title);
}
