function findFloor(arr, target, low = 0, high = arr.length -1, mid=Math.floor((low+high)/2)) {

    if(arr[low] > target || low > high) return -1
    if(arr[high] < target) return arr[high]
    if(arr[mid] === target) return arr[mid]
    
    if((arr[mid+1] > target || !arr[mid+1]) && arr[mid] <= target) return arr[mid]

    if (arr[mid] > target ) return findFloor(arr, target, low, mid-1)
    return findFloor(arr, target, mid +1, high )

  
}

module.exports = findFloor