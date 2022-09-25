// 1、验证插入排序和快速排序算法，在数据量不同时的速度

function genRandomIntArr(size, range = [1, 100]) {
  const arr = []
  for(let i = 0; i < size; i++) {
    let midVar = range[0] + parseInt(Math.random() * range[1] - range[0])

    arr.push(midVar)
  }
  return arr
}

let start = new Date().getTime()
for(let i = 0; i < Math.pow(10, 4); i++) {
  insertSort(genRandomIntArr(500))
}
let end = new Date().getTime()
console.log(end - start)

let start2 = new Date().getTime()
for(let i = 0; i < Math.pow(10, 4); i++) {
  quickSort(genRandomIntArr(500))
}
let end2 = new Date().getTime()
console.log(end2 - start2)


function swap(arr, i, j) {
  let midVar = arr[i]
  arr[i] = arr[j]
  arr[j] = midVar
}

function insertSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    for(let j = i; j > 0; j--) {
      if(arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1)
      }
    }
  }
}

function quickSort(arr) {
  const partition = (arr, l, r) => {
    let index = l + parseInt(Math.random()*(r - l))
    let flagEle = arr[index]  
    swap(arr, index, r)
    let lp = l - 1, rp = r, i = l
    while(i < rp) {
      if(arr[i] < flagEle) {
        swap(arr, ++lp, i++)
      } else if(arr[i] === flagEle) {
        i++
      } else if(arr[i] > flagEle) {
        swap(arr, --rp, i)
      }
    } 
    swap(arr, i, r)
    return { lp, rp: rp + 1}
  }

  const fun = function(arr, l, r) {
    if(l >= r) {
      return
    }
    const res = partition(arr, l, r)

    fun(arr, l, res.lp) 
    fun(arr, res.rp, r)
  }

  fun(arr, 0, arr.length - 1)
}

 
 

