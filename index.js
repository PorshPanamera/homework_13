let str1 = prompt("Ведите пожалуйста первый рядок:");
let str2 = prompt("Ведите пожалуйста второй рядок:");
let str3 = prompt("Ведите пожалуйста третий рядок:");
let result = str1 + " " + str2 + " " + str3;
alert(result);

function splitNumber() {
  let number = prompt("Введите пожалуйста пятизначное число:");
  if (number.length === 5 && !isNaN(number)) {
    let result1 =
      number[0] +
      " " +
      number[1] +
      " " +
      number[2] +
      " " +
      number[3] +
      " " +
      number[4];
    alert(result1);
  } else {
    alert("Пожалуйста введите пятизначное число :)");
  }
}
splitNumber();
