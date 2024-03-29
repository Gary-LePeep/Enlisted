const BODY = document.getElementsByTagName('BODY')[0];
const FULLWIDE = 1880;

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

function getCookie(cname) {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let c = cookieArray[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function setCookie(cname, cvalue, expiresDays = -1) {
  document.cookie = `${cname}=${cvalue};secure;path=/Enlisted/;domain=gary-lepeep.github.io`;
  if (expiresDays !== -1) {
    const d = new Date();
    d.setTime(d.getTime() + (expiresDays * 24 * 60 * 60 * 1000));
    const expires = `;expires=${d.toUTCString()}`;
    document.cookie += expires;
  }
}

function titleBar(active) {
  // add top color bar
  const feldgrau = document.createElement('img');
  feldgrau.src = '../resources/feldgrau.png';
  feldgrau.style = 'position: relative; top: 0px; left: 0px; width: 1880px; height: 53px';
  BODY.append(feldgrau);

  // declare language dropdown
  const languageDropdown = document.createElement('select');

  // create the function for when the language is changed
  function changeLanguage() {
    setCookie('language', languageDropdown.value);
    window.location.reload();
  }

  // add attributes, such as languages supported
  const englishOption = document.createElement('option');
  englishOption.textContent = 'English';
  if (getCookie('language') === 'English') {
    englishOption.selected = 'selected';
  }
  const russionOption = document.createElement('option');
  russionOption.textContent = 'Русский';
  if (getCookie('language') === 'Русский') {
    russionOption.selected = 'selected';
  }
  languageDropdown.append(englishOption);
  languageDropdown.append(russionOption);
  languageDropdown.id = 'language_dropdown';
  languageDropdown.style = 'position:absolute; top:20px; left:1780px;';
  languageDropdown.onchange = () => { changeLanguage(); };
  BODY.appendChild(languageDropdown);

  // add the language label and title bar's title
  BODY.appendChild(translate(''
    + 'language', 'b', 'position:absolute; top:20px; left:1700px;font-size:16px; text-align:center; color: white'));

  const title = translate(active, 'div');
  title.className = 'TITLE';
  BODY.appendChild(title);

  // add the title bar's navigation buttons, highlighting the active one
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
  if (wasRecent(parseInt(getCookie('updatesLastSeen')))) {
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
  const tanksButton = document.createElement('button');
  if (active === 'tanks') {
    tanksButton.className = 'active';
  }
  tanksButton.textContent = translate('linkTanks');
  tanksButton.onclick = () => { window.location = 'https://gary-lepeep.github.io/Enlisted/tanks'; };
  topnav.appendChild(tanksButton);
}

function toPlace(number, place) {
  const ret = Math.round(number * (10 ** place));
  return (ret / (10 ** place));
}

function getProperty(file, property) {
  if (Array.isArray(file)) {
    for (let i = 0; i < file.length; i++) {
      if (Object.keys(file[i])[0] === property) {
        return file[i][property];
      }
    }
  } else {
    return file[property];
  }
  return null;
}
