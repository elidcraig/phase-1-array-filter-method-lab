
function findMatching(list, checkName) {
    return list.filter(name => checkName.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(list, checkStart) {
    return list.filter(name => checkStart.toLowerCase() === name.slice(0,2).toLowerCase())
}

function matchName(drivers, checkName) {
    return drivers.filter(obj => obj['name'] === checkName)
}