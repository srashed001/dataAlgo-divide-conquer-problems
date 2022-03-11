function findRotatedIndex(arr, target, low = 0, high = arr.length -1, mid = Math.floor((low+high)/2)) {

    if(arr[low] === target) return low
    if(arr[mid] === target) return mid
    if(arr[high] === target) return high 

    const pivot = findPivot(arr)
    console.log(pivot)

    if(arr[pivot] === target) return pivot

    if (pivot > 0 && target >= arr[0] && target <= arr[pivot - 1]) return binarySearch(arr, target, low, pivot -1)
    
    return binarySearch(arr, target, pivot, high )

}

function binarySearch(arr, target, low = 0, high = arr.length -1, mid = Math.floor((low+high)/2)){

    if (target < arr[low] || target > arr[high] || arr.length === 0 || low > high) return -1
    if (arr[mid] === target) return mid

    if (arr[mid] > target ) return binarySearch(arr, target, low, mid - 1)
    return binarySearch(arr, target, mid+1, high)


}

function findPivot(arr, low = 0, high = arr.length -1, mid = Math.floor((low+high)/2)){
    if (arr.length === 1 || arr[low] < arr[high]) return 0 
    if(arr[mid] > arr[mid + 1]) return mid + 1

    if(arr[low] > arr[mid]) return findPivot(arr, low, mid -1)
    return findPivot(arr, mid+1, high)

}


module.exports = findRotatedIndex