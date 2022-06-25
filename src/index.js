module.exports = function reverse (n) {
//  const num = n;
//  if ( Math.sign(num) == -1 ) {
//     return -num;
//  } 
//  const numToString = String(num);
//  let rev = numToString.split('').reverse().join('');
//  let strToNum = Number(rev);
//  return strToNum;
const num = n;
      const numToString = String(num);
      let rev = numToString.split('');
      console.log(rev);
      if (rev.includes('-')) {
        rev.shift();
      }
      console.log(rev);
      let rev2 = rev.reverse().join('');
      console.log(typeof rev2);
      let strToNum = Number(rev2);
      return strToNum;
      
};

