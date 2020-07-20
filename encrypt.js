function encrypt(text, n) {
  let textArr = text.split("");
  let even = [];
  let odd = [];
  let encrypted = textArr;
  let number = 1;
  while (number <= n) {
    for (let i = 0; i < textArr.length; i++) {
      if (i % 2 === 0) {
        even.push(textArr[i]);
      } else {
        odd.push(textArr[i]);
      }
    }
    encrypted = [...odd, ...even];
    number++;
    textArr = encrypted;
    even = [];
    odd = [];
  }

  return encrypted.join("");
}

console.log(encrypt("This is a test!", 1));
