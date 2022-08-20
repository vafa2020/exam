export default function opreations(string) {
  let result;
  let ops = string.split(" ");
  let Alphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z +";
  Alphabet = Alphabet.split(" ").join("");
  console.log(ops);
  let storage = [];
  ops.forEach((item) => {
    const notNumber = Alphabet.includes(item);
    if (!notNumber) {
      storage.push(item);
    } else if (item == "D" && storage.length > 1) {
      let last = storage.slice(-1);
      last = last * 2;
      last = last.toString();
      storage.push(last);
    } else if (item == "R" && storage.length > 1) {
      storage.pop();
    } else if (item == "+" && storage.length > 2) {
      let beforeLast = storage.slice(-2);
      let sum = +beforeLast[0] + +beforeLast[1];
      sum = sum.toString();
      storage.push(sum);
    }
  });
  // console.log(storage);
  result = storage.reduce((acc, cur) => {
    return Number(acc) + Number(cur);
  });
  return result;
}

opreations("-2 5 D + R");
