/**
 * 349. 两个数组的交集
 * 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
 *
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 *
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 * 解释：[4,9] 也是可通过的
 *
 * */
const intersection = (nums1, nums2) => {
    // 方法1：

    let arr = [];
    nums1.map(a => {
        nums2.map(b => {
            if(a === b) {
                arr.push(a);
            }
        })
    })
    return Array.from(new Set(arr));

    // 方法2：

    //     let arr = nums1.filter(v => nums2.indexOf(v) > -1);
    //     return Array.from(new Set(arr));

    // 方法3

    // let arr = [];
    // nums1.forEach(item => arr.includes(item) ? '' : nums2.includes(item) ? arr.push(item) : '');
    // return arr;
}
// console.log(intersection([1,2,2,1], [2, 2]))
// console.log(intersection([4,9,5], [9,4,9,8,4]))


/**
 * 350. 两个数组的交集 II
 *
 * 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，
 * 应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。
 *
 * 示例 1：
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2] / nums2 = [2]
 * 输出：[2,2]  /  [2]
 *
 * 示例 2:
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[4,9]
 * */
const intersect = (nums1, nums2) => {
    // 方法1：

    // let hashTable = {};
    // let target = [];
    // nums1.forEach(v => {
    //     if(hashTable[v]) hashTable[v]++;
    //     else hashTable[v] = 1;
    // })
    // console.log(hashTable, 'hashTable')
    // nums2.forEach(v => {
    //     if(hashTable[v] && hashTable[v] > 0) {
    //         hashTable[v]--;
    //         target.push(v);
    //     }
    // })
    // return target;

    // 方法2：

    const ans = [];
    for(let item of nums1) {
        const index = nums2.indexOf(item);
        if(index !== -1) {
            nums2[index] = false;
            ans.push(item);
            console.log(nums2, 'nums2')
        }
    }
    return ans;
}
// console.log(intersect([1,2,3,2,1, 100], [2, 2]))

/**
 * 118. 杨辉三角
 *
 * 给定一个非负整数 numRows，生成 杨辉三角 的前 numRows 行。
 * 在 杨辉三角 中，每个数是它左上方和右上方的数的和
 *
 * 示例1：
 * 输入: numRows = 5
 * 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 *
 * 示例2：
 * 输入: numRows = 1
 * 输出: [[1]]
 * */
const generate = (numRows) => {
    //  方法1；

    // let res = [[1]];
    // for(let i = 1; i < numRows; i++) {
    //     res[i] = [];
    //     res[i][0] = 1;
    //     res[i][i] = 1;
    //     for (let j = 1; j < i; j++) {
    //         res[i][j] = res[i-1][j-1] + res[i-1][j]
    //     }
    // }
    // return res;

    //  方法2：

    function getList(index) {
        if (index === 1) return [1];

        const prevList = getList(index - 1);
        let list = [];
        let i = -1;
        while (i++ < index - 1) {
            list.push((prevList[i - 1] || 0) + (prevList[i] || 0));
        }
        return list;
    }

    let list = [];
    let i = 0;
    while (i++ < numRows) {
        list.push(getList(i));
    }

    return list;
}
// console.log(generate(1))

/**
 * 119. 杨辉三角II
 *
 * 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 *
 * 示例1：
 * 输入: rowIndex = 3
 * 输出: [1,3,3,1]
 *
 * 示例2：
 * 输入: numRows = 1
 * 输出: [[1]]
 *
 * 示例3：
 * 输入: rowIndex = 1
 * 输出: [1,1]
 * */
const getRow = (rowIndex) => {
    //  方法1；

    // if(rowIndex === 0) return [1]
    // if(rowIndex === 1) return [1, 1]
    // let res = [[1]];
    // for(let i = 1; i <= rowIndex; i++) {
    //     res[i] = [];
    //     res[i][0] = 1;
    //     res[i][i] = 1;
    //     for (let j = 1; j < i; j++) {
    //         res[i][j] = res[i-1][j-1] + res[i-1][j]
    //     }
    // }
    // return res[rowIndex];

    //  方法2；

    let lastRow = [1, 1]
    if(rowIndex === 0) return [1]
    if(rowIndex === 1) return lastRow;
    for (let i = 2; i <= rowIndex; i++) {
        let row = [1];
        for (let j = 1; j < i; j++) {
            row[j] = lastRow[j - 1] + lastRow[j]
        }
        row.push(1)
        lastRow = row
    }
    return lastRow;
}
// console.log(getRow(4))

/**
 * 448. 找到所有数组中消失的数字
 *
 * 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。
 * 请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
 *
 * 示例 1：
 * 输入：nums = [4,3,2,7,8,2,3,1]
 * 输出：[5,6]
 *
 * 示例 2：
 * 输入：nums = [1,1]
 * 输出：[2]
 * */
const findDisappearedNumbers = (nums) => {
    // 方法1：

    // let arr = [];
    // for (let i = 1; i <= nums.length; i++) {
    //     if(nums.indexOf(i) === -1) {
    //         arr.push(i);
    //     }
    // }
    // return arr;

    // 方法2: 不理解？？？？？？？？？？？？？？？

    const n = nums.length
    for (const num of nums) {
        const x = (num - 1) % n
        console.log(x, 'x')
        nums[x] += n
        console.log(nums[x] += n, 111111)
        console.log(nums, 'nums')
    }
    const ret = []
    for (const [i, num] of nums.entries()) {
        if (num <= n) {
            ret.push(i + 1)
        }
    }
    return ret
}
// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))

/**
 * 485. 最大连续 1 的个数
 *
 * 给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。
 *
 * 示例 1：
 * 输入：nums = [1,1,0,1,1,1]
 * 输出：3
 * 解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
 *
 * 示例 2:
 * 输入：nums = [1,0,1,1,0,1]
 * 输出：2
 *
 * 提示：
 *
 * 1 <= nums.length <= 105
 * nums[i] 不是 0 就是 1.
 * */
const findMaxConsecutiveOnes = (nums) => {
    // 题解：nums[i] 不是 0 就是 1.

    // 方法1：

    // nums = nums.join('').split('0'); //将数组转化为字符串，然后再以0为间隔转化为数组
    // nums.sort((a , b) => b.length - a.length); // 排序，长度大的排前面
    // return nums[0].length; // 返回第一个元素的长度

    // 方法2：
    let max = 0;  let count = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            count++
        } else {
            count = 0
        }
        max = Math.max(max, count);
    }
    return max;
}
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))