const UPDATES = {
  1651955031871: 'This is the first entry. There are no recent weapons updates.',
  1652293836395: [
    'Added gun pps_42_red, which is a reskin of the pps_42 with no extra stats',
    'Smoke grenades start after 2s instead of 3, and fade 6x slower',
    'Grenade launchers reload and put on/take off 0.5-1s slower across the board',
    'Grenade launcher grenade damage reduced from 50 to 20',
  ],
  1654212960010: [
    'https://enlisted.net/en/news/show/326-meet-the-burning-sky-update-en/#!/',
    'Hidden changes:',
    'MG buildings, engineer hammer, radio, are now country-specific',
    '1000lb anm 65a bomb damage increased from 440 to 500',
    'AT rifles have armor penetration go from hardcoded to demarre calculation',
  ],
  1654744227223: [
    'https://enlisted.net/en/news/show/332-update-0-3-1-73-0-3-1-72-xbox-0-3-1-53-playstation-en/#!/',
    'Hidden changes:',
    'mkb 42 (h) dispersion increased from 0.15 to 0.75',
    'Explosive pack shatter fragments removed, replaced with concussion',
    'Explosive pack now has 60 damage at up to 10m',
  ],
};

function numToDate(num) {
  return new Date(parseInt(num)).toLocaleDateString();
}

function wasRecent(num) {
  return num < Object.keys(UPDATES)[Object.keys(UPDATES).length - 1];
}
