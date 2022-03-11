// function findRotationCount(arr) {

//     let leftIdx = 0 
//     let rightIdx = arr.length - 1
//     let middleIdx = Math.floor((leftIdx + rightIdx)/2)

//     if(arr[leftIdx] < arr[middleIdx] && arr[rightIdx] > arr[middleIdx]) return 0

//     while (leftIdx <= rightIdx){

//         let middleIdx = Math.floor((leftIdx + rightIdx)/2)
//         let middleVal = arr[middleIdx]
//         let leftMiddleVal = arr[middleIdx-1]
//         let rightMiddleVal = arr[middleIdx + 1]

//         switch(true){
//             case middleVal > rightMiddleVal:
//                 return middleIdx + 1
//             case middleVal < leftMiddleVal:
//                 return middleIdx
//             case arr[rightIdx] > middleVal:
//                 rightIdx = middleIdx -1
//                 break;
//             case arr[leftIdx] > middleIdx:
//                 leftIdx = middleIdx + 1
//                 break
//             default:
//                 break
                
//         }
//     }
  
// }
function findRotationCount(arr, low = 0, high = arr.length -1, mid = Math.floor((low+high)/2)) {

    console.log(low, mid, high)
    if(arr[low] < arr[mid] && arr[high] > arr[mid]) return 0

    switch(true){
        case arr[mid] > arr[mid+1]:
            return mid + 1
        case arr[mid] < arr[mid-1]:
            return mid
        case arr[high] > arr[mid]:
            return findRotationCount(arr, low, mid -1)
        default:
            return findRotationCount(arr, mid + 1, high)

        }
  
}

module.exports = findRotationCount