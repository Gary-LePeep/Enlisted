const UPDATES = {
  1652293836395: {
    link: 'https://enlisted.net/en/news/show/310-making-enlisted-a-better-place-13-en/#!/',
    text: [
      'Hidden changes:',
      'Added gun pps_42_red, which is a reskin of the pps_42 with no extra stats',
      'Smoke grenades start after 2s instead of 3, and fade 6x slower',
      'Grenade launchers reload and put on/take off 0.5-1s slower across the board',
      'Grenade launcher grenade damage reduced from 50 to 20',
    ],
  },
  1654212960010: {
    link: 'https://enlisted.net/en/news/show/326-meet-the-burning-sky-update-en/#!/',
    text: [
      'Hidden changes:',
      'MG buildings, engineer hammer, radio, are now country-specific',
      '1000lb anm 65a bomb damage increased from 440 to 500',
      'AT rifles have armor penetration go from hardcoded to demarre calculation',
    ],
  },
  1654744227223: {
    link: 'https://enlisted.net/en/news/show/332-update-0-3-1-73-0-3-1-72-xbox-0-3-1-53-playstation-en/#!/',
    text: [
      'Hidden changes:',
      'mkb 42 (h) dispersion increased from 0.15 to 0.75',
      'Explosive pack shatter fragments removed, replaced with concussion',
      'Explosive pack now has 60 damage at up to 10m',
    ],
  },
  1656122255233: {
    link: 'https://enlisted.net/en/news/show/339-new-battle-pass-season-even-more-rewards-en/#!/',
    text: [
      'Hidden changes:',
      'Luger 9x19 parabellum rounds have damage reduction from 5.9 to 5.7',
    ],
  },
};

function numToDate(num) {
  return new Date(parseInt(num)).toLocaleDateString();
}

function wasRecent(num) {
  return num < Object.keys(UPDATES)[Object.keys(UPDATES).length - 1];
}
