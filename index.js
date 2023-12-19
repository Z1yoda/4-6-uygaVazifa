// 1-masala 3 ta sondan kattasini topuvchi funksiya tuzing
console.log("1-masala");

function maxNumber(a, b, c) {
  return Math.max(a, b, c);
}

let result = maxNumber(7, 1, 4);
console.log("3 ta son ichida kattasi:", result);

// 2-masala Raqamlar bilan berilgan ikki xonali sonni so'zlar bilan belgilab beruvchi funksiya yozing (swith..case)
console.log("2-masala");

function sondanHarfga(son) {
  let unlar = Math.trunc(son / 10);
  let birlar = son % 10;
  let harfBilan = " ";

  switch (unlar) {
    case 1:
      harfBilan = "o'n";
      break;
    case 2:
      harfBilan += "yigirma";
      break;
    case 3:
      harfBilan += "o'ttiz";
      break;
    case 4:
      harfBilan += "qirq";
      break;
    case 5:
      harfBilan += "ellik";
      break;
    case 6:
      harfBilan += "oltmish";
      break;
    case 7:
      harfBilan += "yetmish";
      break;
    case 8:
      harfBilan += "sakson";
      break;
    case 9:
      harfBilan += "to'qson";
      break;
    default:
      "son 2 xonali emas";
  }

  if (birlar > 0) {
    harfBilan += " " + birlardanHarflarga(birlar);
  }
  return harfBilan;
}

function birlardanHarflarga(birlar) {
  switch (birlar) {
    case 1:
      return "bir";
    case 2:
      return "ikki";
    case 3:
      return "uch";
    case 4:
      return "to'rt";
    case 5:
      return "besh";
    case 6:
      return "olti";
    case 7:
      return "yetti";
    case 8:
      return "sakkiz";
    case 9:
      return "to'qqiz";
    default:
      "son 2 xonali emas";
  }
}
let son = 76;
harfBilan = sondanHarfga(son);
console.log("So'zlar bilan belgilangan son:", harfBilan);

// 3-masala 1 dan n gacha nechta toq son borligini aniqlovchi funksiya tuzing
console.log("3-masala");

let counter = 0;
let n = 16;

function toqSon(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      counter++;
    }
  }
  return counter;
}

console.log("Toq sonlar soni: " + toqSon(n));

// 4-masala ixtiyoriy sonni bo'luvchilar sonini topuvchi funksiya tuzing
console.log("4-masala");

let num = 8;
let bSoni = 0;

function boluvchilarSoni(num) {
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      bSoni++;
    }
  }
  return bSoni;
}

console.log("Bo'luvchilar soni: ", boluvchilarSoni(num));

// 5-masala son 3 ga va 5 ga karrali bo'lsa kvadrtatini aks holda kubini topuvchi funksiya tuzing
console.log("5-masala");

let number = 45;

function karralisi(number) {
  if (number % 3 == 0 && number % 5 == 0) {
    return number ** 2;
  } else {
    return number ** 3;
  }
}

console.log(karralisi(number));

// 6-masala 2 ta sondan raqamlar ko'paytmasi kattasini topuvchi funksiya tuzing
console.log("6-masala");

let num1 = 23;
let num2 = 34;
let num1Kopaytma = 1;
let num2Kopaytma = 1;

function raqamlariKopaytmasi1(num1) {
  let num1bir = Math.trunc(num1 / 10);
  let num1ikki = num1 % 10;
  return (num1Kopaytma = num1bir * num1ikki);
}

function raqamlariKopaytmasi2(num2) {
  let num2bir = Math.trunc(num2 / 10);
  let num2ikki = num2 % 10;
  return (num2Kopaytma = num2bir * num2ikki);
}

if (raqamlariKopaytmasi1(num1) > raqamlariKopaytmasi2(num2)) {
  console.log("Kattasi: ", num1);
} else {
  console.log("Kattasi: ", num2);
}

// 7-masala/4-m ixtiyoriy sonning tub yoki tub emasligini aniqlovchi funksiya tuzing
console.log("7-masala");

function tubYokiTubEmas() {
  //    4-masala...

  if (bSoni == 2) {
    console.log("Tub son");
  } else {
    console.log("Tub son emas");
  }
}
console.log(tubYokiTubEmas());
