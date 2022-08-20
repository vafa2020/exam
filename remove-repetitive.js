export default function removeRepetitive(string) {
  let result = [...new Set(string)];
  result = result.join("");
  return result;
}


