

const swap = (nums, i, j) => {
  // nums[i] = nums[i] + nums[j];
  // nums[j] = nums[i] - nums[j];
  // nums[i] = nums[i] - nums[j];

  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}


class MaxRootHeap {
  _nums = [];

  constructor(nums) {
    for (let i = 1; i < nums.length; i++) {
      let j = i;
      while (j > 0) {
        const parentIndex = Math.ceil(j / 2) - 1;
        if (nums[j] > nums[parentIndex]) {
          swap(nums, j, parentIndex);
          j = parentIndex;
        } else {
          break;
        }
      }
    }

    this._nums = nums;
  }

  getMaxRoot() {
    return this._nums[0];
  }

  removeMatRoot() {
    swap(this._nums, 0, this._nums.length - 1);

    let i = 0;
    
  }

  addNewRoot(root) {

  }
}


const toMaxRootHeap = (nums) => {

  for (let i = 1; i < nums.length; i++) {
    let j = i;
    while (j > 0) {
      const parentIndex = Math.ceil(j / 2) - 1;
      if (nums[j] > nums[parentIndex]) {
        swap(nums, j, parentIndex);
        j = parentIndex;
      } else {
        break;
      }
    }
  }
}

const removeMatRoot = (nums, l, r) => {
  swap(nums, l, r);
  let i = l
  while (i * 2 + 1 < r) {
    let maxIndex = i;
    maxIndex = nums[maxIndex] < (nums[i * 2 + 1] || -Infinity) ? i * 2 + 1 : maxIndex;

    if (i * 2 + 2 < r) {
      maxIndex = nums[maxIndex] < (nums[i * 2 + 2] || -Infinity) ? i * 2 + 2 : maxIndex;
    }

    if (maxIndex === i) {
      break;
    } else {
      swap(nums, i, maxIndex);
      i = maxIndex;
    }
  }
}
 
const arr = [6, 2, 4, 1, 5, 7, 3]
toMaxRootHeap(arr);

// for (let i = 0; i < arr.length; i++) {
  // removeMatRoot(arr, 0, i);
// }

for (let i = arr.length - 1; i > 0; i--) {
  removeMatRoot(arr, 0, i);
}

console.log('liu arr:', arr);


