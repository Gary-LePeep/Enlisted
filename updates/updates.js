const UPDATES = {
  1651955031871: 'This is the first entry. There are no recent weapons updates.',
  1652293836395: [
    'Added gun pps_42_red, which is a reskin of the pps_42 with no extra stats',
    'Smoke grenades start after 2s instead of 3, and fade 6x slower',
    'Grenade launchers reload and put on/take off 0.5-1s slower across the board',
    'Grenade launcher grenade damage reduced from 50 to 20',
  ],
  1654212960010: [
    'MG buildings, engineer hammer, radio, are now country-specific',
    'shovels added as weapons',
    'added impact grenades and vpgs & srcm stalingrad rifle grenades',
    'added weapons: m6a3 bazooka',
    'added tanks: aec mk 2, bm 8, dickermax, is-2, m4 sherman calliope, panzerwerfer-42, stug III, su-76',
    'tanks have country-specific sights',
    '1000lb anm 65a bomb damage increased from 440 to 500',
    'AT rifles have armor penetration go from hardcoded to demarre calculation',
  ],
};

function numToDate(num) {
  return new Date(parseInt(num)).toLocaleDateString();
}

function wasRecent(num) {
  return num < Object.keys(UPDATES)[Object.keys(UPDATES).length - 1];
}
