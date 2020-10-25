const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let array = expr.match(/.{1,10}/g).map(function (item) {
    if (item == "**********") {
      return (item = " ");
    } else {
      let pair = item.match(/.{1,2}/g).map(function (item) {
        if (item == "10") {
          return (item = ".");
        } else if (item == "11") {
          return (item = "-");
        } else {
          return (item = "");
        }
      });
      return pair.join("");
    }
  });

  let string = "";
  array.forEach((i) => {
    if (MORSE_TABLE[i]) {
      string = string + MORSE_TABLE[i];
    } else {
      string = string + i;
    }
  });

  return string;
}

module.exports = {
  decode,
};
