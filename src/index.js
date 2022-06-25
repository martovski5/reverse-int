module.exports = function reverse (n) {
 const num = n;
 const numToString = String(num);
 let rev = numToString.split('').reverse().join('');
 let strToNum = Number(rev);
}
}
