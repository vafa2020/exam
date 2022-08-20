export default function getRepeatedInfo(number) {
  let result;
  const String = number
    .toString()
    .split("")
    .map((item) => Number(item));
  let array = [];
  for (let i = 0; i < String.length; i++) {
    const element = String[i];

    for (let j = 0; j < element; j++) {
      array = [...array, element];
    }
  }

  result = array.reduce((acc, curr) => {
    if (curr in acc) {
      acc[curr] += curr.toString();
    } else {
      acc[curr] = curr.toString();
    }
    return acc;
  }, {});

  return result
}
