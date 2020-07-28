// Write a function that takes in two already sorted arrays (lists) and outputs a new, merged array that is sorted

let arr1 =  [3, 8, 9, 10]
let arr2 =  [0, 4, 9, 17, 79]

function sortArrays(arr1, arr2){
  
  let arr1_i = 0
  let arr2_i = 0
  let sorted = []
  
  // compare the two pointers and only increment if it gets shoveled
  while(arr1_i !== arr1.length && arr2_i !== arr2.length){
    if(arr1[arr1_i] < arr2[arr2_i]){
      sorted.push(arr1[arr1_i])
      arr1_i++
    } else {
      sorted.push(arr2[arr2_i])
      arr2_i++
    }
  }

// slice the rest of arr1 into sorted
let rest_of_arr1 = arr1.slice(arr1_i, arr1.length)
sorted.push(...rest_of_arr1)
// slice the rest of arr2 into sorted
let rest_of_arr2 = arr2.slice(arr2_i, arr2.length)
sorted.push(...rest_of_arr2)
console.log(sorted)
return sorted
}

sortArrays(arr1, arr2)

