function solution(inputString) {
    const regex = /^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;
    return regex.test(inputString);
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test isIPv4Address

// alternative solution
// function solution(s) {
//     let r = s.split('.');
//     return r.length === 4 && r.every((x) => x != '' && !isNaN(x) && x >= 0 && x < 256);
// }
