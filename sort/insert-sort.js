
const swap = (nums, i, j) => {
    // nums[i] = nums[i] + nums[j];
    // nums[j] = nums[i] - nums[j];
    // nums[i] = nums[i] - nums[j];
    
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}

const insertSort = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j > 0; j--) {
            if (nums[j] < nums[j - 1]) {
                swap(nums, j, j - 1)
            }
        }
    }
}


const arr = [2, 5, 1, 4, 3];

insertSort(arr);

console.log('liu1 arr:', arr);