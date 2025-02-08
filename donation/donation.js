function calcAmount(donors) {
    donors = donors.join('').toLowerCase();
    let count = 0;
    for (let i = 0; i < donors.length; i++) {
        if (
        donors.charAt(i) === 'a' ||
        donors.charAt(i) === 'h' ||
        donors.charAt(i) === 'm' ||
        donors.charAt(i) === 'e' ||
        donors.charAt(i) === 't'
        ) {
        count++;
        }
    }
    return count * 1000;
}
