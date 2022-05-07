var UPDATES = {
    1651955031871: "This is the first entry. There are no recent weapons updates."
}

function numToDate(num) {
    return new Date(parseInt(num)).toLocaleDateString()
}

function wasRecent(num) {
    return num + 604800000 > Date.now();
}