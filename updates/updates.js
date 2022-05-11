var UPDATES = {
    1651955031871: "This is the first entry. There are no recent weapons updates.",
    1652293836395: [
        "Added gun pps_42_red, which is a reskin of the pps_42 with no extra stats",
        "Smoke grenades start after 2s instead of 3, and fade 6x slower",
        "Grenade launchers reload and put on/take off 0.5-1s slower across the board",
        "Grenade launcher grenade damage reduced from 50 to 20"
    ],
}

function numToDate(num) {
    return new Date(parseInt(num)).toLocaleDateString()
}

function wasRecent(num) {
    return num < Object.keys(UPDATES)[Object.keys(UPDATES).length - 1];
}