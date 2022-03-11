function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
  let middleVal = arr[middleIdx];


  if (arr[rightIdx] === 0 &&  middleVal === 0 &&  arr[leftIdx]=== 0) return arr.length;
  if (arr[rightIdx] === 1 &&  middleVal === 1 &&  arr[leftIdx]=== 1) return 0;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    let leftMiddleVal = arr[middleIdx - 1];
    let rightMiddleVal = arr[middleIdx + 1];


    console.log(leftMiddleVal, middleVal, rightMiddleVal);

    if (middleVal === 1) {
      console.log(rightMiddleVal);
      if (rightMiddleVal === 0) {return (arr.length - 1) - middleIdx}
      else {leftIdx = middleIdx + 1};
    } else {console.log(leftMiddleVal)
      if (leftMiddleVal === 1) {return arr.length - middleIdx}
      
    else {rightIdx = middleIdx - 1};
    }
  }
  return 0;
}

module.exports = countZeroes;
