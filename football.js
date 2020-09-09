function caluculatePoints(noOfWins, noOfdraws, noOfLosses) {
  let noOfPoints = noOfWins * 3 + noOfdraws * 1 + noOfLosses * 0;
  return noOfPoints;
}

console.log(`Points obtained so far:${caluculatePoints(5, 6, 3)}`);
