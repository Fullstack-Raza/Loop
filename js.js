// const container = document.querySelector("#container");
// for (let i = 1; i < 51; i++) {
//   console.log(i);
//   const numh1 = document.createElement("h1");
//   numh1.textContent = i ;
//   container.append(numh1);
// }

// fectore
// jesy 12 k fector hen 1 2 3 4 6 12
// pre
//  wo number hy bs 1 or itself me reminder 0 ata hy mode me %
// let n = Number(prompt("pri check kis ka kron?"));
// let pri = true;
// for (let i = 2; i <= Math.trunc(n / 2); i++) {
//   if (n % i === 0) {
//     pri = false;
//     break;
//   }
// }
// console.log(pri);

//  aik baar loop chlny ko آیٹریشن  kehty hen

// while  ka mtlb hy jb tk

// let ans = prompt("repeat until exit");
// while (ans !== "exit") {
//   ans = prompt("repeat until exit");
// }

//  strong Number kia hy ?
//  aisa number hy jis k hr digit ka fectoria nikal kr plus kren gy tu wo number asl number k brabr ho jay
//  jesy 123 =  1!+2!+3!=
// 1+2+6=9 tu 123  strong nai hy

// 145  ea aik trong number hy
//  5*4*3*2*1= 120
//  4*3*2*1= 24 +1  120 + 25=145

// do {
//   var asn = prompt("0 = no");
//   console.log("hello");

// } while (asn !== "0");

// var num = +prompt("Number do 0 k ilawa");
// while(num !==0 ){
//   let num = +prompt("Number do 0 k ilawa");
//   console.log(num)
// }
// var num = +prompt("Number do 0 k ilawa");
// while(num !==0 ){
//   let num = +prompt("Number do 0 k ilawa");
//   console.log(num)
// }
// var num = +prompt("Number do 0 k ilawa");
// while(num !==0 ){
//   let num = +prompt("Number do 0 k ilawa");
//   console.log(num)
// }

function oneton(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
oneton(20);

function ntoone(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}
ntoone(20);

function sumUpToN(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

sumUpToN(5);

function factorial(n) {
  let fector = 1;
  for (let i = 1; i <= n; i++) {
    fector = i * fector;
  }
  return fector;
}

console.log(factorial(5));

function printFactors(n) {
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      process.stdout.write(`${Number(i)} `);
    }
  }
}

printFactors(20);

function sumEvenOddInRange(start, end) {
  if (start > end) {
    [start, end] = [end, start];
  }
  let sumodd = 0;
  let sumeven = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      sumeven += i;
    } else {
      sumodd += i;
    }
  }
  return [sumeven, sumodd];
}

console.log(sumEvenOddInRange(1, 5));

function calculateTriangleArea(a, b, c) {
  let s = (a + b + c) / 2;
  console.log(Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2));
}

calculateTriangleArea(3, 4, 5);

function calculateCircleProperties(r) {
  let circumference = (2 * Math.PI * r).toFixed(2);
  let area = (Math.PI * (r * r)).toFixed(2);

  return [circumference, area];
}

calculateCircleProperties(10.8);

function calculateCompoundInterest(P, r, t, n) {

let TotalAmount = P* ((1 + r/n) ** (n * t));
let Interest = TotalAmount-P
return Interest.toFixed(2)
}

calculateCompoundInterest(1000, 0.5, 10, 4);
