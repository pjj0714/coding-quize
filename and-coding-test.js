function getLines(num, line) {
  if (line === 1) return num;
  if (line === 2) return `1 ${num}`;

  let [loop, currentArr, nextArr] = [line - 2, [1, num], []];

  while (loop > 0) {
    let count = 1;
    for (let i = currentArr.length - 1; i >= 0; i -= 1) {
      if (currentArr[i] === currentArr[i - 1]) count += 1;
      if (currentArr[i] !== currentArr[i - 1]) {
        nextArr.unshift(count, currentArr[i]);
        count = 1;
      }
    }
    loop -= 1;
    currentArr = nextArr;
    nextArr = [];
  }

  const result = currentArr.join(' ');
  return result;
}

const a = getLines(50, 6);
console.log(a);
