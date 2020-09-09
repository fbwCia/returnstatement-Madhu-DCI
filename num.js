function minAndMaxInArray(array) {
  array.sort();
  let minOfArray = array[0];
  let maxOfArray = array[array.length - 1];
  console.log(`Minimum of Array ${minOfArray}, Maximum of Array ${maxOfArray}`);
}

minAndMaxInArray([8, 9, 5, 5]);
