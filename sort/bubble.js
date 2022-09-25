const swap = (nums, i, j) => {
    nums[i] = nums[i] + nums[j];
    nums[j] = nums[i] - nums[j];
    nums[i] = nums[i] - nums[j];
    // const tmp = nums[i];
    // nums[i] = nums[j];
    // nums[j] = tmp;
}

const arr = [5, 4, 3, 2, 1];

const bubbleSort = (nums) => {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j+1]) {
                swap(nums, j, j+1);
            }
        }
    }
}

bubbleSort(arr)

console.log('res:', arr)
