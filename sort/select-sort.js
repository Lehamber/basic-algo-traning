
const swap = (nums, i, j) => {
    nums[i] = nums[i] + nums[j];
    nums[j] = nums[i] - nums[j];
    nums[i] = nums[i] - nums[j];
    // const tmp = nums[i];
    // nums[i] = nums[j];
    // nums[j] = tmp;
}

const selectSort = (nums) => {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                swap(nums, i, j);
            }
        }
    }
}

const arr = [2, 5, 1, 4, 3];

selectSort(arr);

console.log('liu1 arr:', arr);