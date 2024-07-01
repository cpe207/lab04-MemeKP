function primeNumber(a) {
  if(a <= 1) return "NO";
  for (let i = 2; i <= a/2; i++) {
    if (a % i == 0) {
      return "NO";
    }  
}return "YES";
}

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;
// 660610772 ปณิตา ดอนเมือง