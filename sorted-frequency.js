function sortedFrequency(
  arr,
  target,
  low = 0,
  high = arr.length -1,
  mid = Math.floor((low + high) / 2)
) {

    console.log(low, mid, high)


  if (arr[high] < target || arr[low] > target) return -1;

  if (arr[mid] === target) {

    const lower =
      arr[mid - 1] !== target ? mid : findBound(arr, target, low, mid - 1);
    const upper =
      arr[mid + 1] !== target ? mid  : findBound(arr, target, mid + 1, high, false);

      console.log(lower, upper)

    return upper - lower + 1;
  }

  if (arr[mid] > target) {
    return sortedFrequency(arr, target, low, mid - 1);
  }
  return sortedFrequency(arr, target, mid + 1, high);
}

function findBound(
  arr,
  target,
  low = 0,
  high = arr.length - 1,
  isLowerBound = true,
  mid = Math.floor((high + low) / 2),
) {
  if (arr[low] === arr[high]){
      if (isLowerBound) return low;
      return high 
  } 

  if (high >= low) {
    if (
      (mid == 0 || arr[mid - 1] !== target || arr[mid + 1] !== target) &&
      arr[mid] === target
    ) {
      return mid;
    } else if (arr[mid] < target) {
      return findBound(arr, target, mid + 1, high);
    }
    return findBound(arr, target, low, mid - 1);
  }

}

module.exports = sortedFrequency;
