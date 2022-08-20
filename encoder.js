export default function encoder(value, repeatCount) {
  let Alphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
  Alphabet = Alphabet.split(" ").join("").toLowerCase();
  Alphabet = [...Alphabet];
  let array = [...value];
  let result;
  for (let i = 0; i < repeatCount; i++) {
    let last = array.slice(-1);
    last = last.join();
    array.splice(0, 0, last);
    array.pop();
    const test = array.reduce((acc, cur) => {
      const index = Alphabet.indexOf(cur);

      return acc + Alphabet[index + 1];
    }, []);

    array = [...test];
    result = test;
  }
  console.log(result);
  return result;
}
encoder("acs", 2);
