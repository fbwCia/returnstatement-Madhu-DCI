function minAndMaxInArray(array) {
  array.sort();
  let minOfArray = array[0];
  let maxOfArray = array[array.length - 1];

  return { minOfArray, maxOfArray };
}

let minAndMax = minAndMaxInArray([3, 6, 8, 9]);

console.log(minAndMax);
