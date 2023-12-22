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
    if (rowIndex === 0) return [1]
    if (rowIndex === 1) return lastRow;
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
            if (a === b) {
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
    for (let item of nums1) {
        const index = nums2.indexOf(item);
        if (index !== -1) {
            nums2[index] = false;
            ans.push(item);
            console.log(nums2, 'nums2')
        }
    }
    return ans;
}
// console.log(intersect([1,2,3,2,1, 100], [2, 2]))

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
 * 455. 分发饼干
 *
 * 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
 *
 * 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。
 * 如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
 *
 * 示例 1:
 * 输入: g = [1,2,3], s = [1,1]
 * 输出: 1
 * 解释:
 * 你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
 * 虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
 * 所以你应该输出1。
 *
 * 示例 2:
 * 输入: g = [1,2], s = [1,2,3]
 * 输出: 2
 * 解释:
 * 你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
 * 你拥有的饼干数量和尺寸都足以让所有孩子满足。
 * 所以你应该输出2.
 * */
const findContentChildren = (g, s) => {
    // 将小孩胃口 g 和饼干 s 按从小到大排序
    let gSort = g.sort((a, b) => a - b);
    let sSort = s.sort((a, b) => a - b);
    let maxSatisfy = 0;
    // 循环胃口值数组 sSort，
    // 满足小孩胃口，则将胃口数组 gSort 中移除，并计数
    for (let i = 0; i < sSort.length; i++) {
        if (gSort[0] <= sSort[i]) {
            maxSatisfy++;
            gSort.shift();
        }
    }
    return maxSatisfy;
}
// console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]))

/**
 * 463. 岛屿的周长
 *
 * 给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。
 *
 * 网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。
 *
 * 岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。
 *
 * 示例 1：
 * 输入：grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
 * 输出：16
 * 解释：它的周长是上面图片中的 16 个黄色的边
 *
 * 示例 2：
 * 输入：grid = [[1]]
 * 输出：4
 *
 * 示例 3：
 * 输入：grid = [[1,0]]
 * 输出：4
 * */
const islandPerimeter = (grid) => {
    /**
     * 思路：
     * 1、遍历二位数组，首先判断是否为陆地
     * 2、如果是陆地，则周长加4，还要进一步判断单元格右边和下边是否为陆地(因为左面和上面已经判断过了)，
     *    如果下面和右边都是陆地，周长分别在减去2（重合部分要算两次）。
     * 3、如果是海洋，则不需要处理。
     * */
    const m = grid.length;
    const n = grid[0].length;
    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                res += 4;
                if (grid[i][j + 1] === 1) {
                    // 判断右边是否为陆地
                    res -= 2
                }
                //  判断下面是否为陆地，最后一行不用判断
                if (grid[i + 1] && grid[i + 1][j] === 1) {
                    res -= 2
                }
            }
        }
    }
    return res;
}
// console.log(islandPerimeter([[1]]))

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
    let max = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++
        } else {
            count = 0
        }
        max = Math.max(max, count);
    }
    return max;
}
// console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))

/**
 * 495. 提莫攻击
 *
 * 当提莫攻击艾希，艾希的中毒状态正好持续 duration 秒。
 *
 * 正式地讲，提莫在 t 发起攻击意味着艾希在时间区间 [t, t + duration - 1]（含 t 和 t + duration - 1）处于中毒状态。如果提莫在中毒影响结束 前 再次攻击，中毒状态计时器将会 重置 ，在新的攻击之后，中毒影响将会在 duration 秒后结束。
 *
 * 给你一个 非递减 的整数数组 timeSeries ，其中 timeSeries[i] 表示提莫在 timeSeries[i] 秒时对艾希发起攻击，以及一个表示中毒持续时间的整数 duration 。
 *
 * 返回艾希处于中毒状态的 总 秒数。
 *
 * 示例 1：
 * 输入：timeSeries = [1,4], duration = 2
 * 输出：4
 * 解释：提莫攻击对艾希的影响如下：
 * - 第 1 秒，提莫攻击艾希并使其立即中毒。中毒状态会维持 2 秒，即第 1 秒和第 2 秒。
 * - 第 4 秒，提莫再次攻击艾希，艾希中毒状态又持续 2 秒，即第 4 秒和第 5 秒。
 * 艾希在第 1、2、4、5 秒处于中毒状态，所以总中毒秒数是 4 。
 *
 * 示例 2：
 * 输入：timeSeries = [1,2], duration = 2
 * 输出：3
 * 解释：提莫攻击对艾希的影响如下：
 * - 第 1 秒，提莫攻击艾希并使其立即中毒。中毒状态会维持 2 秒，即第 1 秒和第 2 秒。
 * - 第 2 秒，提莫再次攻击艾希，并重置中毒计时器，艾希中毒状态需要持续 2 秒，即第 2 秒和第 3 秒。
 * 艾希在第 1、2、3 秒处于中毒状态，所以总中毒秒数是 3 。
 *
 * 提示：
 * 1 <= timeSeries.length <= 104
 * 0 <= timeSeries[i], duration <= 107
 * timeSeries 按 非递减 顺序排列
 * */
const findPoisonedDuration = (timeSeries, duration) => {
    // 方法1：

    // let source = 0;
    // for (let i = 1; i < timeSeries.length; i++) {
    //     let currentTime = timeSeries[i] - timeSeries[i - 1];
    //     if(currentTime >= duration) {
    //         source += duration
    //     } else {
    //         source += currentTime
    //     }
    // }
    // source += duration
    // return source

    // 方法2：

    let last = -1;
    let sum = 0;
    for (let v of timeSeries) {
        const e = v + duration - 1;
        sum += last < v ? duration : e - last;
        last = e;
    }
    return sum;
}
// console.log(findPoisonedDuration([1,2], 2))

/**
 * 496. 下一个更大元素 I
 *
 * nums1 中数字 x 的 下一个更大元素 是指 x 在 nums2 中对应位置 右侧 的 第一个 比 x 大的元素。
 * 给你两个 没有重复元素 的数组 nums1 和 nums2 ，下标从 0 开始计数，其中nums1 是 nums2 的子集。
 * 对于每个 0 <= i < nums1.length ，找出满足 nums1[i] == nums2[j] 的下标 j ，并且在 nums2 确定 nums2[j] 的 下一个更大元素 。如果不存在下一个更大元素，那么本次查询的答案是 -1 。
 * 返回一个长度为 nums1.length 的数组 ans 作为答案，满足 ans[i] 是如上所述的 下一个更大元素 。
 *
 * 示例 1：
 * 输入：nums1 = [4,1,2], nums2 = [1,3,4,2].
 * 输出：[-1,3,-1]
 * 解释：nums1 中每个值的下一个更大元素如下所述：
 * - 4 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
 * - 1 ，用加粗斜体标识，nums2 = [1,3,4,2]。下一个更大元素是 3 。
 * - 2 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
 *
 * 示例 2：
 * 输入：nums1 = [2,4], nums2 = [1,2,3,4].
 * 输出：[3,-1]
 * 解释：nums1 中每个值的下一个更大元素如下所述：
 * - 2 ，用加粗斜体标识，nums2 = [1,2,3,4]。下一个更大元素是 3 。
 * - 4 ，用加粗斜体标识，nums2 = [1,2,3,4]。不存在下一个更大元素，所以答案是 -1 。
 *
 * 提示：
 * 1 <= nums1.length <= nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 104
 * nums1和nums2中所有整数 互不相同
 * nums1 中的所有整数同样出现在 nums2 中
 * */
const nextGreaterElement = (nums1, nums2) => {
    // 方法1：

    let arr = [];
    for (let i = 0; i < nums1.length; i++) {
        let index = nums2.indexOf(nums1[i]);
        let maxIndex = nums2.slice(index).find(item => item > nums1[i]) || -1
        arr.push(maxIndex)
        // 此处判断可省略，因为 nums1 中出现的所有整数均出现在 nums2 中
        // if(index !== -1) {
        //     let maxIndex = nums2.slice(index).find(item => item > nums1[i]) || -1
        //     arr.push(maxIndex)
        // } else {
        //     arr.push(-1)
        // }
    }
    return arr
}
// console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))
// console.log(nextGreaterElement([2,4], [1, 2, 3, 4]))
// console.log(nextGreaterElement([1,3,5,2,4], [6,5,4,3,2,1,7]))

/**
 * 500. 键盘行
 *
 * 给你一个字符串数组 words ，只返回可以使用在 美式键盘 同一行的字母打印出来的单词。键盘如下图所示。
 *
 * 美式键盘 中：
 *
 * 第一行由字符 "qwertyuiop" 组成。
 * 第二行由字符 "asdfghjkl" 组成。
 * 第三行由字符 "zxcvbnm" 组成。
 *
 * 示例 1：
 * 输入：words = ["Hello","Alaska","Dad","Peace"]
 * 输出：["Alaska","Dad"]
 *
 * 示例 2：
 * 输入：words = ["omk"]
 * 输出：[]
 *
 * 示例 3：
 * 输入：words = ["adsdf","sfd"]
 * 输出：["adsdf","sfd"]
 *
 * 提示：
 * 1 <= words.length <= 20
 * 1 <= words[i].length <= 100
 * words[i] 由英文字母（小写和大写字母）组成
 * */
const findWords = (words) => {
    // 方法1：

    // 如果正则使用 /gi 则会导致错误
    // let len1 = /[qwertyuiop]/gi;
    // let len2 = /[asdfghjkl]/gi;
    // let len3 = /[zxcvbnm]/gi;

    // var reg = /a/g; 对于使用 /gi 的注解
    // console.log(reg.test('aa')); // true
    // console.log(reg.lastIndex); // 1
    // console.log(reg.test('aa')); // true
    // console.log(reg.lastIndex); // 2
    // console.log(reg.test('aa')); // false
    // console.log(reg.lastIndex); // 0

    // let res = []
    // let len1 = /[qwertyuiop]/i;
    // let len2 = /[asdfghjkl]/i;
    // let len3 = /[zxcvbnm]/i;
    // for (let item of words) {
    //     let count1 = len1.test(item)
    //     let count2 = len2.test(item)
    //     let count3 = len3.test(item)
    //     if ((count1 + count2 + count3) === 1) {
    //         res.push(item)
    //     }
    // }
    // return res

    let arr = [];
    words.forEach(item => {
        //  将原有数组中的每个字符串去重组成新数组
        let item2 = [...new Set(item.toLowerCase().split(''))];
        /**
         * item2: ['h', 'e', 'l', 'o']
         * ['a', 'l', 's', 'k']
         * */
        if (test(item2)) {
            arr.push(item);
        }
    });

    function test(item2Arr) {
        let one = item2Arr[0];
        let str = '';
        // 先判断每组字符在键盘的哪一行，然后在判断其余字符是否也存在该行中
        str = 'qwertyuiop'.includes(one) ? 'qwertyuiop' : 'asdfghjkl'.includes(one) ? 'asdfghjkl' : 'zxcvbnm';
        // 最后判断获取的过滤后的数组长度是否和传入的 item2Arr 长度相等
        return item2Arr.filter(item => str.includes(item)).length === item2Arr.length;
    }

    return arr;

}
// console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]))

/**
 * 506. 相对名次
 *
 * 给你一个长度为 n 的整数数组 score ，其中 score[i] 是第 i 位运动员在比赛中的得分。所有得分都 互不相同 。
 * 运动员将根据得分 决定名次 ，其中名次第 1 的运动员得分最高，名次第 2 的运动员得分第 2 高，依此类推。运动员的名次决定了他们的获奖情况：
 *
 * 名次第 1 的运动员获金牌 "Gold Medal" 。
 * 名次第 2 的运动员获银牌 "Silver Medal" 。
 * 名次第 3 的运动员获铜牌 "Bronze Medal" 。
 * 从名次第 4 到第 n 的运动员，只能获得他们的名次编号（即，名次第 x 的运动员获得编号 "x"）。
 * 使用长度为 n 的数组 answer 返回获奖，其中 answer[i] 是第 i 位运动员的获奖情况。
 *
 * 示例 1：
 * 输入：score = [5,4,3,2,1]
 * 输出：["Gold Medal","Silver Medal","Bronze Medal","4","5"]
 * 解释：名次为 [1st, 2nd, 3rd, 4th, 5th] 。
 *
 * 示例 2：
 * 输入：score = [10,3,8,9,4]
 * 输出：["Gold Medal","5","Bronze Medal","Silver Medal","4"]
 * 解释：名次为 [1st, 5th, 3rd, 2nd, 4th] 。
 *
 * 提示：
 * n == score.length
 * 1 <= n <= 104
 * 0 <= score[i] <= 106
 * score 中的所有值 互不相同
 * */
const findRelativeRanks = (score) => {
    // 方法1：

    // let oldScore = [...score];
    // score.sort((a, b) => b - a);
    // let result = [];
    // for (let i = 0; i < score.length; i++) {
    //     let index  = oldScore.indexOf(score[i]);
    //     i === 0 ? result[index] = 'Gold Medal' : '';
    //     i === 1 ? result[index] = 'Silver Medal' : '';
    //     i === 2 ? result[index] = 'Bronze Medal' : '';
    //     if(i === 0 || i === 1 || i === 2) {
    //         continue
    //     }
    //     result[index] = String(i + 1)
    // }
    // return result;

    // 方法2：

    // let result = [];
    // let oldScore = [...score];
    // let rankingMap = new Map();
    // score.sort((a, b) => b - a);
    // let rank = (index) => {
    //     if (index === 0) {
    //         return 'Gold Medal';
    //     } else if (index === 1) {
    //         return 'Silver Medal';
    //     } else if (index === 2) {
    //         return 'Bronze Medal';
    //     } else {
    //         return String(index + 1)
    //     }
    // }
    // score.map((item, index) => {
    //     rankingMap.set(item, rank(index))
    // })
    // oldScore.map((item, index) => {
    //     result.push(rankingMap.get(item))
    // })
    // return result;

    // 方法3：
    let object = {};
    let arr = [...score];
    arr.sort((a, b) => b - a);
    arr.forEach((item, index) => {
        if (index + 1 > 3) {
            object[item] = (index + 1).toString()
        } else {
            const num = index + 1;
            object[item] = num === 1 ? 'Gold Medal' : num === 2 ? 'Silver Medal' : 'Bronze Medal';
        }
    })
    let data = [];
    score.forEach(item => {
        data.push(object[item])
    })
    return data;
}
// console.log(findRelativeRanks([10, 3, 8, 9, 4]))

/**
 * 566. 重塑矩阵
 *
 * 在 MATLAB 中，有一个非常有用的函数 reshape ，它可以将一个 m x n 矩阵重塑为另一个大小不同（r x c）的新矩阵，但保留其原始数据。
 *
 * 给你一个由二维数组 mat 表示的 m x n 矩阵，以及两个正整数 r 和 c ，分别表示想要的重构的矩阵的行数和列数。
 *
 * 重构后的矩阵需要将原始矩阵的所有元素以相同的 行遍历顺序 填充。
 *
 * 如果具有给定参数的 reshape 操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。
 *
 * 示例 1：
 * 输入：mat = [[1,2],[3,4]], r = 1, c = 4
 * 输出：[[1,2,3,4]]
 *
 * 示例 2：
 * 输入：mat = [[1,2],[3,4]], r = 2, c = 4
 * 输出：[[1,2],[3,4]]
 *
 * 提示：
 * m == mat.length
 * n == mat[i].length
 * 1 <= m, n <= 100
 * -1000 <= mat[i][j] <= 1000
 * 1 <= r, c <= 300
 * */
// ------------------------ 不理解提题意 ---------------
// const matrixReshape = (mat, r, c) => {
//     let drawdownArr = [];
//     for (let i = 0; i < mat.length; i++) {
//         drawdownArr.push(...mat[i])
//     }
//     console.log(drawdownArr)
//     let resultArr = [];
//     function subGroup(arr, len) {
//         let newArr = []
//         for (let i = 0; i < arr.length; i++) {
//             if (Math.floor(i / len) === i / len) {
//                 newArr.push(arr.slice(i, i + len))
//             }
//         }
//         return newArr;
//     }
//     resultArr = subGroup(drawdownArr, drawdownArr.length / r)
//     return resultArr;
// }
// console.log(matrixReshape([[1,2],[3,4]], 2, 4))
// console.log(matrixReshape([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]], 2, 4))

/**
 * 575. 分糖果
 *
 * Alice 有 n 枚糖，其中第 i 枚糖的类型为 candyType[i] 。Alice 注意到她的体重正在增长，所以前去拜访了一位医生。
 *
 * 医生建议 Alice 要少摄入糖分，只吃掉她所有糖的 n / 2 即可（n 是一个偶数）。Alice 非常喜欢这些糖，她想要在遵循医生建议的情况下，尽可能吃到最多不同种类的糖。
 *
 * 给你一个长度为 n 的整数数组 candyType ，返回： Alice 在仅吃掉 n / 2 枚糖的情况下，可以吃到糖的 最多 种类数。
 *
 * 示例 1：
 * 输入：candyType = [1,1,2,2,3,3]
 * 输出：3
 * 解释：Alice 只能吃 6 / 2 = 3 枚糖，由于只有 3 种糖，她可以每种吃一枚。
 *
 * 示例 2：
 * 输入：candyType = [1,1,2,3]
 * 输出：2
 * 解释：Alice 只能吃 4 / 2 = 2 枚糖，不管她选择吃的种类是 [1,2]、[1,3] 还是 [2,3]，她只能吃到两种不同类的糖。
 *
 * 示例 3：
 * 输入：candyType = [6,6,6,6]
 * 输出：1
 * 解释：Alice 只能吃 4 / 2 = 2 枚糖，尽管她能吃 2 枚，但只能吃到 1 种糖。
 *
 * 提示：
 * n == candyType.length
 * 2 <= n <= 104
 * n 是一个偶数
 * -105 <= candyType[i] <= 105
 * */
const distributeCandies = (candyType) => {
    // let n = candyType.length / 2;
    // 两种去重方法，取其中一种
    // let arr = Array.from(new Set(candyType));
    // let arr = [...new Set(candyType)]
    // return arr.length > n ? n : arr.length;
}
// console.log(distributeCandies(([6, 6, 6, 6])))

/**
 * 594. 最长和谐子序列
 *
 * 和谐数组是指一个数组里元素的最大值和最小值之间的差别 正好是 1 。
 *
 * 现在，给你一个整数数组 nums ，请你在所有可能的子序列中找到最长的和谐子序列的长度。
 *
 * 数组的子序列是一个由数组派生出来的序列，它可以通过删除一些元素或不删除元素、且不改变其余元素的顺序而得到。
 *
 * 示例 1：
 * 输入：nums = [1,3,2,2,5,2,3,7]
 * 输出：5
 * 解释：最长的和谐子序列是 [3,2,2,2,3]
 *
 * 示例 2：
 * 输入：nums = [1,2,3,4]
 * 输出：2
 *
 * 示例 3：
 * 输入：nums = [1,1,1,1]
 * 输出：0
 *
 * 提示：
 * 1 <= nums.length <= 2 * 104
 * -109 <= nums[i] <= 109
 * */
const findLHS = (nums) => {
    // 方法1
    // 思路：先确认 nums 数组中每个元素出现的次数，然后在判断每个元素 -1 或者 +1 的值是否存在，存在的话就判断
    // 当前元素出现次数 + 当前元素 -1 出现的次数合 和 当前元素出现次数 + 当前元素 +1 出现的次数合，获取最大的值输出

    // let map = new Map();
    // for(let i of nums) {
    //     if(!map.has(i)) {
    //         map.set(i, 1);
    //     } else {
    //         map.set(i, map.get(i) + 1)
    //     }
    // }
    // let res = 0;
    // // 循环 map.keys(), 判断 map.keys() 中每个元素 -1 的值或者 +1 的值是否存在，存在的话获取 -1 的值出现的次数和当前元素出现的次数和
    // // 或者 +1 的值出现的次数和当前元素出现的次数和 得出最大值则为结果
    // for (let key of map.keys()) {
    //     if(map.has(key - 1)) {
    //         res = Math.max(res, map.get(key) + map.get(key - 1));
    //     } else if(map.has(key + 1)) {
    //         res = Math.max(res, map.get(key) + map.get(key + 1));
    //     }
    // }
    // return res;

    // 方法2：

    nums.sort((a, b) => a - b);
    let res = 0;
    for (let i = 0, j = 0; j < nums.length; j++) {
        while (i < j && nums[j] - nums[i] > 1) i++;
        if (nums[j] - nums[i] === 1) {
            res = Math.max(res, j - i + 1)
        }
    }
    return res;
}
// console.log(findLHS([1,3,2,2,5,2,3,7]))

/**
 * 598. 范围求和 II
 *
 * 给你一个 m x n 的矩阵 M ，初始化时所有的 0 和一个操作数组 op ，
 * 其中 ops[i] = [ai, bi] 意味着当所有的 0 <= x < ai 和 0 <= y < bi 时， M[x][y] 应该加 1。
 *
 * 在 执行完所有操作后 ，计算并返回 矩阵中最大整数的个数 。
 *
 * 示例 1:
 * 输入: m = 3, n = 3，ops = [[2,2],[3,3]]
 * 输出: 4
 * 解释: M 中最大的整数是 2, 而且 M 中有4个值为2的元素。因此返回 4。
 *
 * 示例 2:
 * 输入: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
 * 输出: 4
 *
 * 示例 3:
 * 输入: m = 3, n = 3, ops = []
 * 输出: 9
 *
 * 提示:
 *
 * 1 <= m, n <= 4 * 104
 * 0 <= ops.length <= 104
 * ops[i].length == 2
 * 1 <= ai <= m
 * 1 <= bi <= n
 * */
const maxCount = (m, n, ops) => {
    // 思路：因为每次操作都是从左上角开始，所以找到备操作次数最多的数就好，即最小的 a * 最小的 b，当然还要考虑 a，b是否大于 m，n
    // 如果大于，将 m，n 赋给最小的 a，b。因为每次最多只有 m * n 个数
    let minA = m, minB = n;
    for (let i = 0; i < ops.length; i++) {
        minA = Math.min(minA, ops[i][0]);
        minB = Math.min(minB, ops[i][1]);
    }
    return minA * minB;
}
// console.log(maxCount(3, 3, [[3,1],[1,3]]))
// console.log(maxCount(3, 3, []))

/**
 * 599. 两个列表的最小索引总和
 *
 * 假设 Andy 和 Doris 想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。
 *
 * 你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设答案总是存在。
 *
 * 示例 1:
 * 输入: list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]，list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
 * 输出: ["Shogun"]
 * 解释: 他们唯一共同喜爱的餐厅是“Shogun”。
 *
 * 示例 2:
 * 输入:list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]，list2 = ["KFC", "Shogun", "Burger King"]
 * 输出: ["Shogun"]
 * 解释: 他们共同喜爱且具有最小索引和的餐厅是“Shogun”，它有最小的索引和1(0+1)。
 *
 * 提示:
 * 1 <= list1.length, list2.length <= 1000
 * 1 <= list1[i].length, list2[i].length <= 30
 * list1[i] 和 list2[i] 由空格 ' ' 和英文字母组成。
 * list1 的所有字符串都是 唯一 的。
 * list2 中的所有字符串都是 唯一 的。
 * */
const findRestaurant = (list1, list2) => {
    let minCount = list1.length + list2.length;
    let minIndex = [];
    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                if (i + j < minCount) {
                    minCount = i + j;
                    minIndex = [];
                    minIndex.push(list1[i])
                } else if (i + j === minCount) {
                    minIndex.push(list1[i])
                }
            }
        }
    }
    return minIndex;
}
// console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]))
// console.log(findRestaurant(["happy","sad","good"], ["sad","happy","good"]))

/**
 * 643. 子数组最大平均数 I
 *
 * 给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。
 *
 * 请你找出平均数最大且 长度为 k 的连续子数组，并输出该最大平均数。
 *
 * 任何误差小于 10-5 的答案都将被视为正确答案。
 *
 *
 *
 * 示例 1：
 * 输入：nums = [1,12,-5,-6,50,3], k = 4
 * 输出：12.75
 * 解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
 *
 * 示例 2：
 * 输入：nums = [5], k = 1
 * 输出：5.00000
 * */
const findMaxAverage = (nums, k) => {
    // 方案1：

    // 次数设置的 maxSum 初始值应该比 nums 中连续 k 个元素的和小
    // let maxSum = -1000000000;
    // for (let i = 0; i < nums.length - k + 1; i++) {
    //     let sum = 0;
    //     for (let j = 0; j < k; j++) {
    //        sum += nums[i + j];
    //     }
    //     maxSum = Math.max(maxSum, sum);
    // }
    // return maxSum / k;

    // 方案2：
    // 先统计 nums 中前 k 个元素的和
    // 然后从第 k + 1 个元素开始遍历，每遍历一个元素，就减去前 k - 1 个元素，加上当前元素，然后和取最大值
    let max, sums = 0;
    for (let i = 0; i < k; i++) {
        sums += nums[i];
    }
    max = sums;
    for (let i = k; i < nums.length; i++) {
        sums = sums - nums[i - k] + nums[i];
        max = Math.max(max, sums);
    }
    return max / k;
}
// console.log(findMaxAverage([8860,-853,6534,4477,-4589,8646,-6155,-5577,-1656,-5779,-2619,-8604,-1358,-8009,4983,7063,3104,-1560,4080,2763,5616,-2375,2848,1394,-7173,-5225,-8244,-809,8025,-4072,-4391,-9579,1407,6700,2421,-6685,5481,-1732,-8892,-6645,3077,3287,-4149,8701,-4393,-9070,-1777,2237,-3253,-506,-4931,-7366,-8132,5406,-6300,-275,-1908,67,3569,1433,-7262,-437,8303,4498,-379,3054,-6285,4203,6908,4433,3077,2288,9733,-8067,3007,9725,9669,1362,-2561,-4225,5442,-9006,-429,160,-9234,-4444,3586,-5711,-9506,-79,-4418,-4348,-5891], 93));

/**
 * 645. 错误的集合
 *
 * 集合 s 包含从 1 到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个数字复制了成了集合里面的另外一个数字的值，导致集合 丢失了一个数字 并且 有一个数字重复 。
 *
 * 给定一个数组 nums 代表了集合 S 发生错误后的结果。
 *
 * 请你找出重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。
 *
 * 示例 1：
 * 输入：nums = [1,2,2,4]
 * 输出：[2,3]
 *
 * 示例 2：
 * 输入：nums = [1,1]
 * 输出：[1,2]
 *
 * 提示：
 * 2 <= nums.length <= 104
 * 1 <= nums[i] <= 104
 * */
const findErrorNums = (nums) => {
    // 方法1：leetCode 最优解
    // 思路：创建一个 nums 长度 + 1 的数组，
    // 遍历 nums，将 nums 中的元素作为数组下标，
    // 然后将数组下标对应的元素值加 1，
    // 最后遍历数组，找出数组下标对应的元素值大于 1 的元素，
    // 即为重复的元素，再遍历数组，找出数组下标对应的元素值为 0 的元素，
    // 即为缺失的元素。
    // 注意：
    // 1、创建数组的长度为 nums.length + 1，
    // 因为 nums 数组中元素的范围是 [1,nums.length]，
    // 因此创建数组的长度为 nums.length + 1，
    // 这样能保证数组下标不会越界。
    // 2、创建数组时，数组元素初始值都为 0，
    // 这样能保证数组下标对应的元素值都是 0。
    // 3、遍历 nums 数组时，
    // 数组下标对应的元素值加 1，
    // 这样能保证数组下标对应的元素值都是 1。
    // 4、遍历数组时，
    // 数组下标对应的元素值大于 1，
    // 即为重复的元素，
    // 数组下标对应的元素值为 0，
    // 即为缺失的元素。
    let n = nums.length;
    let digits = new Array(n + 1).fill(0);
    // nums = [2, 2]
    for (const num of nums) {
        digits[num] += 1;
    }
    console.log(digits, 'digits')
    let lose = -1, duplicate = -1;
    for (let i = 1; i <= n; i++) {
        if (digits[i] === 0) lose = i;
        if (digits[i] === 2) duplicate = i;
    }
    return [duplicate, lose];

    // 方法2：
    // // 对nums数组进行排序
    // nums.sort((a, b) => a - b);
    // // 为了比较相邻两个元素的差，设置前一个元素的指针
    // let pre = 0;
    // // 创建一个长度为2的数组，且所有元素初始值为0
    // let res = new Array(2).fill(0);
    // const n = nums.length;
    // // 遍历数组
    // for (let i = 0; i < n; i++) {
    //     const curr = nums[i];
    //     if (curr === pre) {
    //         // 相邻且相等的元素，一定是重复的数字
    //         res[0] = curr;
    //     } else if (curr - pre > 1) {
    //         // 相邻两个元素差值大于1（为2），其中间的元素即为丢失元素
    //         res[1] = curr - 1;
    //     }
    //     // pre指针下移
    //     pre = curr;
    // }
    // // 如果丢失的是数字的是n，就判断数组最后一个元素是否为n
    // if (nums[n - 1] !== n) {
    //     res[1] = n;
    // }
    // return res;
}
// console.log(findErrorNums([1,2,2,4]))

/**
 * 661. 图片平滑器
 *
 * 图像平滑器 是大小为 3 x 3 的过滤器，用于对图像的每个单元格平滑处理，平滑处理后单元格的值为该单元格的平均灰度。
 *
 * 每个单元格的  平均灰度 定义为：该单元格自身及其周围的 8 个单元格的平均值，结果需向下取整。（即，需要计算蓝色平滑器中 9 个单元格的平均值）。
 *
 * 如果一个单元格周围存在单元格缺失的情况，则计算平均灰度时不考虑缺失的单元格（即，需要计算红色平滑器中 4 个单元格的平均值）。
 *
 * 给你一个表示图像灰度的 m x n 整数矩阵 img ，返回对图像的每个单元格平滑处理后的图像 。
 *
 * 示例1：
 * 输入:img = [[1,1,1],[1,0,1],[1,1,1]]
 * 输出:[[0, 0, 0],[0, 0, 0], [0, 0, 0]]
 * 解释:
 * 对于点 (0,0), (0,2), (2,0), (2,2): 平均(3/4) = 平均(0.75) = 0
 * 对于点 (0,1), (1,0), (1,2), (2,1): 平均(5/6) = 平均(0.83333333) = 0
 * 对于点 (1,1): 平均(8/9) = 平均(0.88888889) = 0
 *
 * 示例2：
 * 输入: img = [[100,200,100],[200,50,200],[100,200,100]]
 * 输出: [[137,141,137],[141,138,141],[137,141,137]]
 * 解释:
 * 对于点 (0,0), (0,2), (2,0), (2,2): floor((100+200+200+50)/4) = floor(137.5) = 137
 * 对于点 (0,1), (1,0), (1,2), (2,1): floor((200+200+50+200+100+100)/6) = floor(141.666667) = 141
 * 对于点 (1,1): floor((50+200+200+200+200+100+100+100+100)/9) = floor(138.888889) = 138
 *
 * 提示:
 * m == img.length
 * n == img[i].length
 * 1 <= m, n <= 200
 * 0 <= img[i][j] <= 255
 * */
const imageSmoother = (img) => {
    const n = img.length;
    const m = img[0].length;
    const ans = new Array(n).fill(0).map(() => new Array(m).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let sum = 0, num = 0;
            for (let x = i - 1; x <= i + 1; x++) {
                for (let y = j - 1; y <= j + 1; y++) {
                    if (x >= 0 & x < n & y >= 0 & y < m) {
                        sum += img[x][y]
                        num++
                    }
                }
            }
            ans[i][j] = Math.floor(sum / num)
        }
    }
    return ans;
}
// console.log(imageSmoother([[2,3,4],[5,6,7],[8,9,10],[11,12,13],[14,15,16]]));
// console.log(imageSmoother([[100,200,100],[200,50,200],[100,200,100]]));

/**
 * 674. 最长连续递增序列
 *
 * 给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。
 *
 * 连续递增的子序列 可以由两个下标 l 和 r（l < r）确定，如果对于每个 l <= i < r，都有 nums[i] < nums[i + 1] ，
 * 那么子序列 [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 就是连续递增子序列。
 *
 * 示例 1：
 * 输入：nums = [1,3,5,4,7]
 * 输出：3
 * 解释：最长连续递增序列是 [1,3,5], 长度为3。
 * 尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为 5 和 7 在原数组里被 4 隔开。
 *
 * 示例 2：
 * 输入：nums = [2,2,2,2,2]
 * 输出：1
 * 解释：最长连续递增序列是 [2], 长度为1。
 *
 * 提示：
 *
 * 1 <= nums.length <= 104
 * -109 <= nums[i] <= 109
 * */
const findLengthOfLCIS = (nums) => {
    // 方法1：

    if (nums.length === 0) return 0;
    let result = 1;
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            count++
        } else {
            count = 1
        }
        if (count > result) result = count
    }
    return result;
}
// console.log(findLengthOfLCIS([1,3,5,4,7]))

/**
 * 682. 棒球比赛
 *
 * 你现在是一场采用特殊赛制棒球比赛的记录员。这场比赛由若干回合组成，过去几回合的得分可能会影响以后几回合的得分。
 *
 * 比赛开始时，记录是空白的。你会得到一个记录操作的字符串列表 ops，其中 ops[i] 是你需要记录的第 i 项操作，ops 遵循下述规则：
 *
 * 整数 x - 表示本回合新获得分数 x
 * "+" - 表示本回合新获得的得分是前两次得分的总和。题目数据保证记录此操作时前面总是存在两个有效的分数。
 * "D" - 表示本回合新获得的得分是前一次得分的两倍。题目数据保证记录此操作时前面总是存在一个有效的分数。
 * "C" - 表示前一次得分无效，将其从记录中移除。题目数据保证记录此操作时前面总是存在一个有效的分数。
 * 请你返回记录中所有得分的总和。
 *
 * 示例 1：
 * 输入：ops = ["5","2","C","D","+"]
 * 输出：30
 * 解释：
 * "5" - 记录加 5 ，记录现在是 [5]
 * "2" - 记录加 2 ，记录现在是 [5, 2]
 * "C" - 使前一次得分的记录无效并将其移除，记录现在是 [5].
 * "D" - 记录加 2 * 5 = 10 ，记录现在是 [5, 10].
 * "+" - 记录加 5 + 10 = 15 ，记录现在是 [5, 10, 15].
 * 所有得分的总和 5 + 10 + 15 = 30
 *
 * 示例 2：
 * 输入：ops = ["5","-2","4","C","D","9","+","+"]
 * 输出：27
 * 解释：
 * "5" - 记录加 5 ，记录现在是 [5]
 * "-2" - 记录加 -2 ，记录现在是 [5, -2]
 * "4" - 记录加 4 ，记录现在是 [5, -2, 4]
 * "C" - 使前一次得分的记录无效并将其移除，记录现在是 [5, -2]
 * "D" - 记录加 2 * -2 = -4 ，记录现在是 [5, -2, -4]
 * "9" - 记录加 9 ，记录现在是 [5, -2, -4, 9]
 * "+" - 记录加 -4 + 9 = 5 ，记录现在是 [5, -2, -4, 9, 5]
 * "+" - 记录加 9 + 5 = 14 ，记录现在是 [5, -2, -4, 9, 5, 14]
 * 所有得分的总和 5 + -2 + -4 + 9 + 5 + 14 = 27
 *
 * 输入：ops = ["1"]
 * 输出：1
 *
 * 提示：
 * 1 <= ops.length <= 1000
 * ops[i] 为 "C"、"D"、"+"，或者一个表示整数的字符串。整数范围是 [-3 * 104, 3 * 104]
 * 对于 "+" 操作，题目数据保证记录此操作时前面总是存在两个有效的分数
 * 对于 "C" 和 "D" 操作，题目数据保证记录此操作时前面总是存在一个有效的分数
 * */
const calPoints = (operations) => {
    // 方法1：

    // if (operations.length === 1) return operations[0];
    // let newList = [];
    // for (let i = 0; i < operations.length; i++) {
    //     let account = operations[i];
    //     if (Number(account)) {
    //         newList.push(Number(account))
    //     } else if (account === 'D') {
    //         newList.push(newList[newList.length - 1] * 2)
    //     } else if (account === '+') {
    //         newList.push(newList[newList.length - 1] + newList[newList.length - 2])
    //     } else if (account === 'C') {
    //         newList.pop();
    //     }
    // }
    // return newList.reduce((prev, curr) => prev + curr, 0)

    // 方法2：

    // let res = []
    // for(let i=0;i<operations.length;i++){
    //     switch (operations[i]){
    //         case "C":
    //             res.pop()
    //             break
    //         case "D":
    //             res.push(+res[res.length-1]*2)
    //             break
    //         case "+":
    //             res.push(+res[res.length-1] + +res[res.length-2])
    //             break
    //         default:
    //             res.push(+operations[i])
    //     }
    // }
    // return res.reduce((prev,next) => prev+next,0)
}
// console.log(calPoints(["1","C"]))

/**
 * 697. 数组的度
 *
 * 给定一个非空且只包含非负数的整数数组 nums，数组的 度 的定义是指数组里任一元素出现频数的最大值。
 *
 * 你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
 *
 * 示例 1：
 * 输入：nums = [1,2,2,3,1]
 * 输出：2
 * 解释：
 * 输入数组的度是 2 ，因为元素 1 和 2 的出现频数最大，均为 2 。
 * 连续子数组里面拥有相同度的有如下所示：
 * [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
 * 最短连续子数组 [2, 2] 的长度为 2 ，所以返回 2 。
 *
 * 示例 2：
 * 输入：nums = [1,2,2,3,1,4,2]
 * 输出：6
 * 解释：
 * 数组的度是 3 ，因为元素 2 重复出现 3 次。
 * 所以 [2,2,3,1,4,2] 是最短子数组，因此返回 6 。
 *
 * 提示：
 * nums.length 在 1 到 50,000 范围内。
 * nums[i] 是一个在 0 到 49,999 范围内的整数。
 * */
const findShortestSubArray = (nums) => {
    // 方法1：找出 nums 中出现次数最多的元素组成数组，然后循环数组找出每个元素最短连续子数组

    // let obj = {}, max = 0, maxEle;
    // for (let i = 0; i < nums.length; i++) {
    //     let val = nums[i]
    //     obj[val] === undefined ? obj[val] = 1 : obj[val]++;
    //     // 当前循环中直接比较出现次数最大值
    //     if (obj[val] > max) {
    //         max = obj[val]
    //         maxEle = val
    //     }
    // }
    // // nums 中出现次数最多的元素组成的数组
    // let arr = Object.keys(obj).filter(key=> obj[key]=== max);
    // let dataIndex = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     let minIndex = nums.indexOf(Number(arr[i]));
    //     let maxIndex = nums.lastIndexOf(Number(arr[i]));
    //     if(!dataIndex || dataIndex > (maxIndex - minIndex + 1)) {
    //         dataIndex = maxIndex - minIndex + 1
    //     }
    // }
    // return dataIndex;

    // 方法2：

    let len = nums.length;
    let map = {};
    // map 中每一项记录的是 nums 数组中每个元素出现的的下标
    for (let i = 0; i < len; i++) {
        let value = nums[i];
        if (!map[value]) {
            map[value] = [];
        }
        map[value].push(i);
    }
    // 判断 map 中每项数组长度，取最长的然后判断差值
    let max = 0;
    for (let key in map) {
        max = Math.max(map[key].length, max)
    }
    if (max === 1) return 1;
    let result = 50000;
    for (let key in map) {
        let idx = map[key]
        if (idx.length === max) {
            result = Math.min(result, idx[idx.length - 1] - idx[0] + 1)
        }
    }
    return result;
}
// console.log(findShortestSubArray([1, 3, 2, 2, 3, 1]))

/**
 * 704. 二分查找
 *
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 *
 * 示例 1:
 * 输入: nums = [-1,0,3,5,9,12], target = 9
 * 输出: 4
 * 解释: 9 出现在 nums 中并且下标为 4
 *
 * 示例 2:
 * 输入: nums = [-1,0,3,5,9,12], target = 2
 * 输出: -1
 * 解释: 2 不存在 nums 中因此返回 -1
 *
 * 提示：
 * 你可以假设 nums 中的所有元素是不重复的。
 * n 将在 [1, 10000]之间。
 * nums 的每个元素都将在 [-9999, 9999]之间。
 * */
const search = (nums, target) => {
    // return nums.indexOf(target)
    // let count = -1;
    // for (let i = 0; i < nums.length; i++) {
    //     if(nums[i] === target) {
    //         count = i;
    //         break
    //     }
    // }
    // return count;

    // 二分查找
    let left = 0, right = nums.length;
    while (left < right) {
        let mid = left + Math.floor((left + right) / 2)
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid
        }
    }
    return -1
}
// console.log(search([-1,0,3,5,9,12], 9))

/**
 * 724. 寻找数组的中心下标
 *
 * 给你一个整数数组 nums ，请计算数组的 中心下标 。
 *
 * 数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。
 *
 * 如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。
 *
 * 如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。
 *
 * 示例 1：
 * 输入：nums = [1, 7, 3, 6, 5, 6]
 * 输出：3
 * 解释：
 * 中心下标是 3 。
 * 左侧数之和 sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11 ，
 * 右侧数之和 sum = nums[4] + nums[5] = 5 + 6 = 11 ，二者相等。
 *
 * 示例 2：
 * 输入：nums = [1, 2, 3]
 * 输出：-1
 * 解释：
 * 数组中不存在满足此条件的中心下标。
 *
 * 示例 3：
 * 输入：nums = [2, 1, -1]
 * 输出：0
 * 解释：
 * 中心下标是 0 。
 * 左侧数之和 sum = 0 ，（下标 0 左侧不存在元素），
 * 右侧数之和 sum = nums[1] + nums[2] = 1 + -1 = 0 。
 *
 * 提示：
 * 1 <= nums.length <= 104
 * -1000 <= nums[i] <= 1000
 * */
const pivotIndex = (nums) => {
    // 方法1：
    // let left = 0, right = nums.reduce((a, b) => a + b, 0) - nums[0];
    // if(right === 0) return 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if(left === right) return i;
    //     left += nums[i];
    //     right -= nums[i + 1];
    // }
    // return -1;

    // 方法2：思路一样，只是写法不同
    let left = 0;
    let right = nums.reduce((pre, num) => pre + num, 0)
    for (let i = 0; i < nums.length; i++) {
        right -= nums[i];
        if (left === right) return i;
        left += nums[i];
    }
    return -1;
}
// console.log(pivotIndex([2, 1, -1]))

/**
 * 733. 图像渲染
 *
 * 有一幅以 m x n 的二维整数数组表示的图画 image ，其中 image[i][j] 表示该图画的像素值大小。
 * 你也被给予三个整数 sr ,  sc 和 newColor 。你应该从像素 image[sr][sc] 开始对图像进行 上色填充 。
 * 为了完成 上色工作 ，从初始像素开始，记录初始坐标的 上下左右四个方向上 像素值与初始坐标相同的相连像素点，接着再记录这四个方向上符合条件的像素点与他们对应 四个方向上 像素值与初始坐标相同的相连像素点，……，重复该过程。将所有有记录的像素点的颜色值改为 newColor 。
 * 最后返回 经过上色渲染后的图像 。
 *
 * tips:
 * 这个题可以理解为在二维数组中，我们先指定其中一个元素A，我们希望把这个元素A的值改成我们新传入的值，
 * 同时，与元素A在上下左右四个方向相邻的元素，如果他们的值与元素A的值相同，那么他们也会被修改为新的值
 * A在上下左右四个方向相邻的元素中，与元素A的值相同的元素 的 上下左右四个方向相邻的元素 如果值与元素A的值相同，也会被渲染
 * 通俗一点就是，你在二维数组中通过上下左右四个方向移动找出所有路径，这些路径上的值都是元素A，然后把这些路径上的值都改成我们传入的新的值
 *
 * 示例 1:
 * 输入: image = [[1,1,1],[1,1,0],[1,0,1]]，sr = 1, sc = 1, newColor = 2
 * 输出: [[2,2,2],[2,2,0],[2,0,1]]
 * 解析: 在图像的正中间，(坐标(sr,sc)=(1,1)),在路径上所有符合条件的像素点的颜色都被更改成2。
 * 注意，右下角的像素没有更改为2，因为它不是在上下左右四个方向上与初始点相连的像素点。
 *
 * 示例 2:
 * 输入: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2
 * 输出: [[2,2,2],[2,2,2]]
 *
 * 提示:
 * m == image.length
 * n == image[i].length
 * 1 <= m, n <= 50
 * 0 <= image[i][j], newColor < 216
 * 0 <= sr < m
 * 0 <= sc < n
 * */
const floodFill = (image, sr, sc, color) => {
    let rows = image.length, cols = image[0].length;
    let center = image[sr][sc];
    let dfs = (x, y) => {
        if (x < 0 || x >= rows || y < 0 || y >= cols || image[x][y] !== center || image[x][y] === color) return;
        image[x][y] = color;
        dfs(x + 1, y);
        dfs(x - 1, y);
        dfs(x, y - 1);
        dfs(x, y + 1);
    }
    dfs(sr, sc)
    return image;
}
// console.log(floodFill([[1,0,1,1], [0,1,0,1], [1,0,1,1], [1,1,1,1]], 1, 1, 8))

/**
 * 744. 寻找比目标字母大的最小字母
 *
 * 给你一个字符数组 letters，该数组按非递减顺序排序，以及一个字符 target。letters 里至少有两个不同的字符。
 *
 * 返回 letters 中大于 target 的最小的字符。如果不存在这样的字符，则返回 letters 的第一个字符。
 *
 * 示例 1：
 * 输入: letters = ["c", "f", "j"]，target = "a"
 * 输出: "c"
 * 解释：letters 中字典上比 'a' 大的最小字符是 'c'。
 *
 * 示例 2:
 * 输入: letters = ["c","f","j"], target = "c"
 * 输出: "f"
 * 解释：letters 中字典顺序上大于 'c' 的最小字符是 'f'。
 *
 * 示例 3:
 * 输入: letters = ["x","x","y","y"], target = "z"
 * 输出: "x"
 * 解释：letters 中没有一个字符在字典上大于 'z'，所以我们返回 letters[0]。
 *
 * 提示：
 * 2 <= letters.length <= 104
 * letters[i] 是一个小写字母
 * letters 按非递减顺序排序
 * letters 最少包含两个不同的字母
 * target 是一个小写字母
 * */
const nextGreatestLetter = (letters, target) => {
    // 方法1：通用
    // let targetCode = target.charCodeAt();
    // let len = letters.length, count = 200;
    // let res = ""
    // for (let i = 0; i < len; i++) {
    //     const code = letters[i].charCodeAt();
    //     if (code - targetCode > 0 && code - targetCode < count) {
    //         count = code - targetCode;
    //         res = letters[i];
    //     }
    // }
    // return res ? res : letters[0];

    // 方法2：题目中描述 letters 是按非递减顺序排序
    if (letters[0] >= target || letters.at(-1) < target) return letters[0];
    return letters.find(item => item > target)
};
// console.log(nextGreatestLetter(["c","f","j"], "a"))
// console.log(nextGreatestLetter(["x","x","y","y"], "z"))

/**
 * 746. 使用最小花费爬楼梯
 *
 * 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。
 *
 * 你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。
 *
 * 请你计算并返回达到楼梯顶部的最低花费。
 *
 * 示例 1：
 * 输入：cost = [10,15,20]
 * 输出：15
 * 解释：你将从下标为 1 的台阶开始。
 * - 支付 15 ，向上爬两个台阶，到达楼梯顶部。
 * 总花费为 15 。
 *
 * 示例 2：
 * 输入：cost = [1,100,1,1,1,100,1,1,100,1]
 * 输出：6
 * 解释：你将从下标为 0 的台阶开始。
 * - 支付 1 ，向上爬两个台阶，到达下标为 2 的台阶。
 * - 支付 1 ，向上爬两个台阶，到达下标为 4 的台阶。
 * - 支付 1 ，向上爬两个台阶，到达下标为 6 的台阶。
 * - 支付 1 ，向上爬一个台阶，到达下标为 7 的台阶。
 * - 支付 1 ，向上爬两个台阶，到达下标为 9 的台阶。
 * - 支付 1 ，向上爬一个台阶，到达楼梯顶部。
 * 总花费为 6 。
 *
 * 提示：
 *
 * 2 <= cost.length <= 1000
 * 0 <= cost[i] <= 999
 * */
const minCostClimbingStairs = (cost) => {
    let n = cost.length;
    let dp = [];
    dp[0] = 0;
    dp[1] = 0;
    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    return dp[n]
}
// console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))

/**
 * 747. 至少是其他数字两倍的最大数
 *
 * 给你一个整数数组 nums ，其中总是存在 唯一的 一个最大整数 。
 *
 * 请你找出数组中的最大元素并检查它是否 至少是数组中每个其他数字的两倍 。如果是，则返回 最大元素的下标 ，否则返回 -1 。
 *
 * 示例 1：
 * 输入：nums = [3,6,1,0]
 * 输出：1
 * 解释：6 是最大的整数，对于数组中的其他整数，6 至少是数组中其他元素的两倍。6 的下标是 1 ，所以返回 1 。
 *
 * 示例 2：
 * 输入：nums = [1,2,3,4]
 * 输出：-1
 * 解释：4 没有超过 3 的两倍大，所以返回 -1 。
 *
 * 示例 3：
 * 输入：nums = [1]
 * 输出：0
 * 解释：因为不存在其他数字，所以认为现有数字 1 至少是其他数字的两倍。
 *
 * 提示：
 * 1 <= nums.length <= 50
 * 0 <= nums[i] <= 100
 * nums 中的最大元素是唯一的
 * */
const dominantIndex = (nums) => {
    const sortNums = [...nums].sort((a, b) => b - a);
    const max = sortNums.shift();
    let b = sortNums.every(item => item <= max / 2);
    return b ? nums.indexOf(max) : -1
}
// console.log(dominantIndex([3, 6, 1, 0]))

/**
 * 766. 托普利茨矩阵
 *
 * 给你一个 m x n 的矩阵 matrix 。如果这个矩阵是托普利茨矩阵，返回 true ；否则，返回 false 。
 *
 * 如果矩阵上每一条由左上到右下的对角线上的元素都相同，那么这个矩阵是 托普利茨矩阵 。
 *
 * 示例 1：
 * 输入：matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
 * 输出：true
 * 解释：
 * 在上述矩阵中, 其对角线为:
 * "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]"。
 * 各条对角线上的所有元素均相同, 因此答案是 True 。
 *
 * 示例 2：
 * 输入：matrix = [[1,2],[2,2]]
 * 输出：false
 * 解释：
 * 对角线 "[1, 2]" 上的元素不同。
 *
 * 提示：
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 20
 * 0 <= matrix[i][j] <= 99
 * */
const isToeplitzMatrix = (matrix) => {
    let rows = matrix.length, cols = matrix[0].length;
    for (let col = 1; col < cols; col++) {
        for (let row = 1; row < rows; row++) {
            if (matrix[row - 1][col - 1] !== matrix[row][col]) {
                return false
            }
        }
    }
    return true;
}
// console.log(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]]))
// console.log(isToeplitzMatrix([[1,2],[2,2]]))

/**
 * 804. 唯一摩尔斯密码词
 *
 * 国际摩尔斯密码定义一种标准编码方式，将每个字母对应于一个由一系列点和短线组成的字符串， 比如:
 * 'a' 对应 ".-" ，
 * 'b' 对应 "-..." ，
 * 'c' 对应 "-.-." ，以此类推。
 *
 * 给你一个字符串数组 words ，每个单词可以写成每个字母对应摩尔斯密码的组合。
 * 例如，"cab" 可以写成 "-.-..--..." ，(即 "-.-." + ".-" + "-..." 字符串的结合)。我们将这样一个连接过程称作 单词翻译 。
 * 对 words 中所有单词进行单词翻译，返回不同 单词翻译 的数量。
 *
 *
 * 示例 1：
 * 输入: words = ["gin", "zen", "gig", "msg"]
 * 输出: 2
 * 解释:
 * 各单词翻译如下:
 * "gin" -> "--...-."
 * "zen" -> "--...-."
 * "gig" -> "--...--."
 * "msg" -> "--...--."
 * 共有 2 种不同翻译, "--...-." 和 "--...--.".
 *
 * 示例 2：
 * 输入：words = ["a"]
 * 输出：1
 *
 * 提示：
 * 1 <= words.length <= 100
 * 1 <= words[i].length <= 12
 * words[i] 由小写英文字母组成
 * */
const uniqueMorseRepresentations = (words) => {
    let passWord = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]

    // 方法1：
    // let s = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    // let result = [];
    // let map = new Map();
    // for (let i = 0; i < passWord.length; i++) {
    //     map.set(s[i], passWord[i])
    // }
    // for (let i = 0; i < words.length; i++) {
    //     let key = words[i];
    //     let s = ''
    //     for (let i = 0; i < key.length; i++) {
    //         s += map.get(key[i])
    //     }
    //     result.push(s)
    // }
    // return [...new Set(result)].length;

    // 方法2
    const seen = new Set();
    for (const word of words) {
        let code = '';
        for (const ch of word) {
            code += passWord[ch.charCodeAt() - 'a'.charCodeAt()];
        }
        seen.add(code);
    }
    return seen.size;
}
// console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))

/**
 * 806. 写字符串需要的行数
 *
 * 我们要把给定的字符串 S 从左到右写到每一行上，每一行的最大宽度为100个单位，如果我们在写某个字母的时候会使这行超过了100 个单位，那么我们应该把这个字母写到下一行。我们给定了一个数组 widths ，这个数组 widths[0] 代表 'a' 需要的单位， widths[1] 代表 'b' 需要的单位，...， widths[25] 代表 'z' 需要的单位。
 *
 * 现在回答两个问题：至少多少行能放下S，以及最后一行使用的宽度是多少个单位？将你的答案作为长度为2的整数列表返回。
 *
 * 示例 1:
 * 输入:
 * widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
 * S = "abcdefghijklmnopqrstuvwxyz"
 * 输出: [3, 60]
 * 解释:
 * 所有的字符拥有相同的占用单位10。所以书写所有的26个字母，
 * 我们需要2个整行和占用60个单位的一行。
 *
 * 示例 2:
 * 输入:
 * widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
 * S = "bbbcccdddaaa"
 * 输出: [2, 4]
 * 解释:
 * 除去字母'a'所有的字符都是相同的单位10，并且字符串 "bbbcccdddaa" 将会覆盖 9 * 10 + 2 * 4 = 98 个单位.
 * 最后一个字母 'a' 将会被写到第二行，因为第一行只剩下2个单位了。
 * 所以，这个答案是2行，第二行有4个单位宽度。
 *
 * 注:
 * 字符串 S 的长度在 [1, 1000] 的范围。
 * S 只包含小写字母。
 * widths 是长度为 26的数组。
 * widths[i] 值的范围在 [2, 10]。
 * */
const numberOfLines = (widths, s) => {
    // tips：当每一行结尾无法满足单词所需长度，则需新增一行，
    let line = 1;
    let count = 0
    for (let i = 0; i < s.length; i++) {
        count += widths[s[i].charCodeAt() - 97]
        if (count > 100) {
            line++;
            count = widths[s[i].charCodeAt() - 97];
        }
    }
    return [line, count];
}
// console.log(numberOfLines([4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],  "bbbcccdddaaa"))

/**
 * 812. 最大三角形面积
 *
 * 给你一个由 X-Y 平面上的点组成的数组 points ，其中 points[i] = [xi, yi] 。从其中取任意三个不同的点组成三角形，返回能组成的最大三角形的面积。与真实值误差在 10-5 内的答案将会视为正确答案。
 *
 * 示例 1：
 * 输入：points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
 * 输出：2.00000
 * 解释：输入中的 5 个点如上图所示，红色的三角形面积最大。
 *
 * 示例 2：
 * 输入：points = [[1,0],[0,0],[0,1]]
 * 输出：0.50000
 *
 * 提示：
 * 3 <= points.length <= 50
 * -50 <= xi, yi <= 50
 * 给出的所有点 互不相同
 * */
const largestTriangleArea = (points) => {
    // 面积公式如图 img 文件夹下 812 图片
    let max = 0;
    points.map(i => points.map(j => points.map(k => {
        max = Math.max(max, i[0] * (j[1] - k[1]) + j[0] * (k[1] - i[1]) + k[0] * (i[1] - j[1]))
    })))
    return max / 2;
}
// console.log(largestTriangleArea([[4,6],[6,5],[3,1]]))

/**
 * 821. 字符的最短距离
 *
 * 给你一个字符串 s 和一个字符 c ，且 c 是 s 中出现过的字符。
 * 返回一个整数数组 answer ，其中 answer.length == s.length 且 answer[i] 是 s 中从下标 i 到离它 最近 的字符 c 的 距离 。
 * 两个下标 i 和 j 之间的 距离 为 abs(i - j) ，其中 abs 是绝对值函数。
 *
 * 示例 1：
 * 输入：s = "loveleetcode", c = "e"
 * 输出：[3,2,1,0,1,0,0,1,2,2,1,0]
 * 解释：字符 'e' 出现在下标 3、5、6 和 11 处（下标从 0 开始计数）。
 * 距下标 0 最近的 'e' 出现在下标 3 ，所以距离为 abs(0 - 3) = 3 。
 * 距下标 1 最近的 'e' 出现在下标 3 ，所以距离为 abs(1 - 3) = 2 。
 * 对于下标 4 ，出现在下标 3 和下标 5 处的 'e' 都离它最近，但距离是一样的 abs(4 - 3) == abs(4 - 5) = 1 。
 * 距下标 8 最近的 'e' 出现在下标 6 ，所以距离为 abs(8 - 6) = 2 。
 *
 * 示例 2：
 * 输入：s = "aaab", c = "b"
 * 输出：[3,2,1,0]
 *
 * 提示：
 * 1 <= s.length <= 104
 * s[i] 和 c 均为小写英文字母
 * 题目数据保证 c 在 s 中至少出现一次
 * */
const shortestToChar = (s, c) => {
    // 方法1：
    // let len = s.length;
    // let charIndex = [], result = [];
    // for (let i = 0; i < len; i++) {
    //     if(s[i] === c) {
    //         charIndex.push(i)
    //     }
    // }
    // for (let i = 0; i < len; i++) {
    //     let count = len;
    //     for (let j = 0; j < charIndex.length; j++) {
    //         if(Math.abs(charIndex[j] - i) < count) {
    //             count = Math.abs(charIndex[j] - i)
    //         }
    //     }
    //     result.push(count)
    // }
    // return result;

    // 方法2：
    let ret = [];
    let p = s.indexOf(c);
    let q = s.indexOf(c, p + 1);
    for (let i = 0; i < s.length; i++) {
        if (q === -1) {
            ret[i] = Math.abs(i - p);
        } else if (i <= p) {
            ret[i] = p - i;
        } else if (i > p && i < q) {
            ret[i] = Math.min(i - p, q - i);
        } else if (i === q) {
            ret[i] = 0;
            p = q;
            q = s.indexOf(c, p + 1); // 当匹配到最后一个 c 的时候，q 则等于 s.length
        }
    }
    return ret;
}
// console.log(shortestToChar('loveleetcode', 'e'))

/**
 * 832. 翻转图像
 *
 * 给定一个 n x n 的二进制矩阵 image ，先 水平 翻转图像，然后 反转 图像并返回 结果 。
 *
 * 水平翻转图片就是将图片的每一行都进行翻转，即逆序。
 *
 * 例如，水平翻转 [1,1,0] 的结果是 [0,1,1]。
 * 反转图片的意思是图片中的 0 全部被 1 替换， 1 全部被 0 替换。
 *
 * 例如，反转 [0,1,1] 的结果是 [1,0,0]。
 *
 * 示例 1：
 * 输入：image = [[1,1,0],[1,0,1],[0,0,0]]
 * 输出：[[1,0,0],[0,1,0],[1,1,1]]
 * 解释：首先翻转每一行: [[0,1,1],[1,0,1],[0,0,0]]；
 *      然后反转图片: [[1,0,0],[0,1,0],[1,1,1]]
 *
 * 示例 2：
 * 输入：image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
 * 输出：[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
 * 解释：首先翻转每一行: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]]；
 *      然后反转图片: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
 *
 * 提示：
 * n == image.length
 * n == image[i].length
 * 1 <= n <= 20
 * images[i][j] == 0 或 1.
 * */
const flipAndInvertImage = (image) => {
    // return image.map(item => item.reverse().map(item => item ^ 1))
    return image.map(item => item.reverse().map(item => item === 0 ? 1 : 0))
}
// console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))

/**
 * 860. 柠檬水找零
 *
 * 在柠檬水摊上，每一杯柠檬水的售价为 5 美元。顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。
 * 每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。
 * 注意，一开始你手头没有任何零钱。
 * 给你一个整数数组 bills ，其中 bills[i] 是第 i 位顾客付的账。如果你能给每位顾客正确找零，返回 true ，否则返回 false 。
 *
 * 示例 1：
 * 输入：bills = [5,5,5,10,20]
 * 输出：true
 * 解释：
 * 前 3 位顾客那里，我们按顺序收取 3 张 5 美元的钞票。
 * 第 4 位顾客那里，我们收取一张 10 美元的钞票，并返还 5 美元。
 * 第 5 位顾客那里，我们找还一张 10 美元的钞票和一张 5 美元的钞票。
 * 由于所有客户都得到了正确的找零，所以我们输出 true。
 *
 * 示例 2：
 * 输入：bills = [5,5,10,10,20]
 * 输出：false
 * 解释：
 * 前 2 位顾客那里，我们按顺序收取 2 张 5 美元的钞票。
 * 对于接下来的 2 位顾客，我们收取一张 10 美元的钞票，然后返还 5 美元。
 * 对于最后一位顾客，我们无法退回 15 美元，因为我们现在只有两张 10 美元的钞票。
 * 由于不是每位顾客都得到了正确的找零，所以答案是 false。
 *
 * 提示：
 * 1 <= bills.length <= 105
 * bills[i] 不是 5 就是 10 或是 20
 * */
const lemonadeChange = (bills) => {
    let five = 0, ten = 0;
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            five++;
        } else if (bills[i] === 10) {
            if (five === 0) return false
            five--;
            ten++;
        } else {
            if (five > 0 && ten > 0) {
                five--;
                ten--;
            } else if (five >= 3) {
                five -= 3
            } else {
                return false;
            }
        }
    }
    return true;
}
// console.log(lemonadeChange([5,5,5,10,20]))

/**
 * 888. 公平的糖果交换
 *
 * 爱丽丝和鲍勃拥有不同总数量的糖果。给你两个数组 aliceSizes 和 bobSizes ，aliceSizes[i] 是爱丽丝拥有的第 i 盒糖果中的糖果数量，bobSizes[j] 是鲍勃拥有的第 j 盒糖果中的糖果数量。
 *
 * 两人想要互相交换一盒糖果，这样在交换之后，他们就可以拥有相同总数量的糖果。一个人拥有的糖果总数量是他们每盒糖果数量的总和。
 *
 * 返回一个整数数组 answer，其中 answer[0] 是爱丽丝必须交换的糖果盒中的糖果的数目，answer[1] 是鲍勃必须交换的糖果盒中的糖果的数目。如果存在多个答案，你可以返回其中 任何一个 。题目测试用例保证存在与输入对应的答案。
 *
 * 示例 1：
 * 输入：aliceSizes = [1,1], bobSizes = [2,2]
 * 输出：[1,2]
 *
 * 示例 2：
 * 输入：aliceSizes = [1,2], bobSizes = [2,3]
 * 输出：[1,2]
 *
 * 示例 3：
 * 输入：aliceSizes = [2], bobSizes = [1,3]
 * 输出：[2,3]
 *
 * 示例 4：
 * 输入：aliceSizes = [1,2,5], bobSizes = [2,4]
 * 输出：[5,4]
 *
 * 提示：
 * 1 <= aliceSizes.length, bobSizes.length <= 104
 * 1 <= aliceSizes[i], bobSizes[j] <= 105
 * 爱丽丝和鲍勃的糖果总数量不同。
 * 题目数据保证对于给定的输入至少存在一个有效答案。
 * */
const fairCandySwap = (aliceSizes, bobSizes) => {
    // 方法1：
    // let aCount = aliceSizes.reduce((x, y) => x + y, 0)
    // let bCount = bobSizes.reduce((x, y) => x + y, 0)
    // console.log(aCount, bCount)
    // for (let i = 0; i < aliceSizes.length; i++) {
    //     for (let j = 0; j < bobSizes.length; j++) {
    //         if(aCount - aliceSizes[i] + bobSizes[j] === bCount - bobSizes[j] + aliceSizes[i]) {
    //             return [aliceSizes[i], bobSizes[j]]
    //         }
    //     }
    // }

    // 方法2：
    let sumAlice = aliceSizes.reduce((cur, acc) => cur + acc, 0);
    let sumBob = bobSizes.reduce((cur, acc) => cur + acc, 0);
    const target = (sumAlice - sumBob) / 2; // 获取两个数组的差值
    const setB = new Set(bobSizes);
    // 遍历 aliceSizes，找到一个 bobSizes 中存在的值，与 target 相减，如果 setB 中存在，则返回
    for (let candy of aliceSizes) {
        const complement = candy - target;
        if (setB.has(complement)) {
            return [candy, complement];
        }
    }
}
// console.log(fairCandySwap([1, 2, 5], [2, 4]))

/**
 * 896. 单调数列
 *
 * 如果数组是单调递增或单调递减的，那么它是 单调 的。
 *
 * 如果对于所有 i <= j，nums[i] <= nums[j]，那么数组 nums 是单调递增的。 如果对于所有 i <= j，nums[i]> = nums[j]，那么数组 nums 是单调递减的。
 *
 * 当给定的数组 nums 是单调数组时返回 true，否则返回 false。
 *
 * 示例 1：
 * 输入：nums = [1,2,2,3]
 * 输出：true
 *
 * 示例 2：
 * 输入：nums = [6,5,4,4]
 * 输出：true
 *
 * 示例 3：
 * 输入：nums = [1,3,2]
 * 输出：false
 *
 * 提示：
 * 1 <= nums.length <= 105
 * -105 <= nums[i] <= 105
 * */
const isMonotonic = (nums) => {
    // 方法一：丑陋
    // let len = nums.length;
    // if (len < 3) return true;
    // if (new Set(nums).size === 1) return true;
    // let flag = ''; // increase 增   decrease 减
    // for (let i = 1; i < len; i++) {
    //     console.log(nums[i] - nums[i - 1], 's')
    //     if (nums[i] - nums[i - 1] < 0) {
    //         flag = 'decrease'
    //         break;
    //     } else if (nums[i] - nums[i - 1] > 0) {
    //         flag = 'increase'
    //         break;
    //     }
    // }
    // for (let i = 1; i < len; i++) {
    //     if (flag === 'increase') {
    //         if (nums[i] - nums[i - 1] < 0) return false;
    //     } else if (flag === 'decrease') {
    //         if (nums[i] - nums[i - 1] > 0) return false;
    //     }
    // }
    // return true;

    // 方法2：
    const len = nums.length;
    let state = 0;
    for (let i = 1; i < len; i++) {
        if (nums[i - 1] > nums[i]) {
            if (state === 0) {
                state = -1
            } else if (state === 1) {
                return false;
            }
        } else if (nums[i - 1] < nums[i]) {
            if (state === 0) {
                state = 1
            } else if (state === -1) {
                return false
            }
        }
    }
    return true;
}
// console.log(isMonotonic([1, 2 , 2, 3]))

/**
 * 905. 按奇偶排序数组
 *
 * 给你一个整数数组 nums，将 nums 中的的所有偶数元素移动到数组的前面，后跟所有奇数元素。
 * 返回满足此条件的 任一数组 作为答案。
 *
 * 示例 1：
 * 输入：nums = [3,1,2,4]
 * 输出：[2,4,3,1]
 * 解释：[4,2,3,1]、[2,4,1,3] 和 [4,2,1,3] 也会被视作正确答案。
 *
 * 示例 2：
 * 输入：nums = [0]
 * 输出：[0]
 *
 * 提示：
 * 1 <= nums.length <= 5000
 * 0 <= nums[i] <= 5000
 * */
const sortArrayByParity = (nums) => {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            result.unshift(nums[i])
        } else {
            result.push(nums[i])
        }
    }
    return result;
}
// console.log(sortArrayByParity([3,1,2,4]))

/**
 * 908. 最小差值 I
 *
 * 给你一个整数数组 nums，和一个整数 k 。
 * 在一个操作中，您可以选择 0 <= i < nums.length 的任何索引 i 。将 nums[i] 改为 nums[i] + x ，其中 x 是一个范围为 [-k, k] 的整数。对于每个索引 i ，最多 只能 应用 一次 此操作。
 * nums 的 分数 是 nums 中最大和最小元素的差值。
 * 在对  nums 中的每个索引最多应用一次上述操作后，返回 nums 的最低 分数 。
 *
 * 示例 1：
 * 输入：nums = [1], k = 0
 * 输出：0
 * 解释：分数是 max(nums) - min(nums) = 1 - 1 = 0。
 * 示例 2：
 *
 * 输入：nums = [0,10], k = 2
 * 输出：6
 * 解释：将 nums 改为 [2,8]。分数是 max(nums) - min(nums) = 8 - 2 = 6。
 *
 * 示例 3：
 * 输入：nums = [1,3,6], k = 3
 * 输出：0
 * 解释：将 nums 改为 [4,4,4]。分数是 max(nums) - min(nums) = 4 - 4 = 0。
 *
 * 提示：
 * 1 <= nums.length <= 104
 * 0 <= nums[i] <= 104
 * 0 <= k <= 104
 * */
const smallestRangeI = (nums, k) => {
    let target = k * 2;
    nums.sort((a, b) => a - b);
    let min = nums[0], max = nums[nums.length - 1];
    if (max - min < target) return 0
    return max - min - target;
}
// console.log(smallestRangeI([1, 3, 6], 3))

/**
 * 914. 卡牌分组
 *
 * 给定一副牌，每张牌上都写着一个整数。
 *
 * 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
 *  每组都有 X 张牌。
 *  组内所有的牌上都写着相同的整数。
 *
 * 仅当你可选的 X >= 2 时返回 true。
 *
 * 示例 1：
 * 输入：deck = [1,2,3,4,4,3,2,1]
 * 输出：true
 * 解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
 *
 * 示例 2：
 * 输入：deck = [1,1,1,2,2,2,3,3]
 * 输出：false
 * 解释：没有满足要求的分组。
 *
 * 提示：
 * 1 <= deck.length <= 104
 * 0 <= deck[i] < 104
 * */
const hasGroupsSizeX = (deck) => {
    let map = new Map();
    for (let i = 0; i < deck.length; i++) {
        if (!map.has(deck[i])) {
            map.set(deck[i], 1);
        } else {
            map.set(deck[i], map.get(deck[i]) + 1)
        }
    }
    const vals = Array.from(new Set(map.values()));
    let min = vals[0];
    for (let i = 1; i < vals.length; i++) {
        min = gcd(min, vals[i])
    }

    // 获取最大公约数
    function gcd(a, b) {
        return b !== 0 ? gcd(b, a % b) : a;
    }

    return min >= 2;
    // const res = new Set(vals);
    // // 解构获取 set 对象的第一个元素
    // const [first] = res;
    // console.log(first, 'first')
    // return res.size === 1 && first >= 2;
}
// console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1]))
// console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3]))
// console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3,3]))
// console.log(hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2]))

/**
 * 922. 按奇偶排序数组 II
 *
 * 给定一个非负整数数组 nums，  nums 中一半整数是 奇数 ，一半整数是 偶数 。
 * 对数组进行排序，以便当 nums[i] 为奇数时，i 也是 奇数 ；当 nums[i] 为偶数时， i 也是 偶数 。
 * 你可以返回 任何满足上述条件的数组作为答案 。
 *
 * 示例 1：
 * 输入：nums = [4,2,5,7]
 * 输出：[4,5,2,7]
 * 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
 *
 * 示例 2：
 * 输入：nums = [2,3]
 * 输出：[2,3]
 *
 * 提示：
 * 2 <= nums.length <= 2 * 104
 * nums.length 是偶数
 * nums 中一半是偶数
 * 0 <= nums[i] <= 1000
 * */
const sortArrayByParityII = (nums) => {
    let odd = [], even = [], result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            even.push(nums[i])
        } else {
            odd.push(nums[i])
        }
    }
    for (let i = 0; i < odd.length; i++) {
        result.push(even[i], odd[i])
    }
    return result;
}
// console.log(sortArrayByParityII([4,2,5,7]))

/**
 * 929. 独特的电子邮件地址
 *
 * 每个 有效电子邮件地址 都由一个 本地名 和一个 域名 组成，以 '@' 符号分隔。除小写字母之外，电子邮件地址还可以含有一个或多个 '.' 或 '+' 。
 *
 * 例如，在 alice@leetcode.com中， alice 是 本地名 ，而 leetcode.com 是 域名 。
 * 如果在电子邮件地址的 本地名 部分中的某些字符之间添加句点（'.'），则发往那里的邮件将会转发到本地名中没有点的同一地址。请注意，此规则 不适用于域名 。
 *
 * 例如，"alice.z@leetcode.com” 和 “alicez@leetcode.com” 会转发到同一电子邮件地址。
 * 如果在 本地名 中添加加号（'+'），则会忽略第一个加号后面的所有内容。这允许过滤某些电子邮件。同样，此规则 不适用于域名 。
 *
 * 例如 m.y+name@email.com 将转发到 my@email.com。
 * 可以同时使用这两个规则。
 *
 * 给你一个字符串数组 emails，我们会向每个 emails[i] 发送一封电子邮件。返回实际收到邮件的不同地址数目。
 *
 * 示例 1：
 * 输入：emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
 * 输出：2
 * 解释：实际收到邮件的是 "testemail@leetcode.com" 和 "testemail@lee.tcode.com"。
 *
 * 示例 2：
 * 输入：emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
 * 输出：3
 *
 * 提示：
 * 1 <= emails.length <= 100
 * 1 <= emails[i].length <= 100
 * emails[i] 由小写英文字母、'+'、'.' 和 '@' 组成
 * 每个 emails[i] 都包含有且仅有一个 '@' 字符
 * 所有本地名和域名都不为空
 * 本地名不会以 '+' 字符作为开头
 * */
const numUniqueEmails = (emails) => {
    let len = emails.length;
    for (let i = 0; i < len; i++) {
        emails[i] = emailRule(emails[i]);
    }

    function emailRule(strs) {
        let idx1 = strs.indexOf('@');
        let idx2 = strs.indexOf('+');
        let domainName = strs.slice(idx1 + 1);
        let localityName = '';
        if (idx2 > 0) {
            localityName = strs.slice(0, idx2);
        } else {
            localityName = strs.slice(0, idx1);
        }
        const name = localityName.replace(/[.]/g, "")
        return name + '@' + domainName
    }

    return Array.from(new Set(emails)).length
}
// console.log(numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]))

/**
 * 941. 有效的山脉数组
 *
 * 给定一个整数数组 arr，如果它是有效的山脉数组就返回 true，否则返回 false。
 *
 * 让我们回顾一下，如果 arr 满足下述条件，那么它是一个山脉数组：
 *
 * arr.length >= 3
 * 在 0 < i < arr.length - 1 条件下，存在 i 使得：
 * arr[0] < arr[1] < ... arr[i-1] < arr[i]
 * arr[i] > arr[i+1] > ... > arr[arr.length - 1]
 *
 * 示例 1：
 * 输入：arr = [2,1]
 * 输出：false
 *
 * 示例 2：
 * 输入：arr = [3,5,5]
 * 输出：false
 *
 * 示例 3：
 * 输入：arr = [0,3,2,1]
 * 输出：true
 *
 * 提示：
 * 1 <= arr.length <= 104
 * 0 <= arr[i] <= 104
 * */
const validMountainArray = (arr) => {
    // 方法1：
    // let len = arr.length;
    // if (len <= 2) return false;
    // let maxIdx = arr.indexOf(Math.max(...arr));
    // if (maxIdx === 0 || maxIdx === arr.length - 1) return false;
    // let left = false, right = false;
    // for (let i = 1; i <= maxIdx; i++) {
    //     if (arr[i] - arr[i - 1] <= 0) {
    //         left = true;
    //     }
    // }
    // for (let i = maxIdx + 1; i < len; i++) {
    //     if (arr[i] - arr[i - 1] >= 0) {
    //         right = true;
    //     }
    // }
    // return !(left || right);

    // 方法2：
    let len = arr.length;
    if (len <= 2) return false;
    let left = 0, right = len - 1;
    while (left < len && arr[left] < arr[left + 1]) {
        left++;
    }
    while (right > 0 && arr[right + 1] > arr[right]) {
        right++;
    }
    return !(left === 0 || right === len - 1 || left === right)
}
// console.log(validMountainArray([3, 5, 5]))
// console.log(validMountainArray([3, 5, 5]))
// console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9]))

/**
 * 942. 增减字符串匹配
 *
 * 由范围 [0,n] 内所有整数组成的 n + 1 个整数的排列序列可以表示为长度为 n 的字符串 s ，其中:
 * 如果 perm[i] < perm[i + 1] ，那么 s[i] == 'I'
 * 如果 perm[i] > perm[i + 1] ，那么 s[i] == 'D'
 * 给定一个字符串 s ，重构排列 perm 并返回它。如果有多个有效排列perm，则返回其中 任何一个 。
 *
 * 示例 1：
 * 输入：s = "IDID"
 * 输出：[0,4,1,3,2]
 *
 * 示例 2：
 * 输入：s = "III"
 * 输出：[0,1,2,3]
 *
 * 示例 3：
 * 输入：s = "DDI"
 * 输出：[3,2,0,1]
 *
 * 提示：
 * 1 <= s.length <= 105
 * s 只包含字符 "I" 或 "D"
 * */
const diStringMatch = (s) => {
    let maxCount = s.length, minCount = 0;
    let result = [];
    for (let i = 0; i < s.length; i++) {
        s[i] === 'I' ? result.push(minCount++) : result.push(maxCount--);
    }
    result[s.length - 1] === 'I' ? result.push(minCount) : result.push(maxCount)
    return result;
}
// console.log(diStringMatch('IDID'))

/**
 * 944. 删列造序
 *
 * 给你由 n 个小写字母字符串组成的数组 strs，其中每个字符串长度相等。
 *
 * 这些字符串可以每个一行，排成一个网格。例如，strs = ["abc", "bce", "cae"] 可以排列为：
 *
 * abc
 * bce
 * cae
 * 你需要找出并删除 不是按字典序升序排列的 列。在上面的例子（下标从 0 开始）中，列 0（'a', 'b', 'c'）和列 2（'c', 'e', 'e'）都是按升序排列的，而列 1（'b', 'c', 'a'）不是，所以要删除列 1 。
 *
 * 返回你需要删除的列数。
 *
 * 示例 1：
 * 输入：strs = ["cba","daf","ghi"]
 * 输出：1
 * 解释：网格示意如下：
 *   cba
 *   daf
 *   ghi
 * 列 0 和列 2 按升序排列，但列 1 不是，所以只需要删除列 1 。
 *
 * 示例 2：
 * 输入：strs = ["a","b"]
 * 输出：0
 * 解释：网格示意如下：
 *   a
 *   b
 * 只有列 0 这一列，且已经按升序排列，所以不用删除任何列。
 *
 * 示例 3：
 * 输入：strs = ["zyx","wvu","tsr"]
 * 输出：3
 * 解释：网格示意如下：
 *   zyx
 *   wvu
 *   tsr
 * 所有 3 列都是非升序排列的，所以都要删除。
 *
 * 提示：
 * n == strs.length
 * 1 <= n <= 100
 * 1 <= strs[i].length <= 1000
 * strs[i] 由小写英文字母组成
 * */
const minDeletionSize = (strs) => {
    // 方法1：
    // let arr = []
    // for (let i = 0; i < strs.length - 1; i++) {
    //     let str1 = strs[i];
    //     let str2 = strs[i + 1];
    //     for (let j = 0; j < str1.length; j++) {
    //         if(str1[j].charCodeAt() > str2[j].charCodeAt()) {
    //             arr[j] = 1
    //         }
    //     }
    // }
    // return arr.filter(item => item === 1).length;

    // 方法2：
    // let rows = strs.length, cols = strs[0].length;
    // let count = 0;
    // for (let col = 0; col < cols; col++) { // 按列
    //     for (let row = 1; row < rows; row++) { // 按行
    //         if (strs[row][col] < strs[row - 1][col]) {
    //             count++;
    //             break;
    //         }
    //     }
    // }
    // return count;
}
// console.log(minDeletionSize(["rrjk","furt","guzm"]));
// console.log(minDeletionSize(["zz","yy","xx"]));
// console.log(minDeletionSize(["zyx","wvu","tsr"]));

/**
 * 961. 在长度 2N 的数组中找出重复 N 次的元素
 *
 * 给你一个整数数组 nums ，该数组具有以下属性：
 *
 * nums.length == 2 * n.
 * nums 包含 n + 1 个 不同的 元素
 * nums 中恰有一个元素重复 n 次
 * 找出并返回重复了 n 次的那个元素。
 *
 * 示例 1：
 * 输入：nums = [1,2,3,3]
 * 输出：3
 *
 * 示例 2：
 * 输入：nums = [2,1,2,5,3,2]
 * 输出：2
 *
 * 示例 3：
 * 输入：nums = [5,1,5,2,5,3,5,4]
 * 输出：5
 *
 * 提示：
 * 2 <= n <= 5000
 * nums.length == 2 * n
 * 0 <= nums[i] <= 104
 * nums 由 n + 1 个 不同的 元素组成，且其中一个元素恰好重复 n 次
 * */
const repeatedNTimes = (nums) => {
    let resultMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (resultMap.has(nums[i])) {
            return nums[i]
        } else {
            resultMap.set(nums[i], 1)
        }
    }
    return result;
}
// console.log(repeatedNTimes([5,1,5,2,5,3,5,4]))

/**
 * 976. 三角形的最大周长
 *
 * 给定由一些正数（代表长度）组成的数组 nums ，返回 由其中三个长度组成的、面积不为零的三角形的最大周长 。如果不能形成任何面积不为零的三角形，返回 0。
 *
 * 示例 1：
 * 输入：nums = [2,1,2]
 * 输出：5
 * 解释：你可以用三个边长组成一个三角形:1 2 2。
 *
 * 示例 2：
 * 输入：nums = [1,2,1,10]
 * 输出：0
 * 解释：
 * 你不能用边长 1,1,2 来组成三角形。
 * 不能用边长 1,1,10 来构成三角形。
 * 不能用边长 1、2 和 10 来构成三角形。
 * 因为我们不能用任何三条边长来构成一个非零面积的三角形，所以我们返回 0。
 *
 * 提示：
 * 3 <= nums.length <= 104
 * 1 <= nums[i] <= 106
 * */
const largestPerimeter = (nums) => {
    nums.sort((a, b) => b - a);
    let count = 0;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i - 2] < nums[i - 1] + nums[i]) {
            count = nums[i - 2] + nums[i - 1] + nums[i]
            break;
        }
    }
    return count;
}
// console.log(largestPerimeter([3, 2 , 3, 4]))

/**
 * 977. 有序数组的平方
 *
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 *
 * 示例 1：
 * 输入：nums = [-4,-1,0,3,10]
 * 输出：[0,1,9,16,100]
 * 解释：平方后，数组变为 [16,1,0,9,100]
 * 排序后，数组变为 [0,1,9,16,100]
 *
 * 示例 2：
 * 输入：nums = [-7,-3,2,3,11]
 * 输出：[4,9,9,49,121]
 *
 *
 * 提示：
 * 1 <= nums.length <= 104
 * -104 <= nums[i] <= 104
 * nums 已按 非递减顺序 排序
 * */
const sortedSquares = (nums) => {
    // 方法1：
    // let result = [];
    // for (let i = 0; i < nums.length; i++) {
    //     result.push(nums[i] * nums[i])
    // }
    // return result.sort((a, b) => a - b);

    // 方法2：
    let n = nums.length;
    let left = 0, right = n - 1, k = n - 1;
    let result = [];
    while (left <= right) {
        if (Math.abs(nums[left]) >= Math.abs(nums[right])) {
            result[k] = nums[left] * nums[left];
            left++;
        } else {
            result[k] = nums[right] * nums[right];
            right--;
        }
        k--;
    }
    return result;
}
// console.log(sortedSquares([-4,-1,0,3,10]))

/**
 * 989. 数组形式的整数加法
 *
 * 整数的 数组形式  num 是按照从左到右的顺序表示其数字的数组。
 *
 * 例如，对于 num = 1321 ，数组形式是 [1,3,2,1] 。
 * 给定 num ，整数的 数组形式 ，和整数 k ，返回 整数 num + k 的 数组形式 。
 *
 * 示例 1：
 * 输入：num = [1,2,0,0], k = 34
 * 输出：[1,2,3,4]
 * 解释：1200 + 34 = 1234
 *
 * 示例 2：
 * 输入：num = [2,7,4], k = 181
 * 输出：[4,5,5]
 * 解释：274 + 181 = 455
 *
 * 示例 3：
 * 输入：num = [2,1,5], k = 806
 * 输出：[1,0,2,1]
 * 解释：215 + 806 = 1021
 *
 * 提示：
 * 1 <= num.length <= 104
 * 0 <= num[i] <= 9
 * num 不包含任何前导零，除了零本身
 * 1 <= k <= 104
 * */
const addToArrayForm = (num, k) => {
    let count = BigInt(num.join(''))
    let res = (count + BigInt(k)).toString()
    let arr = []
    for (let i = 0; i < res.length; i++) {
        arr.push(Number(res[i]))
    }
    return arr
}
// console.log(addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516))

/**
 * 997. 找到小镇的法官
 *
 * 小镇里有 n 个人，按从 1 到 n 的顺序编号。传言称，这些人中有一个暗地里是小镇法官。
 *
 * 如果小镇法官真的存在，那么：
 *
 * 小镇法官不会信任任何人。
 * 每个人（除了小镇法官）都信任这位小镇法官。
 * 只有一个人同时满足属性 1 和属性 2 。
 * 给你一个数组 trust ，其中 trust[i] = [ai, bi] 表示编号为 ai 的人信任编号为 bi 的人。
 *
 * 如果小镇法官存在并且可以确定他的身份，请返回该法官的编号；否则，返回 -1 。
 *
 * 示例 1：
 * 输入：n = 2, trust = [[1,2]]
 * 输出：2
 *
 * 示例 2：
 * 输入：n = 3, trust = [[1,3],[2,3]]
 * 输出：3
 *
 * 示例 3：
 * 输入：n = 3, trust = [[1,3],[2,3],[3,1]]
 * 输出：-1
 *
 * 提示：
 * 1 <= n <= 1000
 * 0 <= trust.length <= 104
 * trust[i].length == 2
 * trust 中的所有trust[i] = [ai, bi] 互不相同
 * ai != bi
 * 1 <= ai, bi <= n
 * */
const findJudge = (n, trust) => {
    // if(trust.length === 1) return trust[0][1];
    // if(n === 1) return 1;
    // let map = new Map();
    // for (let i = 0; i < trust.length; i++) {
    //     if(!map.has(trust[i][1])) {
    //         map.set(trust[i][1], 1)
    //     } else {
    //         map.set(trust[i][1], map.get(trust[i][1]) + 1)
    //     }
    // }
    // // 获取每个人被信任的次数，需要满足以下条件
    // // 1、次数不能出现相同的，否则返回 -1
    // // 2、最大次数必须等于小镇人数 n - 1，因为 每个人（除了小镇法官）都信任这位小镇法官。
    // // 3、获取最大次数对应小镇人编号，并且该编号不能出现在 trust[i][0] 中，因为 小镇法官不会信任任何人
    // let arr = Array.from(map.values()).sort((a, b) => b - a);
    // if (arr[0] === arr[1] || arr[0] !== n - 1) return -1;
    // let judge = undefined;
    // map.forEach((value, key) => {
    //     if(value === arr[0]) {
    //         judge = key
    //     }
    // })
    // for (let i = 0; i < trust.length; i++) {
    //     if (trust[i][0] === judge) return -1;
    // }
    // return judge;

    // 方法2：有问题
    // 1、统计每个人信任别人的次数，如果存在一个人被信任的次数为 n - 1，则该人就是法官
    // 2、如果存在多个法官，则返回 -1
    // if(trust.length === n) return -1;
    // let arr = new Array(n).fill(0);
    // for (let i = 0; i < trust.length; i++) {
    //     arr[trust[i][1] - 1]++
    // }
    // for (let i = 0; i < trust.length; i++) {
    //     arr[trust[i][0] - 1]--
    // }
    // console.log(arr)
    // let res = arr.indexOf(n - 1);
    // console.log(res, 'res')
    // res = (res !== -1) ? res + 1 : -1;
    // return res;
}
// console.log(findJudge(3, [[1,3],[2,3],[1,2]])) // 方法2 输出和方法一输出不统一

/**
 * 1002. 查找共用字符
 *
 * 给你一个字符串数组 words ，请你找出所有在 words 的每个字符串中都出现的共用字符（ 包括重复字符），并以数组形式返回。你可以按 任意顺序 返回答案。
 *
 * 示例 1：
 * 输入：words = ["bella","label","roller"]
 * 输出：["e","l","l"]
 *
 * 示例 2：
 * 输入：words = ["cool","lock","cook"]
 * 输出：["c","o"]
 *
 * 提示：
 * 1 <= words.length <= 100
 * 1 <= words[i].length <= 100
 * words[i] 由小写英文字母组成
 * */
const commonChars = (words) => {
    let res = [], word = words[0];
    for (let s of word) {
        if (words.every(item => item.includes(s))) {
            words = words.map(item => item.replace(s, ''))
            console.log(s, 'sssss')
            console.log(words, 'wordss')
            res.push(s)
        }
    }
    return res;
    // let result = [];
    // let mapStr = new Map();
    // let word = words[0];
    // for (let i = 0; i < word.length; i++) {
    //     if(!mapStr.has(word[i])) {
    //         mapStr.set(word[i], 1)
    //     } else {
    //         mapStr.set(word[i], mapStr.get(word[i]) + 1)
    //     }
    // }
}
// console.log(commonChars(["bella","label","roller"]))

/**
 * 1005. K 次取反后最大化的数组和
 *
 * 给你一个整数数组 nums 和一个整数 k ，按以下方法修改该数组：
 *
 * 选择某个下标 i 并将 nums[i] 替换为 -nums[i] 。
 * 重复这个过程恰好 k 次。可以多次选择同一个下标 i 。
 *
 * 以这种方式修改数组后，返回数组 可能的最大和 。
 *
 * 示例 1：
 * 输入：nums = [4,2,3], k = 1
 * 输出：5
 * 解释：选择下标 1 ，nums 变为 [4,-2,3] 。
 *
 * 示例 2：
 * 输入：nums = [3,-1,0,2], k = 3
 * 输出：6
 * 解释：选择下标 (1, 2, 2) ，nums 变为 [3,1,0,2] 。
 *
 * 示例 3：
 * 输入：nums = [2,-3,-1,5,-4], k = 2
 * 输出：13
 * 解释：选择下标 (1, 4) ，nums 变为 [2,3,-1,5,4] 。
 *
 * 提示：
 * 1 <= nums.length <= 104
 * -100 <= nums[i] <= 100
 * 1 <= k <= 104
 * */
const largestSumAfterKNegations = (nums, k) => {
    const len = nums.length;
    if (k > len) {
        nums.sort((a, b) => Math.abs(a) - Math.abs(b))
        let x = k - nums.filter(item => item < 0).length;
        if (x % 2 === 0) {
            return nums.reduce((a, b) => Math.abs(a) + Math.abs(b), 0)
        } else {
            return nums.reduce((a, b) => Math.abs(a) + Math.abs(b)) - (Math.abs(nums[0]) * 2)
        }
    } else {
        nums.sort((a, b) => a - b);
        for (let i = 0; i < len; i++) {
            if (nums[i] < 0 && k > 0) {
                nums[i] = -nums[i];
                k--;
            } else if (nums[i] === 0) {
                k = 0;
            } else if (nums[i] > 0 && k > 0) {
                if (k % 2 === 1) {
                    nums.sort((a, b) => a - b);
                    nums[0] = -nums[0];
                }
                k = 0;
            }
        }
        return nums.reduce((a, b) => a + b)
    }
}
// console.log(largestSumAfterKNegations([-4,-2,-3], 4));

/**
 * 1013. 将数组分成和相等的三个部分
 *
 * 给你一个整数数组 arr，只有可以将其划分为三个和相等的 非空 部分时才返回 true，否则返回 false。
 *
 * 形式上，如果可以找出索引 i + 1 < j 且满足 (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1]) 就可以将数组三等分。
 *
 * 示例 1：
 * 输入：arr = [0,2,1,-6,6,-7,9,1,2,0,1]
 * 输出：true
 * 解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
 *
 * 示例 2：
 * 输入：arr = [0,2,1,-6,6,7,9,-1,2,0,1]
 * 输出：false
 *
 * 示例 3：
 * 输入：arr = [3,3,6,5,-2,2,5,1,-9,4]
 * 输出：true
 * 解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
 *
 * 提示：
 * 3 <= arr.length <= 5 * 104
 * -104 <= arr[i] <= 104
 * */
const canThreePartsEqualSum = (arr) => {
    // 方法1：
    // let count = arr.reduce((a, b) => a + b, 0)
    // if (count % 3 !== 0) return false;
    // let sum = 0, part = count / 3;
    // let res = 0
    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i];
    //     if (sum === part) {
    //         sum = 0;
    //         res++
    //     }
    // }
    // return res >= 3

    // 方法2：
    let sum = 0
    for (const val of arr) {
        sum += val;
    }
    if (sum % 3 !== 0) return false;
    let left = 0, right = arr.length - 1;
    let leftSum = arr[left], rightSum = arr[right];
    const avNum = sum / 3;
    while (left + 1 < right) {
        if (leftSum === avNum && rightSum === avNum) {
            return true
        }
        if (leftSum !== avNum) {
            left++
            leftSum += arr[left]
        }
        if (rightSum !== avNum) {
            right++
            rightSum += arr[right]
        }
    }
    return false;
}
// console.log(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1]))

/**
 * 1018. 可被 5 整除的二进制前缀
 *
 * 给定一个二进制数组 nums ( 索引从0开始 )。
 *
 * 我们将xi 定义为其二进制表示形式为子数组 nums[0..i] (从最高有效位到最低有效位)。
 *
 * 例如，如果 nums =[1,0,1] ，那么 x0 = 1, x1 = 2, 和 x2 = 5。
 * 返回布尔值列表 answer，只有当 xi 可以被 5 整除时，答案 answer[i] 为 true，否则为 false。
 *
 * 示例 1：
 * 输入：nums = [0,1,1]
 * 输出：[true,false,false]
 * 解释：
 * 输入数字为 0, 01, 011；也就是十进制中的 0, 1, 3 。只有第一个数可以被 5 整除，因此 answer[0] 为 true 。
 *
 * 示例 2：
 * 输入：nums = [1,1,1]
 * 输出：[false,false,false]
 *
 * 提示：
 * 1 <= nums.length <= 105
 * nums[i] 仅为 0 或 1
 * */
const prefixesDivBy5 = (nums) => {
    let total = 0;
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        // 计算当前二进制转为十进制后取余
        total = (total * 2 + nums[i]) % 10;
        answer.push(total === 0 || total === 5);
    }
    return answer;
}
// console.log(prefixesDivBy5([0,1,1,1,1,1]))

/**
 * 1030. 距离顺序排列矩阵单元格
 *
 * 给定四个整数 rows ,   cols ,  rCenter 和 cCenter 。有一个 rows x cols 的矩阵，你在单元格上的坐标是 (rCenter, cCenter) 。
 *
 * 返回矩阵中的所有单元格的坐标，并按与 (rCenter, cCenter) 的 距离 从最小到最大的顺序排。你可以按 任何 满足此条件的顺序返回答案。
 *
 * 单元格(r1, c1) 和 (r2, c2) 之间的距离为|r1 - r2| + |c1 - c2|。
 *
 * 示例 1：
 * 输入：rows = 1, cols = 2, rCenter = 0, cCenter = 0
 * 输出：[[0,0],[0,1]]
 * 解释：从 (r0, c0) 到其他单元格的距离为：[0,1]
 *
 * 示例 2：
 * 输入：rows = 2, cols = 2, rCenter = 0, cCenter = 1
 * 输出：[[0,1],[0,0],[1,1],[1,0]]
 * 解释：从 (r0, c0) 到其他单元格的距离为：[0,1,1,2]
 * [[0,1],[1,1],[0,0],[1,0]] 也会被视作正确答案。
 *
 * 示例 3：
 * 输入：rows = 2, cols = 3, rCenter = 1, cCenter = 2
 * 输出：[[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]
 * 解释：从 (r0, c0) 到其他单元格的距离为：[0,1,1,2,2,3]
 * 其他满足题目要求的答案也会被视为正确，例如 [[1,2],[1,1],[0,2],[1,0],[0,1],[0,0]]。
 *
 * 提示：
 * 1 <= rows, cols <= 100
 * 0 <= rCenter < rows
 * 0 <= cCenter < cols
 * */
const allCellsDistOrder = (rows, cols, rCenter, cCenter) => {
    // 方法1：
    // let distanceArr = [], result = [];
    // for (let row = 0; row < rows; row++) {
    //     for (let col = 0; col < cols; col++) {
    //         distanceArr.push(
    //             {
    //                 len: Math.abs(row - rCenter) + Math.abs(col - cCenter),
    //                 point: [row, col]
    //             }
    //         )
    //     }
    // }
    // distanceArr.sort((a, b) => a.len - b.len);
    // for (let i = 0; i < distanceArr.length; i++) {
    //     result.push(distanceArr[i].point);
    // }
    // return result;

    // 方法2：
    let res = [];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            res.push([row, col])
        }
    }
    res.sort((a, b) => {
        const x1 = Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter)
        const x2 = Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter)
        return x1 - x2
    })
    return res;
}
// console.log(allCellsDistOrder(2, 3, 0, 1))

/**
 * 1037. 有效的回旋镖
 *
 * 给定一个数组 points ，其中 points[i] = [xi, yi] 表示 X-Y 平面上的一个点，如果这些点构成一个 回旋镖 则返回 true 。
 * 回旋镖 定义为一组三个点，这些点 各不相同 且 不在一条直线上 。
 *
 * 示例 1：
 * 输入：points = [[1,1],[2,3],[3,2]]
 * 输出：true
 *
 * 示例 2：
 * 输入：points = [[1,1],[2,2],[3,3]]
 * 输出：false
 *
 * 提示：
 * points.length == 3
 * points[i].length == 2
 * 0 <= xi, yi <= 100
 * */
const isBoomerang = (points) => {
    return (points[1][[1]] - points[0][1]) * (points[2][[0]] - points[1][0]) !== (points[2][[1]] - points[1][1]) * (points[1][[0]] - points[0][0])

    // 另一个方法：判断三个点是否能构成三角形，如果可以则为有效的回旋镖
    // 三个点能否构成三角形公式：(Ax * (By - Cy) + Bx * (Cy - Ay) + Cx * (Ay - By)) / 2 !== 0
}
// console.log(isBoomerang([[1,1],[1,2],[1,3]]))

/**
 * 1046. 最后一块石头的重量
 *
 * 有一堆石头，每块石头的重量都是正整数。
 *
 * 每一回合，从中选出两块 最重的 石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：
 *
 *  如果 x == y，那么两块石头都会被完全粉碎；
 *  如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
 * 最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0。
 *
 * 示例：
 * 输入：[2,7,4,1,8,1]
 * 输出：1
 * 解释：
 * 先选出 7 和 8，得到 1，所以数组转换为 [2,4,1,1,1]，
 * 再选出 2 和 4，得到 2，所以数组转换为 [2,1,1,1]，
 * 接着是 2 和 1，得到 1，所以数组转换为 [1,1,1]，
 * 最后选出 1 和 1，得到 0，最终数组转换为 [1]，这就是最后剩下那块石头的重量。
 *
 * 提示：
 * 1 <= stones.length <= 30
 * 1 <= stones[i] <= 1000
 * */
const lastStoneWeight = (stones) => {
    while (stones.length > 1) {
        sortArr(stones)
        let a = stones.pop();
        let b = stones.pop();
        if (a !== b) {
            stones.push(Math.abs(a - b));
        }
    }

    function sortArr(arr) {
        return arr.sort((a, b) => a - b);
    }

    return stones[0] || 0;
};
// console.log(lastStoneWeight([2,7,4,1,8,1]))

/**
 * 1051. 高度检查器
 *
 * 学校打算为全体学生拍一张年度纪念照。根据要求，学生需要按照 非递减 的高度顺序排成一行。
 * 排序后的高度情况用整数数组 expected 表示，其中 expected[i] 是预计排在这一行中第 i 位的学生的高度（下标从 0 开始）。
 * 给你一个整数数组 heights ，表示 当前学生站位 的高度情况。heights[i] 是这一行中第 i 位学生的高度（下标从 0 开始）。
 * 返回满足 heights[i] != expected[i] 的 下标数量 。
 *
 * 示例1：
 * 输入：heights = [1,1,4,2,1,3]
 * 输出：3
 * 解释：
 * 高度：[1,1,4,2,1,3]
 * 预期：[1,1,1,2,3,4]
 * 下标 2 、4 、5 处的学生高度不匹配。
 *
 * 示例 2：
 * 输入：heights = [5,1,2,3,4]
 * 输出：5
 * 解释：
 * 高度：[5,1,2,3,4]
 * 预期：[1,2,3,4,5]
 * 所有下标的对应学生高度都不匹配。
 *
 * 示例 3：
 * 输入：heights = [1,2,3,4,5]
 * 输出：0
 * 解释：
 * 高度：[1,2,3,4,5]
 * 预期：[1,2,3,4,5]
 * 所有下标的对应学生高度都匹配。
 *
 * 提示：
 * 1 <= heights.length <= 100
 * 1 <= heights[i] <= 100
 * */
const heightChecker = (heights) => {
    // 不能直接使用 sort 方法排序，因为会改变原数组
    let sort = [...heights].sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sort[i]) {
            console.log(111)
            count++
        }
    }
    return count;
}
// console.log(heightChecker([5,1,2,3,4]))

/**
 * 1089. 复写零
 *
 * 给你一个长度固定的整数数组 arr ，请你将该数组中出现的每个零都复写一遍，并将其余的元素向右平移。
 *
 * 注意：请不要在超过该数组长度的位置写入元素。请对输入的数组 就地 进行上述修改，不要从函数返回任何东西。
 *
 * 示例 1：
 * 输入：arr = [1,0,2,3,0,4,5,0]
 * 输出：[1,0,0,2,3,0,0,4]
 * 解释：调用函数后，输入的数组将被修改为：[1,0,0,2,3,0,0,4]
 *
 * 示例 2：
 * 输入：arr = [1,2,3]
 * 输出：[1,2,3]
 * 解释：调用函数后，输入的数组将被修改为：[1,2,3]
 *
 * 提示：
 * 1 <= arr.length <= 104
 * 0 <= arr[i] <= 9
 * */
const duplicateZeros = (arr) => {
    // 方法1：
    // function overWrite (arr, index) {
    //     for (let i = arr.length - 1; i > index; i--) {
    //         arr[i] = arr[i - 1]
    //     }
    // }
    // for (let i = arr.length - 1; i >= 0; i--) {
    //     if (arr[i] === 0) {
    //         overWrite(arr, i)
    //     }
    // }

    // 方法2：
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            i++;
        }
    }
    while (arr.length > len) {
        arr.pop();
    }
}
// console.log(duplicateZeros([1,0,2,3,0,4,5,0]))

/**
 * 1122. 数组的相对排序
 *
 * 给你两个数组，arr1 和 arr2，arr2 中的元素各不相同，arr2 中的每个元素都出现在 arr1 中。
 *
 * 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。
 *
 * 示例 1：
 * 输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
 * 输出：[2,2,2,1,4,3,3,9,6,7,19]
 *
 * 示例  2:
 * 输入：arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
 * 输出：[22,28,8,6,17,44]
 *
 * 提示：
 * 1 <= arr1.length, arr2.length <= 1000
 * 0 <= arr1[i], arr2[i] <= 1000
 * arr2 中的元素 arr2[i]  各不相同
 * arr2 中的每个元素 arr2[i] 都出现在 arr1 中
 * */
const relativeSortArray = (arr1, arr2) => {
    // 方法1：
    const len1 = arr1.length, len2 = arr2.length;
    let res = [];
    for (let i = 0; i < len2; i++) {
        for (let j = 0; j < len1; j++) {
            if (arr1[j] === arr2[i]) {
                res.push(arr1[j]);
                arr1.splice(j, 1)
                j--;
            }
        }
    }
    return res.concat(arr1.sort((a, b) => a - b))

    // 方法2：
    // const map = new Map();
    // for (let i = 0; i < arr2.length; i++) {
    //     map.set(arr2[i], i);
    // };
    // console.log(map)
    // arr1.sort((x, y) => {
    //     if (map.has(x)) {
    //         console.log(map.get(x), 'xxxxxx')
    //         console.log(map.get(y), 'yyyyyyy')
    //         return map.has(y) ? map.get(x) - map.get(y) : 1;
    //     } else {
    //         return map.has(y) ? 1 : x - y
    //     }
    // })
    // return arr1;
}
// console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))

/**
 * 1128. 等价多米诺骨牌对的数量
 *
 * 给你一个由一些多米诺骨牌组成的列表 dominoes。
 *
 * 如果其中某一张多米诺骨牌可以通过旋转 0 度或 180 度得到另一张多米诺骨牌，我们就认为这两张牌是等价的。
 *
 * 形式上，dominoes[i] = [a, b] 和 dominoes[j] = [c, d] 等价的前提是 a==c 且 b==d，或是 a==d 且 b==c。
 *
 * 在 0 <= i < j < dominoes.length 的前提下，找出满足 dominoes[i] 和 dominoes[j] 等价的骨牌对 (i, j) 的数量。
 *
 * 示例：
 * 输入：dominoes = [[1,2],[2,1],[3,4],[5,6]]
 * 输出：1
 *
 * 提示：
 * 1 <= dominoes.length <= 40000
 * 1 <= dominoes[i][j] <= 9
 * */
const numEquivDominoPairs = (dominoes) => {
    // 方法1：暴力解法
    // let len = dominoes.length;
    // let count = 0;
    // for (let i = 0; i < len; i++) {
    //     for (let j = i + 1; j < len; j++) {
    //         if ((dominoes[i][0] === dominoes[j][0] && dominoes[i][1] === dominoes[j][1]) || (dominoes[i][0] === dominoes[j][1] && dominoes[i][1] === dominoes[j][0])) {
    //             count++;
    //         }
    //     }
    // }
    // return count;

    // 方法2：
    // let dp = new Array(10).fill(0).map(v=>new Array(10).fill(0));
    //
    // for (let dominoe of dominoes) {
    //     let min = Math.min(dominoe[0], dominoe[1]);
    //     let max = Math.max(dominoe[0], dominoe[1]);
    //     dp[min][max]++;
    // }
    // let result = 0;
    // for (let i = 0; i < 10; i++) {
    //     for (let j = 1; j < 10; j++) {
    //         let count = dp[i][j];
    //         if (count > 1) {
    //             result += (count * (count - 1) / 2)
    //         }
    //     }
    // }
    // return result;

    // 方法3：
    const hash = {};
    for (let dom of dominoes) {
        const [a, b] = dom;
        const key = `${a},${b}`, alterKey = `${b},${a}`
        if (hash[key] == null && hash[alterKey] == null) {
            hash[key] = 1;
        } else {
            if (hash[key] != null) hash[key] += 1;
            else hash[alterKey] += 1;
        }
    }
    let res = 0;
    Object.keys(hash).forEach(k => {
        if (hash[k] > 1) {
            res = res + sum(hash[k])
        }
    })

    function sum(n) {
        let count = 0;
        while (n > 1) {
            count += n - 1;
            n--
        }
        return count;
    }

    return res;
}
// console.log(numEquivDominoPairs([[1,2],[1,2],[1,1],[1,2],[1,1],[2,1]]))

/**
 * 1160. 拼写单词
 *
 * 给你一份『词汇表』（字符串数组） words 和一张『字母表』（字符串） chars。
 *
 * 假如你可以用 chars 中的『字母』（字符）拼写出 words 中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。
 *
 * 注意：每次拼写（指拼写词汇表中的一个单词）时，chars 中的每个字母都只能用一次。
 *
 * 返回词汇表 words 中你掌握的所有单词的 长度之和。
 *
 * 示例 1：
 * 输入：words = ["cat","bt","hat","tree"], chars = "atach"
 * 输出：6
 * 解释：
 * 可以形成字符串 "cat" 和 "hat"，所以答案是 3 + 3 = 6。
 *
 * 示例 2：
 * 输入：words = ["hello","world","leetcode"], chars = "welldonehoneyr"
 * 输出：10
 * 解释：
 * 可以形成字符串 "hello" 和 "world"，所以答案是 5 + 5 = 10。
 *
 * 提示：
 * 1 <= words.length <= 1000
 * 1 <= words[i].length, chars.length <= 100
 * 所有字符串中都仅包含小写英文字母
 * */
const countCharacters = (words, chars) => {
    // 方法1：
    // const hash = {};
    // for (let i = 0; i < chars.length; i++) {
    //     if (!hash[chars[i]]) {
    //         hash[chars[i]] = 1;
    //     } else {
    //         hash[chars[i]] += 1;
    //     }
    // }
    // let count = 0;
    // for (let i = 0; i < words.length; i++) {
    //     let word = words[i];
    //     console.log(wordLine(word), 's')
    //     count += wordLine(word);
    // }
    // return count;
    // function wordLine(str) {
    //     let newHash = Object.assign({}, hash);
    //     let count = 0;
    //     for (let i = 0; i < str.length; i++) {
    //         if (!newHash[str[i]] || newHash[str[i]] === 0) return 0;
    //         newHash[str[i]] -= 1;
    //         count +=1;
    //     }
    //     return count;
    // }

    // 方法2：
    const state = Array(26).fill(0);
    for (let i = 0; i < chars.length; i++) {
        state[chars[i].charCodeAt() - 'a'.charCodeAt()]++;
    }
    console.log(state, 'state')
    let sum = 0;
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const stateCopy = Array(26).fill(0);
        for (let j = 0; j < word.length; j++) {
            const ch = word[j].charCodeAt() - 'a'.charCodeAt();
            stateCopy[ch]++;
            if (stateCopy[ch] > state[ch]) {
                break;
            }
        }
        if (j === word.length) {
            sum += j;
        }
    }
    return sum;
}
// console.log(countCharacters(["hello","world","leetcode"], "welldonehoneyr"))
// console.log(countCharacters(["hello"], "helo"))

/**
 * 1184. 公交站间的距离
 *
 * 环形公交路线上有 n 个站，按次序从 0 到 n - 1 进行编号。我们已知每一对相邻公交站之间的距离，distance[i] 表示编号为 i 的车站和编号为 (i + 1) % n 的车站之间的距离。
 *
 * 环线上的公交车都可以按顺时针和逆时针的方向行驶。
 *
 * 返回乘客从出发点 start 到目的地 destination 之间的最短距离。
 *
 * 示例 1：
 * 输入：distance = [1,2,3,4], start = 0, destination = 1
 * 输出：1
 * 解释：公交站 0 和 1 之间的距离是 1 或 9，最小值是 1。
 *
 * 示例 2：
 * 输入：distance = [1,2,3,4], start = 0, destination = 2
 * 输出：3
 * 解释：公交站 0 和 2 之间的距离是 3 或 7，最小值是 3。
 *
 * 示例 3：
 * 输入：distance = [1,2,3,4], start = 0, destination = 3
 * 输出：4
 * 解释：公交站 0 和 3 之间的距离是 6 或 4，最小值是 4。
 *
 * 提示：
 * 1 <= n <= 10^4
 * distance.length == n
 * 0 <= start, destination < n
 * 0 <= distance[i] <= 10^4
 * */
const distanceBetweenBusStops = (distance, start, destination) => {
    let left = 0, right = 0;
    for (let i = 0; i < distance.length; i++) {
        // 存在 start 大于 destination 的情况
        if (i >= Math.min(start, destination) && i < Math.max(start, destination)) {
            left += distance[i]
        } else {
            right += distance[i]
        }
    }
    return Math.min(left, right);
};
// console.log(distanceBetweenBusStops([1,2,3,4], 0, 1));
// console.log(distanceBetweenBusStops([7,10,1,12,11,14,5,0], 7, 2));

/**
 * 1200. 最小绝对差
 *
 * 给你个整数数组 arr，其中每个元素都 不相同。
 *
 * 请你找到所有具有最小绝对差的元素对，并且按升序的顺序返回。
 *
 * 每对元素对 [a,b] 如下：
 *
 * a , b 均为数组 arr 中的元素
 * a < b
 * b - a 等于 arr 中任意两个元素的最小绝对差
 *
 * 示例 1：
 * 输入：arr = [4,2,1,3]
 * 输出：[[1,2],[2,3],[3,4]]
 *
 * 示例 2：
 * 输入：arr = [1,3,6,10,15]
 * 输出：[[1,3]]
 *
 * 示例 3：
 * 输入：arr = [3,8,-10,23,19,-4,-14,27]
 * 输出：[[-14,-10],[19,23],[23,27]]
 *
 * 提示：
 * 2 <= arr.length <= 10^5
 * -10^6 <= arr[i] <= 10^6
 * */
const minimumAbsDifference = (arr) => {
    arr.sort((a, b) => a - b);
    let min = Infinity, len = arr.length;
    let result = [];
    // 计算数组中最小差值
    for (let i = 1; i < len; i++) {
        min = Math.min(min, arr[i] - arr[i - 1])
    }
    for (let i = 0; i < len - 1; i++) {
        if (arr[i + 1] - arr[i] === min) {
            result.push([arr[i], arr[i + 1]])
        }
    }
    return result;
}
// console.log(minimumAbsDifference([3,8,-10,23,19,-4,-14,27]));

/**
 * 1207. 独一无二的出现次数
 *
 * 给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。
 *
 * 如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
 *
 * 示例 1：
 * 输入：arr = [1,2,2,1,1,3]
 * 输出：true
 * 解释：在该数组中，1 出现了 3 次，2 出现了 2 次，3 只出现了 1 次。没有两个数的出现次数相同。
 *
 * 示例 2：
 * 输入：arr = [1,2]
 * 输出：false
 *
 * 示例 3：
 * 输入：arr = [-3,0,1,-3,1,1,1,-3,10,0]
 * 输出：true
 *
 * 提示：
 * 1 <= arr.length <= 1000
 * -1000 <= arr[i] <= 1000
 * */
const uniqueOccurrences = (arr) => {
    // 方法1：
    // let map = new Map(), len = arr.length;
    // for (let i = 0; i < len; i++) {
    //     if (!map.has(arr[i])) {
    //         map.set(arr[i], 1)
    //     } else {
    //         map.set(arr[i], map.get(arr[i]) + 1)
    //     }
    // }
    // return Array.from(map.values()).length === new Set(map.values()).size

    // 方法2：
    // if (arr.length === 0) return true;
    // let map = arr.reduce((acc, cur) => {
    //     if (acc.has(cur)) {
    //         let times = acc.get(cur) + 1;
    //         acc.set(cur, times)
    //     } else {
    //         acc.set(cur, 1)
    //     }
    //     return acc;
    // }, new Map())
    // let set = new Set(map.values());
    // return set.size === map.size;

    // 方法3：
    let hashtable = {}
    for (const a of arr) {
        if (hashtable[a] != null) {
            hashtable[a]++
        } else {
            hashtable[a] = 1
        }
    }
    for (let k in hashtable) {
        if (hashtable['K' + hashtable[k]] != null) {
            return false
        } else {
            hashtable['K' + hashtable[k]] = 1
        }
    }
    return true
}
// console.log(uniqueOccurrences([1, 2, 2, 1, 1, 2]))

/**
 * 1232. 缀点成线
 *
 * 给定一个数组 coordinates ，其中 coordinates[i] = [x, y] ， [x, y] 表示横坐标为 x、纵坐标为 y 的点。请你来判断，这些点是否在该坐标系中属于同一条直线上。
 *
 * 示例 1：
 * 输入：coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
 * 输出：true
 *
 * 示例 2：
 * 输入：coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
 * 输出：false
 *
 * 提示：
 * 2 <= coordinates.length <= 1000
 * coordinates[i].length == 2
 * -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
 * coordinates 中不含重复的点
 * */
const checkStraightLine = (coordinates) => {
    // tips: 两点斜率计算
    // A(a1 ,a2)   B(b1,b2 )   C(c1,c2 )
    // 直线AB的斜率  k1=(b2-a2) \ ( a2-a1)
    // 直线BC的斜率  k2=(c2-b2) \  (c1-b1)
    let slope = coordinates[1][0] - coordinates[0][0] === 0 ? 'Infinity' : (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0])
    for (let i = 2; i < coordinates.length; i++) {
        let col = coordinates[i][0] - coordinates[0][0];
        let row = coordinates[i][1] - coordinates[0][1];
        if (col === 0) {
            if (slope !== 'Infinity') {
                return false;
            }
        } else if (row === 0) {
            if (slope === 'Infinity') {
                return false;
            }
        } else {
            if (slope !== (row / col)) {
                return false;
            }
        }
    }
    return true;
};
// console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6]]));
// console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]));
// console.log(checkStraightLine([[0,0],[0,1],[0,-1]]));

/**
 * 1252. 奇数值单元格的数目
 *
 * 给你一个 m x n 的矩阵，最开始的时候，每个单元格中的值都是 0。
 *
 * 另有一个二维索引数组 indices，indices[i] = [ri, ci] 指向矩阵中的某个位置，其中 ri 和 ci 分别表示指定的行和列（从 0 开始编号）。
 *
 * 对 indices[i] 所指向的每个位置，应同时执行下述增量操作：
 *
 * ri 行上的所有单元格，加 1 。
 * ci 列上的所有单元格，加 1 。
 * 给你 m、n 和 indices 。请你在执行完所有 indices 指定的增量操作后，返回矩阵中 奇数值单元格 的数目。
 *
 * 示例 1：
 * 输入：m = 2, n = 3, indices = [[0,1],[1,1]]
 * 输出：6
 * 解释：最开始的矩阵是 [[0,0,0],[0,0,0]]。
 * 第一次增量操作后得到 [[1,2,1],[0,1,0]]。
 * 最后的矩阵是 [[1,3,1],[1,3,1]]，里面有 6 个奇数。
 *
 * 示例 2：
 * 输入：m = 2, n = 2, indices = [[1,1],[0,0]]
 * 输出：0
 * 解释：最后的矩阵是 [[2,2],[2,2]]，里面没有奇数。
 *
 * 提示：
 * 1 <= m, n <= 50
 * 1 <= indices.length <= 100
 * 0 <= ri < m
 * 0 <= ci < n
 * */
const oddCells = (m, n, indices) => {
    let arr = new Array(m).fill(0).map(item => new Array(n).fill(0))
    for (let i = 0; i < indices.length; i++) {
        let col = indices[i][0];
        let row = indices[i][1];
        for (let j = 0; j < Math.max(m, n); j++) {
            if (j < n) {
                arr[col][j]++; // 行
            }
            if (j < m) {
                arr[j][row]++; // 列
            }
        }
    }
    return arr.map(item => item.filter(item => item % 2 === 1).length).reduce((a, b) => a + b)
}
// console.log(oddCells(2, 3, [[0, 1], [1, 1]]))
// console.log(oddCells(48, 37, [[40,5]]))

/**
 * 1260. 二维网格迁移
 *
 * 给你一个 m 行 n 列的二维网格 grid 和一个整数 k。你需要将 grid 迁移 k 次。
 *
 * 每次「迁移」操作将会引发下述活动：
 *
 * 位于 grid[i][j] 的元素将会移动到 grid[i][j + 1]。
 * 位于 grid[i][n - 1] 的元素将会移动到 grid[i + 1][0]。
 * 位于 grid[m - 1][n - 1] 的元素将会移动到 grid[0][0]。
 * 请你返回 k 次迁移操作后最终得到的 二维网格。
 *
 * 示例 1：
 * 输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
 * 输出：[[9,1,2],[3,4,5],[6,7,8]]
 *
 * 示例 2：
 * 输入：grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
 * 输出：[[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
 *
 * 示例 3：
 * 输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
 * 输出：[[1,2,3],[4,5,6],[7,8,9]]
 *
 * 提示：
 * m == grid.length
 * n == grid[i].length
 * 1 <= m <= 50
 * 1 <= n <= 50
 * -1000 <= grid[i][j] <= 1000
 * 0 <= k <= 100
 * */
const shiftGrid = (grid, k) => {
    // 方法1：
    // let len = grid.length;
    // let len1 = grid[0].length;
    // let arr = grid.flat();
    // let k1 = k % arr.length; // 考虑当 k > arr.length 的情况。
    // let tag = arr.length - k1;
    // let left = arr.slice(0, tag);
    // let right = arr.slice(tag, arr.length)
    // let newArr = [...right, ...left];
    // let result = [];
    // for (let i = 0; i < len; i++) {
    //     let temp = newArr.slice(i * len1, i * len1 + len1)
    //     result.push(temp);
    // }
    // return result;

    // 方法2：
    const n = grid.length, m = grid[0].length, tot = n * m;
    const ans = Array.from(Array(n), _ => Array(m));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let t = (i * m + j + k) % tot;
            ans[t / m | 0][t % m] = grid[i][j];
        }
    }
    return ans;
}
// console.log(shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4))
// console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], k = 1))

/**
 * 1266. 访问所有点的最小时间
 *
 * 平面上有 n 个点，点的位置用整数坐标表示 points[i] = [xi, yi] 。请你计算访问所有这些点需要的 最小时间（以秒为单位）。
 *
 * 你需要按照下面的规则在平面上移动：
 *
 * 每一秒内，你可以：
 * 沿水平方向移动一个单位长度，或者
 * 沿竖直方向移动一个单位长度，或者
 * 跨过对角线移动 sqrt(2) 个单位长度（可以看作在一秒内向水平和竖直方向各移动一个单位长度）。
 * 必须按照数组中出现的顺序来访问这些点。
 * 在访问某个点时，可以经过该点后面出现的点，但经过的那些点不算作有效访问。
 *
 * 示例 1：
 * 输入：points = [[1,1],[3,4],[-1,0]]
 * 输出：7
 * 解释：一条最佳的访问路径是： [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]
 * 从 [1,1] 到 [3,4] 需要 3 秒
 * 从 [3,4] 到 [-1,0] 需要 4 秒
 * 一共需要 7 秒
 *
 * 示例 2：
 * 输入：points = [[3,2],[-2,2]]
 * 输出：5
 *
 * 提示：
 * points.length == n
 * 1 <= n <= 100
 * points[i].length == 2
 * -1000 <= points[i][0], points[i][1] <= 1000
 * */
const minTimeToVisitAllPoints = (points) => {
    let res = 0;
    for (let i = 1; i < points.length; i++) {
        let [x, y] = points[i];
        res += Math.max(Math.abs(x - points[i - 1][0]), Math.abs(y - points[i - 1][1]))
    }
    ;
    return res;
};
// console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]))

/**
 * 1275. 找出井字棋的获胜者
 *
 * A 和 B 在一个 3 x 3 的网格上玩井字棋。
 *
 * 井字棋游戏的规则如下：
 *
 * 玩家轮流将棋子放在空方格 (" ") 上。
 * 第一个玩家 A 总是用 "X" 作为棋子，而第二个玩家 B 总是用 "O" 作为棋子。
 * "X" 和 "O" 只能放在空方格中，而不能放在已经被占用的方格上。
 * 只要有 3 个相同的（非空）棋子排成一条直线（行、列、对角线）时，游戏结束。
 * 如果所有方块都放满棋子（不为空），游戏也会结束。
 * 游戏结束后，棋子无法再进行任何移动。
 * 给你一个数组 moves，其中每个元素是大小为 2 的另一个数组（元素分别对应网格的行和列），它按照 A 和 B 的行动顺序（先 A 后 B）记录了两人各自的棋子位置。
 *
 * 如果游戏存在获胜者（A 或 B），就返回该游戏的获胜者；如果游戏以平局结束，则返回 "Draw"；如果仍会有行动（游戏未结束），则返回 "Pending"。
 *
 * 你可以假设 moves 都 有效（遵循井字棋规则），网格最初是空的，A 将先行动。
 *
 * 示例 1：
 * 输入：moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
 * 输出："A"
 * 解释："A" 获胜，他总是先走。
 * "X  "    "X  "    "X  "    "X  "    "X  "
 * "   " -> "   " -> " X " -> " X " -> " X "
 * "   "    "O  "    "O  "    "OO "    "OOX"
 *
 * 示例 2：
 * 输入：moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
 * 输出："B"
 * 解释："B" 获胜。
 * "X  "    "X  "    "XX "    "XXO"    "XXO"    "XXO"
 * "   " -> " O " -> " O " -> " O " -> "XO " -> "XO "
 * "   "    "   "    "   "    "   "    "   "    "O  "
 *
 * 示例 3：
 * 输入：moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]
 * 输出："Draw"
 * 输出：由于没有办法再行动，游戏以平局结束。
 * "XXO"
 * "OOX"
 * "XOX"
 *
 * 示例 4：
 * 输入：moves = [[0,0],[1,1]]
 * 输出："Pending"
 * 解释：游戏还没有结束。
 * "X  "
 * " O "
 * "   "
 *
 * 提示：
 * 1 <= moves.length <= 9
 * moves[i].length == 2
 * 0 <= moves[i][j] <= 2
 * moves 里没有重复的元素。
 * moves 遵循井字棋的规则。
 * */
const tictactoe = (moves) => {
    const arr = new Array(3).fill(0).map(() => new Array(3).fill(0));
    for (let i = 0; i < moves.length; i++) {
        if (i % 2 === 0) {
            arr[moves[i][0]][moves[i][1]] = 'X'
        } else {
            arr[moves[i][0]][moves[i][1]] = 'O'
        }
    }
    console.log(arr, 'arr')
    const arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr1.push(arr[i][j])
        }
    }
    console.log(arr1, 'arr1')
    let count = 0;
    const X = [], O = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === 'X') {
            X.push(i + 1);
            count++;
        } else if (arr1[i] === 'O') {
            O.push(i + 1);
            count++;
        }
    }
    console.log(X, 'X')
    console.log(O, 'O')
    let V = ['123', '456', '789', '147', '258', '369', '159', '357'];
    for (let n of V) {
        if (X.join('').includes(n[0]) && X.join('').includes(n[1]) && X.join('').includes(n[2])) {
            return 'A'
        } else if (O.join('').includes(n[0]) && O.join('').includes(n[1]) && O.join('').includes(n[2])) {
            return 'B'
        }
    }
    if (count === 9) {
        return 'Draw'
    } else {
        return 'Pending'
    }
};
// console.log(tictactoe([[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]]))

/**
 * 1287. 有序数组中出现次数超过25%的元素
 *
 * 给你一个非递减的 有序 整数数组，已知这个数组中恰好有一个整数，它的出现次数超过数组元素总数的 25%。
 *
 * 请你找到并返回这个整数
 *
 * 示例：
 * 输入：arr = [1,2,2,6,6,6,6,7,10]
 * 输出：6
 *
 * 提示：
 * 1 <= arr.length <= 10^4
 * 0 <= arr[i] <= 10^5
 * */
const findSpecialInteger = (arr) => {
    // 方法1：
    // let len = arr.length;
    // if (len === 1) return arr[0];
    // let map = new Map();
    // let tag = len / 4;
    // for (let i = 0; i < len; i++) {
    //     if (!map.has(arr[i])) {
    //         map.set(arr[i], 1)
    //     } else {
    //         if (map.get(arr[i]) + 1 > tag) return arr[i]
    //         map.set(arr[i], map.get(arr[i]) + 1)
    //     }
    // }

    // 方法2：
    if (arr.length <= 3) return arr[0];
    const len = arr.length % 4 === 0 ? arr.length / 4 : ((arr.length / 4) >> 0) + 1;
    for (let i = len; i < arr.length; i++) {
        if (arr[i - len] === arr[i]) return arr[i]
    }
}
// console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]));

/**
 * 1295. 统计位数为偶数的数字
 *
 * 给你一个整数数组 nums，请你返回其中位数为 偶数 的数字的个数。
 *
 * 示例 1：
 * 输入：nums = [12,345,2,6,7896]
 * 输出：2
 * 解释：
 * 12 是 2 位数字（位数为偶数）
 * 345 是 3 位数字（位数为奇数）
 * 2 是 1 位数字（位数为奇数）
 * 6 是 1 位数字 位数为奇数）
 * 7896 是 4 位数字（位数为偶数）
 * 因此只有 12 和 7896 是位数为偶数的数字
 *
 * 示例 2：
 * 输入：nums = [555,901,482,1771]
 * 输出：1
 * 解释：
 * 只有 1771 是位数为偶数的数字。
 *
 * 提示：
 * 1 <= nums.length <= 500
 * 1 <= nums[i] <= 10^5
 * */
const findNumbers = (nums) => {
    let len = nums.length, count = 0;
    for (let i = 0; i < len; i++) {
        if (nums[i].toString().length % 2 === 0) {
            count++
        }
    }
    return count;
}
// console.log(findNumbers([12,345,2,6,7896]));

/**
 * 1299. 将每个元素替换为右侧最大元素
 *
 * 给你一个数组 arr ，请你将每个元素用它右边最大的元素替换，如果是最后一个元素，用 -1 替换。
 *
 * 完成所有替换操作后，请你返回这个数组。
 *
 * 示例 1：
 * 输入：arr = [17,18,5,4,6,1]
 * 输出：[18,6,6,6,1,-1]
 * 解释：
 * - 下标 0 的元素 --> 右侧最大元素是下标 1 的元素 (18)
 * - 下标 1 的元素 --> 右侧最大元素是下标 4 的元素 (6)
 * - 下标 2 的元素 --> 右侧最大元素是下标 4 的元素 (6)
 * - 下标 3 的元素 --> 右侧最大元素是下标 4 的元素 (6)
 * - 下标 4 的元素 --> 右侧最大元素是下标 5 的元素 (1)
 * - 下标 5 的元素 --> 右侧没有其他元素，替换为 -1
 *
 * 示例 2：
 * 输入：arr = [400]
 * 输出：[-1]
 * 解释：下标 0 的元素右侧没有其他元素。
 *
 * 提示：
 * 1 <= arr.length <= 104
 * 1 <= arr[i] <= 105
 * */
const replaceElements = (arr) => {
    // 方法1：4500+ms
    // let len = arr.length, res = [];
    // function maxNum(arr, index) {
    //     if (index === len - 1) return -1;
    //     return Math.max(...arr.slice(index + 1))
    // }
    // for (let i = 0; i < len; i++) {
    //     res.push(maxNum(arr, i))
    // }
    // return res;

    // 方法2：
    // let len = arr.length, res = new Array(len).fill(0);
    // let max = -1;
    // for (let i = len - 1; i >= 0; i--) {
    //     res[i] = max;
    //     max = Math.max(max, arr[i])
    // }
    // return res;
};
// console.log(replaceElements([17,18,5,4,6,1]));

/**
 * 1304. 和为零的 N 个不同整数
 *
 * 给你一个整数 n，请你返回 任意 一个由 n 个 各不相同 的整数组成的数组，并且这 n 个数相加和为 0 。
 *
 * 示例 1：
 * 输入：n = 5
 * 输出：[-7,-1,1,3,4]
 * 解释：这些数组也是正确的 [-5,-1,1,2,3]，[-3,-1,2,-2,4]。
 *
 * 示例 2：
 * 输入：n = 3
 * 输出：[-1,0,1]
 *
 * 示例 3：
 * 输入：n = 1
 * 输出：[0]
 *
 * 提示：
 * 1 <= n <= 1000
 * */
const sumZero = (n) => {
    const res = [];
    let left = Math.ceil(n / 2), right = n - left;
    let flag = left === right;
    for (let i = 1; flag ? i <= left : i < left; i++) {
        res.push(i, -i);
    }
    if (flag) return res
    return flag ? res : [...res, 0];
};
// console.log(sumZero(4));

/**
 * 1313. 解压缩编码列表
 *
 * 给你一个以行程长度编码压缩的整数列表 nums 。
 *
 * 考虑每对相邻的两个元素 [freq, val] = [nums[2*i], nums[2*i+1]] （其中 i >= 0 ），每一对都表示解压后子列表中有 freq 个值为 val 的元素，你需要从左到右连接所有子列表以生成解压后的列表。
 *
 * 请你返回解压后的列表。
 *
 * 示例 1：
 * 输入：nums = [1,2,3,4]
 * 输出：[2,4,4,4]
 * 解释：第一对 [1,2] 代表着 2 的出现频次为 1，所以生成数组 [2]。
 * 第二对 [3,4] 代表着 4 的出现频次为 3，所以生成数组 [4,4,4]。
 * 最后将它们串联到一起 [2] + [4,4,4] = [2,4,4,4]。
 *
 * 示例 2：
 * 输入：nums = [1,1,2,3]
 * 输出：[1,3,3]
 *
 * 提示：
 * 2 <= nums.length <= 100
 * nums.length % 2 == 0
 * 1 <= nums[i] <= 100
 * */
const decompressRLElist = (nums) => {
    let res = [];
    for (let i = 0; i < nums.length; i += 2) {
        let arr = new Array(nums[i]).fill(nums[i + 1])
        res.push(...arr)
    }
    return res;
};
// console.log(decompressRLElist([1,2,3,4]))

/**
 * 1331. 数组序号转换
 *
 * 给你一个整数数组 arr ，请你将数组中的每个元素替换为它们排序后的序号。
 *
 * 序号代表了一个元素有多大。序号编号的规则如下：
 *
 * 序号从 1 开始编号。
 * 一个元素越大，那么序号越大。如果两个元素相等，那么它们的序号相同。
 * 每个数字的序号都应该尽可能地小。
 *
 * 示例 1：
 * 输入：arr = [40,10,20,30]
 * 输出：[4,1,2,3]
 * 解释：40 是最大的元素。 10 是最小的元素。 20 是第二小的数字。 30 是第三小的数字。
 *
 * 示例 2：
 * 输入：arr = [100,100,100]
 * 输出：[1,1,1]
 * 解释：所有元素有相同的序号。
 *
 * 示例 3：
 * 输入：arr = [37,12,28,9,100,56,80,5,12]
 * 输出：[5,3,4,2,8,6,7,1,3]
 *
 * 提示：
 * 0 <= arr.length <= 105
 * -109 <= arr[i] <= 109
 * */
const arrayRankTransform = (arr) => {
    // 方法1:
    // let map = new Map();
    // let newArr = Array.from(new Set([...arr])).sort((a, b) => a - b);
    // for (let i = 0; i < newArr.length; i++) {
    //     map.set(newArr[i], i + 1)
    // }
    // for (let i = 0; i < arr.length; i++) {
    //     arr[i] = map.get(arr[i])
    // }
    // return arr;

    // 方法2：
    const nums = [...new Set(arr)].sort((a, b) => a - b);
    const res = [];
    for (let x of arr) {
        console.log(x, 'sx')
        let l = 0, r = arr.length - 1;
        while (l < r) {
            let mid = l + r >> 1;
            console.log(mid, 'mid')
            if (nums[mid] >= x) r = mid;
            else l = mid + 1;
        }
        res.push(r + 1)
    }
    return res;
}
// console.log(arrayRankTransform([40, 10, 20, 30]))
// console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]))

/**
 * 1337. 矩阵中战斗力最弱的 K 行
 *
 * 给你一个大小为 m * n 的矩阵 mat，矩阵由若干军人和平民组成，分别用 1 和 0 表示。
 *
 * 请你返回矩阵中战斗力最弱的 k 行的索引，按从最弱到最强排序。
 *
 * 如果第 i 行的军人数量少于第 j 行，或者两行军人数量相同但 i 小于 j，那么我们认为第 i 行的战斗力比第 j 行弱。
 *
 * 军人 总是 排在一行中的靠前位置，也就是说 1 总是出现在 0 之前。
 *
 * 示例 1：
 * 输入：mat =
 * [[1,1,0,0,0],
 *  [1,1,1,1,0],
 *  [1,0,0,0,0],
 *  [1,1,0,0,0],
 *  [1,1,1,1,1]],
 * k = 3
 * 输出：[2,0,3]
 * 解释：
 * 每行中的军人数目：
 * 行 0 -> 2
 * 行 1 -> 4
 * 行 2 -> 1
 * 行 3 -> 2
 * 行 4 -> 5
 * 从最弱到最强对这些行排序后得到 [2,0,3,1,4]
 *
 * 示例 2：
 * 输入：mat =
 * [[1,0,0,0],
 *  [1,1,1,1],
 *  [1,0,0,0],
 *  [1,0,0,0]],
 * k = 2
 * 输出：[0,2]
 * 解释：
 * 每行中的军人数目：
 * 行 0 -> 1
 * 行 1 -> 4
 * 行 2 -> 1
 * 行 3 -> 1
 * 从最弱到最强对这些行排序后得到 [0,2,3,1]
 *
 * 提示：
 * m == mat.length
 * n == mat[i].length
 * 2 <= n, m <= 100
 * 1 <= k <= m
 * */
const kWeakestRows = (mat, k) => {
    let len = mat.length;
    let map = new Map(), res = [];
    for (let i = 0; i < len; i++) {
        const x = mat[i].filter(item => item === 1).length;
        map.set(i, x)
    }
    const arr = Array.from(map.values()).sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        map.forEach(function (value, k) {
            if (value === arr[i] && res.indexOf(k) === -1) {
                res.push(k)
            }
        });
    }
    return res.slice(0, k)
}
// console.log(kWeakestRows([[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]], 3));
// console.log(kWeakestRows([[1,0],[1,0],[1,0],[1,1]], 4));

/**
 * 1346. 检查整数及其两倍数是否存在
 *
 * 给你一个整数数组 arr，请你检查是否存在两个整数 N 和 M，满足 N 是 M 的两倍（即，N = 2 * M）。
 *
 * 更正式地，检查是否存在两个下标 i 和 j 满足：
 *
 * i != j
 * 0 <= i, j < arr.length
 * arr[i] == 2 * arr[j]
 *
 * 示例 1：
 * 输入：arr = [10,2,5,3]
 * 输出：true
 * 解释：N = 10 是 M = 5 的两倍，即 10 = 2 * 5 。
 *
 * 示例 2：
 * 输入：arr = [7,1,14,11]
 * 输出：true
 * 解释：N = 14 是 M = 7 的两倍，即 14 = 2 * 7 。
 *
 * 示例 3：
 * 输入：arr = [3,1,7,11]
 * 输出：false
 * 解释：在该情况下不存在 N 和 M 满足 N = 2 * M 。
 *
 * 提示：
 * 2 <= arr.length <= 500
 * -10^3 <= arr[i] <= 10^3
 * */
const checkIfExist = (arr) => {
    // 方法1：
    // let doubleArr = [];
    // arr.map(item => {
    //     if (item !== 0) {
    //         doubleArr.push(item * 2)
    //     }
    // });
    // if (arr.length - doubleArr.length >= 2) return true; // 数组中 0 的个数 >= 2 返回 true
    // return arr.some(item => doubleArr.includes(item))

    // 方法2：
    let hash = {};
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let num = arr[i];
        if (num === 0 && hash[num]) {
            return true
        } else {
            if (hash[2 * num] || (num % 2 === 0 && hash[num / 2])) {
                return true
            }
            hash[num] = true
        }
    }
    return false;
};
// console.log(checkIfExist([-2,0,10,-19,4,6,-8]))

/**
 * 1351. 统计有序矩阵中的负数
 *
 * 给你一个 m * n 的矩阵 grid，矩阵中的元素无论是按行还是按列，都以非递增顺序排列。 请你统计并返回 grid 中 负数 的数目。
 *
 * 示例 1：
 * 输入：grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
 * 输出：8
 * 解释：矩阵中共有 8 个负数。
 *
 * 示例 2：
 * 输入：grid = [[3,2],[1,0]]
 * 输出：0
 *
 * 提示：
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 100
 * -100 <= grid[i][j] <= 100
 * */
const countNegatives = (grid) => {
    // let arr = grid.flat();
    // return arr.filter(item => item < 0).length

    let rowLength = grid[0].length;
    let right = rowLength - 1;
    let sum = 0;

    // 因为 grid[i] 中的元素都是递减的，所以该方法返回 grid[i] 中的第一个小于零元素的索引
    const searchTarget = function (arr, right) {
        let left = 0;
        if (right > arr.length - 1) right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] < 0) {
                right = mid - 1;
            } else if (arr[mid] >= 0) {
                left = mid + 1;
            }
        }
        return left;
    }

    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        let index = searchTarget(grid[rowIndex], right);
        right = index;
        if (right === 0) {
            sum += (grid.length - rowIndex) * rowLength
        } else {
            sum += rowLength - index;
        }
    }
    return sum;
};
// console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))
// console.log(countNegatives([[1,1,-2,-3]]))

/**
 * 1356. 根据数字二进制下 1 的数目排序
 *
 * 给你一个整数数组 arr 。请你将数组中的元素按照其二进制表示中数字 1 的数目升序排序。
 *
 * 如果存在多个数字二进制中 1 的数目相同，则必须将它们按照数值大小升序排列。
 *
 * 请你返回排序后的数组。
 *
 * 示例 1：
 * 输入：arr = [0,1,2,3,4,5,6,7,8]
 * 输出：[0,1,2,4,8,3,5,6,7]
 * 解释：[0] 是唯一一个有 0 个 1 的数。
 * [1,2,4,8] 都有 1 个 1 。
 * [3,5,6] 有 2 个 1 。
 * [7] 有 3 个 1 。
 * 按照 1 的个数排序得到的结果数组为 [0,1,2,4,8,3,5,6,7]
 *
 * 示例 2：
 * 输入：arr = [1024,512,256,128,64,32,16,8,4,2,1]
 * 输出：[1,2,4,8,16,32,64,128,256,512,1024]
 * 解释：数组中所有整数二进制下都只有 1 个 1 ，所以你需要按照数值大小将它们排序。
 *
 * 示例 3：
 * 输入：arr = [10000,10000]
 * 输出：[10000,10000]
 *
 * 示例 4：
 * 输入：arr = [2,3,5,7,11,13,17,19]
 * 输出：[2,3,5,17,7,11,13,19]
 *
 * 示例 5：
 * 输入：arr = [10,100,1000,10000]
 * 输出：[10,100,10000,1000]
 *
 * 提示：
 * 1 <= arr.length <= 500
 * 0 <= arr[i] <= 10^4
 * */
const sortByBits = (arr) => {
    // 方法1：
    // let arrList = [];
    // for (let i = 0; i < arr.length; i++) {
    //     const tag = parseInt(arr[i]).toString(2);
    //     let len = tag.split("1").length - 1
    //     arrList.push({len: len, num: arr[i]})
    // }
    //
    // // 可按照多个属性进行排序
    // const multiSort = (array, ...compares) => {
    //     return array.sort((a, b) => {
    //         for (const c of compares) {
    //             const r = c(a, b)
    //             if (r !== 0) {
    //                 return r
    //             }
    //         }
    //     })
    // }
    // let list = multiSort(arrList, (a, b) => a.len - b.len, (a, b) => a.num - b.num)
    // return list.map(item => {
    //     return item.num
    // })

    // 方法2：
    const countOne = (num) => {
        let count = 0;
        while (num > 0) {
            // & 二进制都为 1 的时候是 1，其余都是 0
            // &= 按位与赋值
            // count 为 num 转为二进制后，1 的个数
            num &= num - 1;
            count += 1;
        }
        return count;
    }

    arr.sort((a, b) => {
        const c1 = countOne(a), c2 = countOne(b);
        if (c1 === c2) return a - b;
        return c1 - c2;
    })
    return arr;
};
// console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2]))
// console.log(sortByBits([0,1,2,3,4,5,6,7,8]))

/**
 * 1365. 有多少小于当前数字的数字
 *
 * 给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。
 *
 * 换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i] 。
 *
 * 以数组形式返回答案。
 *
 * 示例 1：
 * 输入：nums = [8,1,2,2,3]
 * 输出：[4,0,1,1,3]
 * 解释：
 * 对于 nums[0]=8 存在四个比它小的数字：（1，2，2 和 3）。
 * 对于 nums[1]=1 不存在比它小的数字。
 * 对于 nums[2]=2 存在一个比它小的数字：（1）。
 * 对于 nums[3]=2 存在一个比它小的数字：（1）。
 * 对于 nums[4]=3 存在三个比它小的数字：（1，2 和 2）。
 *
 * 示例 2：
 * 输入：nums = [6,5,4,8]
 * 输出：[2,1,0,3]
 *
 * 示例 3：
 * 输入：nums = [7,7,7,7]
 * 输出：[0,0,0,0]
 *
 * 提示：
 * 2 <= nums.length <= 500
 * 0 <= nums[i] <= 100
 * */
const smallerNumbersThanCurrent = (nums) => {
    // 方法1：
    // let len = nums.length, res = [];
    // let map = new Map();
    // const arr = [...nums].sort((a, b) => a - b);
    // for (let i = 0; i < len; i ++) {
    //     if (!map.has((arr[i]))) {
    //         map.set(arr[i], i)
    //     }
    // }
    // for (let i = 0; i < len; i ++) {
    //     res.push(map.get(nums[i]))
    // }
    // return res;

    // 方法2：
    // let res = [];
    // for (let i = 0; i < nums.length; i ++) {
    //     res.push(nums.filter((item => item < nums[i])).length)
    // }
    // return res;

    // 方法3：
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        let x = nums[i];
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] < x) {
                count++;
            }
        }
        res.push(count)
    }
    return res;
}
// console.log(smallerNumbersThanCurrent([8,1,2,2,3]))

/**
 * 1380. 矩阵中的幸运数
 *
 * 给你一个 m * n 的矩阵，矩阵中的数字 各不相同 。请你按 任意 顺序返回矩阵中的所有幸运数。
 *
 * 幸运数 是指矩阵中满足同时下列两个条件的元素：
 *
 * 在同一行的所有元素中最小
 * 在同一列的所有元素中最大
 *
 * 示例 1：
 * 输入：matrix = [[3,7,8],[9,11,13],[15,16,17]]
 * 输出：[15]
 * 解释：15 是唯一的幸运数，因为它是其所在行中的最小值，也是所在列中的最大值。
 *
 * 示例 2：
 * 输入：matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
 * 输出：[12]
 * 解释：12 是唯一的幸运数，因为它是其所在行中的最小值，也是所在列中的最大值。
 *
 * 示例 3：
 * 输入：matrix = [[7,8],[1,2]]
 * 输出：[7]
 * 解释：7是唯一的幸运数字，因为它是行中的最小值，列中的最大值。
 *
 * 提示：
 * m == mat.length
 * n == mat[i].length
 * 1 <= n, m <= 50
 * 1 <= matrix[i][j] <= 10^5
 * 矩阵中的所有元素都是不同的
 * */
const luckyNumbers = (matrix) => {
    // 方法1：
    // const rows = matrix.length, cols = matrix[0].length;
    // const res = [];
    // const minList = [], maxList = [];
    // for (let row = 0; row < rows; row++) {
    //     const rowMin = Math.min(...matrix[row]);
    //     minList.push(rowMin)
    // }
    // for (let col = 0; col < cols; col++) {
    //     let max = 0;
    //     for (let row = 0; row < rows; row++) {
    //         max = Math.max(max, matrix[row][col])
    //     }
    //     maxList.push(max)
    // }
    // for (let i = 0; i < minList.length; i++) {
    //     for (let j = 0; j < maxList.length; j++) {
    //         if (minList[i] === maxList[j]) {
    //             res.push(minList[i])
    //         }
    //     }
    // }
    // return res;

    // 方法2：方法一优化一下
    // const rows = matrix.length, cols = matrix[0].length;
    // const res = [];
    // const minList = [], maxList = [];
    // for (let col = 0; col < cols; col++) {
    //     let max = 0;
    //     for (let row = 0; row < rows; row++) {
    //         if (col === 0) {
    //             const rowMin = Math.min(...matrix[row]);
    //             minList.push(rowMin)
    //         }
    //         max = Math.max(max, matrix[row][col])
    //     }
    //     maxList.push(max)
    // }
    // for (let i = 0; i < minList.length; i++) {
    //     for (let j = 0; j < maxList.length; j++) {
    //         if (minList[i] === maxList[j]) {
    //             res.push(minList[i])
    //         }
    //     }
    // }
    // return res;
}
// console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]));
// console.log(luckyNumbers([[3,6],[7,1],[5,2],[4,8]]));

/**
 * 1385. 两个数组间的距离值
 *
 * 给你两个整数数组 arr1 ， arr2 和一个整数 d ，请你返回两个数组之间的 距离值 。
 *
 * 「距离值」 定义为符合此距离要求的元素数目：对于元素 arr1[i] ，不存在任何元素 arr2[j] 满足 |arr1[i]-arr2[j]| <= d 。
 *
 * 示例 1：
 * 输入：arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
 * 输出：2
 * 解释：
 * 对于 arr1[0]=4 我们有：
 * |4-10|=6 > d=2
 * |4-9|=5 > d=2
 * |4-1|=3 > d=2
 * |4-8|=4 > d=2
 * 所以 arr1[0]=4 符合距离要求
 *
 * 对于 arr1[1]=5 我们有：
 * |5-10|=5 > d=2
 * |5-9|=4 > d=2
 * |5-1|=4 > d=2
 * |5-8|=3 > d=2
 * 所以 arr1[1]=5 也符合距离要求
 *
 * 对于 arr1[2]=8 我们有：
 * |8-10|=2 <= d=2
 * |8-9|=1 <= d=2
 * |8-1|=7 > d=2
 * |8-8|=0 <= d=2
 * 存在距离小于等于 2 的情况，不符合距离要求
 * 故而只有 arr1[0]=4 和 arr1[1]=5 两个符合距离要求，距离值为 2
 *
 * 示例 2：
 * 输入：arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3
 * 输出：2
 *
 * 示例 3：
 * 输入：arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6
 * 输出：1
 *
 * 提示：
 * 1 <= arr1.length, arr2.length <= 500
 * -10^3 <= arr1[i], arr2[j] <= 10^3
 * 0 <= d <= 100
 * */
const findTheDistanceValue = (arr1, arr2, d) => {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (Math.abs(arr1[i] - arr2[j]) <= d) break
            if (j === arr2.length - 1) count++;
        }
    }
    return count;
};
// console.log(findTheDistanceValue([4,5,8], [10,9,1,8], 2))

/**
 * 1389. 按既定顺序创建目标数组
 *
 * 给你两个整数数组 nums 和 index。你需要按照以下规则创建目标数组：
 *
 * 目标数组 target 最初为空。
 * 按从左到右的顺序依次读取 nums[i] 和 index[i]，在 target 数组中的下标 index[i] 处插入值 nums[i] 。
 * 重复上一步，直到在 nums 和 index 中都没有要读取的元素。
 * 请你返回目标数组。
 *
 * 题目保证数字插入位置总是存在。
 *
 * 示例 1：
 * 输入：nums = [0,1,2,3,4], index = [0,1,2,2,1]
 * 输出：[0,4,1,3,2]
 * 解释：
 * nums       index     target
 * 0            0        [0]
 * 1            1        [0,1]
 * 2            2        [0,1,2]
 * 3            2        [0,1,3,2]
 * 4            1        [0,4,1,3,2]
 *
 * 示例 2：
 * 输入：nums = [1,2,3,4,0], index = [0,1,2,3,0]
 * 输出：[0,1,2,3,4]
 * 解释：
 * nums       index     target
 * 1            0        [1]
 * 2            1        [1,2]
 * 3            2        [1,2,3]
 * 4            3        [1,2,3,4]
 * 0            0        [0,1,2,3,4]
 *
 * 示例 3：
 * 输入：nums = [1], index = [0]
 * 输出：[1]
 *
 * 提示：
 * 1 <= nums.length, index.length <= 100
 * nums.length == index.length
 * 0 <= nums[i] <= 100
 * 0 <= index[i] <= i
 * */
const createTargetArray = (nums, index) => {
    let target = [];
    for (let i = 0; i < nums.length; i++) {
        target.splice(index[i], 0, nums[i])
    }
    return target;
}
// console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1]))
// console.log(createTargetArray([1], [0]))

/**
 * 1394. 找出数组中的幸运数
 *
 * 在整数数组中，如果一个整数的出现频次和它的数值大小相等，我们就称这个整数为「幸运数」。
 *
 * 给你一个整数数组 arr，请你从中找出并返回一个幸运数。
 *
 * 如果数组中存在多个幸运数，只需返回 最大 的那个。
 * 如果数组中不含幸运数，则返回 -1 。
 *
 * 示例 1：
 * 输入：arr = [2,2,3,4]
 * 输出：2
 * 解释：数组中唯一的幸运数是 2 ，因为数值 2 的出现频次也是 2 。
 *
 * 示例 2：
 * 输入：arr = [1,2,2,3,3,3]
 * 输出：3
 * 解释：1、2 以及 3 都是幸运数，只需要返回其中最大的 3 。
 *
 * 示例 3：
 * 输入：arr = [2,2,2,3,3]
 * 输出：-1
 * 解释：数组中不存在幸运数。
 *
 * 示例 4：
 * 输入：arr = [5]
 * 输出：-1
 *
 * 示例 5：
 * 输入：arr = [7,7,7,7,7,7,7]
 * 输出：7
 *
 * 提示：
 * 1 <= arr.length <= 500
 * 1 <= arr[i] <= 500
 * */
const findLucky = (arr) => {
    // 方法1：
    // let res = 0;
    // let map = new Map();
    // for (let i = 0; i < arr.length; i++) {
    //     if (!map.has(arr[i])) {
    //         map.set(arr[i], 1)
    //     } else {
    //         map.set(arr[i], map.get(arr[i]) + 1)
    //     }
    // }
    // map.forEach((value, key) => {
    //     if (value === key) {
    //         res = Math.max(res, key)
    //     }
    // })
    // return res === 0 ? -1 : res;

    // 方法2：
    // let res = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     let x = arr.filter(item => item === arr[i]).length
    //     if (x === arr[i]) {
    //         res = Math.max(res, arr[i])
    //     }
    // }
    // return res === 0 ? -1 : res;

    // 方法3：
    let res = -1;
    const hash = {};
    arr.forEach(v => hash[v] = (hash[v] || 0) + 1)
    let a = Object.keys(hash).filter(v => hash[v] === v)
    a.sort((b, c) => c - b)
    if (a[0] === 'undefined') {
        return -1
    }
    return a[0];
};
// console.log(findLucky([2,2,3,4]))

/**
 * 1403. 非递增顺序的最小子序列
 *
 * 给你一个数组 nums，请你从中抽取一个子序列，满足该子序列的元素之和 严格 大于未包含在该子序列中的各元素之和。
 *
 * 如果存在多个解决方案，只需返回 长度最小 的子序列。如果仍然有多个解决方案，则返回 元素之和最大 的子序列。
 *
 * 与子数组不同的地方在于，「数组的子序列」不强调元素在原数组中的连续性，也就是说，它可以通过从数组中分离一些（也可能不分离）元素得到。
 *
 * 注意，题目数据保证满足所有约束条件的解决方案是 唯一 的。同时，返回的答案应当按 非递增顺序 排列。
 *
 * 示例 1：
 * 输入：nums = [4,3,10,9,8]
 * 输出：[10,9]
 * 解释：子序列 [10,9] 和 [10,8] 是最小的、满足元素之和大于其他各元素之和的子序列。但是 [10,9] 的元素之和最大。
 *
 * 示例 2：
 * 输入：nums = [4,4,7,6,7]
 * 输出：[7,7,6]
 * 解释：子序列 [7,7] 的和为 14 ，不严格大于剩下的其他元素之和（14 = 4 + 4 + 6）。因此，[7,6,7] 是满足题意的最小子序列。注意，元素按非递增顺序返回。
 *
 * 示例 3：
 * 输入：nums = [6]
 * 输出：[6]
 *
 * 提示：
 * 1 <= nums.length <= 500
 * 1 <= nums[i] <= 100
 * */
const minSubsequence = (nums) => {
    nums.sort((a, b) => b - a);
    let sum = nums.reduce((pre, cur) => pre + cur, 0);
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        count += nums[i];
        if (count > sum - count) {
            return nums.slice(0, i + 1);
        }
    }
};
// console.log(minSubsequence([4,3,10,9,8]));

/**
 * 1408. 数组中的字符串匹配
 *
 * 给你一个字符串数组 words ，数组中的每个字符串都可以看作是一个单词。请你按 任意 顺序返回 words 中是其他单词的子字符串的所有单词。
 *
 * 如果你可以删除 words[j] 最左侧和/或最右侧的若干字符得到 words[i] ，那么字符串 words[i] 就是 words[j] 的一个子字符串。
 *
 * 示例 1：
 * 输入：words = ["mass","as","hero","superhero"]
 * 输出：["as","hero"]
 * 解释："as" 是 "mass" 的子字符串，"hero" 是 "superhero" 的子字符串。
 * ["hero","as"] 也是有效的答案。
 *
 * 示例 2：
 * 输入：words = ["leetcode","et","code"]
 * 输出：["et","code"]
 * 解释："et" 和 "code" 都是 "leetcode" 的子字符串。
 *
 * 示例 3：
 * 输入：words = ["blue","green","bu"]
 * 输出：[]
 *
 * 提示：
 * 1 <= words.length <= 100
 * 1 <= words[i].length <= 30
 * words[i] 仅包含小写英文字母。
 * 题目数据 保证 每个 words[i] 都是独一无二的。
 * */
const stringMatching = (words) => {
    // 方法1：
    // let res = [], len = words.length;
    // words.sort((a, b) => a.length - b.length)
    // for (let i = 0; i < len; i++) {
    //     for (let j = len - 1; j > i; j--) {
    //         if (words[j].includes(words[i])) {
    //             res.push(words[i])
    //             break; // 需要加终止当前循环，因为一个字字符串可能同时出现在不同的单词中
    //         }
    //     }
    // }
    // return res;

    // 方法2：
    // const s = words.join(','), arr = [];
    // console.log(s)
    // for(const word of words) {
    //     console.log(s.indexOf(word), '111')
    //     console.log(s.lastIndexOf(word), '222')
    //     if(s.indexOf(word) !== s.lastIndexOf(word)){ // 题目数据 保证 每个 words[i] 都是独一无二的。
    //         arr.push((word))
    //     }
    // }
    // return arr
};
// console.log(stringMatching(["mass","as","hero","superhero"]));
// console.log(stringMatching(["leetcoder","leetcode","od","hamlet","am"]));

/**
 * 1413. 逐步求和得到正数的最小值
 *
 * 给你一个整数数组 nums 。你可以选定任意的 正数 startValue 作为初始值。
 *
 * 你需要从左到右遍历 nums 数组，并将 startValue 依次累加上 nums 数组中的值。
 *
 * 请你在确保累加和始终大于等于 1 的前提下，选出一个最小的 正数 作为 startValue 。
 *
 * 示例 1：
 * 输入：nums = [-3,2,-3,4,2]
 * 输出：5
 * 解释：如果你选择 startValue = 4，在第三次累加时，和小于 1 。
 *                 累加求和
 *                 startValue = 4 | startValue = 5 | nums
 *                   (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
 *                   (1 +2 ) = 3  | (2 +2 ) = 4    |   2
 *                   (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
 *                   (0 +4 ) = 4  | (1 +4 ) = 5    |   4
 *                   (4 +2 ) = 6  | (5 +2 ) = 7    |   2
 *
 * 示例 2：
 * 输入：nums = [1,2]
 * 输出：1
 * 解释：最小的 startValue 需要是正数。
 *
 * 示例 3：
 * 输入：nums = [1,-2,-3]
 * 输出：5
 *
 * 提示：
 * 1 <= nums.length <= 100
 * -100 <= nums[i] <= 100
 * */
const minStartValue = (nums) => {
    // 方法1：
    // let count = 0, res = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     count += nums[i];
    //     if (count < 1) {
    //         res = res + 1 - count
    //         count = 1;
    //     }
    // }
    // return res === 0 ? 1 : res;

    // 方法2：
    let min = 0;
    let prefixSum = 0;
    for (const n of nums) {
        prefixSum += n;
        min = Math.min(min, prefixSum);
    }
    return 1 - min;
}
// console.log(minStartValue([-3,2,-3,4,2]))
// console.log(minStartValue([-5,-2,4,4,-2]));

/**
 * 1431. 拥有最多糖果的孩子
 *
 * 给你一个数组 candies 和一个整数 extraCandies ，其中 candies[i] 代表第 i 个孩子拥有的糖果数目。
 *
 * 对每一个孩子，检查是否存在一种方案，将额外的 extraCandies 个糖果分配给孩子们之后，此孩子有 最多 的糖果。注意，允许有多个孩子同时拥有 最多 的糖果数目。
 *
 * 示例 1：
 * 输入：candies = [2,3,5,1,3], extraCandies = 3
 * 输出：[true,true,true,false,true]
 * 解释：
 * 孩子 1 有 2 个糖果，如果他得到所有额外的糖果（3个），那么他总共有 5 个糖果，他将成为拥有最多糖果的孩子。
 * 孩子 2 有 3 个糖果，如果他得到至少 2 个额外糖果，那么他将成为拥有最多糖果的孩子。
 * 孩子 3 有 5 个糖果，他已经是拥有最多糖果的孩子。
 * 孩子 4 有 1 个糖果，即使他得到所有额外的糖果，他也只有 4 个糖果，无法成为拥有糖果最多的孩子。
 * 孩子 5 有 3 个糖果，如果他得到至少 2 个额外糖果，那么他将成为拥有最多糖果的孩子。
 *
 * 示例 2：
 * 输入：candies = [4,2,1,1,2], extraCandies = 1
 * 输出：[true,false,false,false,false]
 * 解释：只有 1 个额外糖果，所以不管额外糖果给谁，只有孩子 1 可以成为拥有糖果最多的孩子。
 *
 * 示例 3：
 * 输入：candies = [12,1,12], extraCandies = 10
 * 输出：[true,false,true]
 *
 * 提示：
 * 2 <= candies.length <= 100
 * 1 <= candies[i] <= 100
 * 1 <= extraCandies <= 50
 * */
const kidsWithCandies = (candies, extraCandies) => {
    let max = Math.max(...candies);
    let res = [];
    for (let i = 0; i < candies.length; i++) {
        let x = candies[i] + extraCandies;
        res.push(x >= max)
    }
    return res;
};
// console.log(kidsWithCandies([2,3,5,1,3], 3));

/**
 * 1437. 是否所有 1 都至少相隔 k 个元素
 *
 * 给你一个由若干 0 和 1 组成的数组 nums 以及整数 k。如果所有 1 都至少相隔 k 个元素，则返回 True ；否则，返回 False 。
 *
 * 示例 1：
 * 输入：nums = [1,0,0,0,1,0,0,1], k = 2
 * 输出：true
 * 解释：每个 1 都至少相隔 2 个元素。
 *
 * 示例 2：
 * 输入：nums = [1,0,0,1,0,1], k = 2
 * 输出：false
 * 解释：第二个 1 和第三个 1 之间只隔了 1 个元素。
 *
 * 示例 3：
 * 输入：nums = [1,1,1,1,1], k = 0
 * 输出：true
 *
 * 示例 4：
 * 输入：nums = [0,1,0,1], k = 1
 * 输出：true
 *
 * 提示：
 * 1 <= nums.length <= 10^5
 * 0 <= k <= nums.length
 * nums[i] 的值为 0 或 1
 * */
const kLengthApart = (nums, k) => {
    // 方法1：
    // let map = new Map();
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] === 1) {
    //         map.set(i, 1)
    //     }
    // }
    // let arr = Array.from(map.keys());
    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] - arr[i - 1] <= k) {
    //         return false
    //     }
    // }
    // return true;

    //  方法2：
    let idx = null;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (idx !== null && idx !== i) {
                if (i - idx <= k) {
                    return false;
                }
            }
            idx = i;
        }
    }
    return true;
};
// console.log(kLengthApart([1,0,0,0,1,0,0,1], 2));
// console.log(kLengthApart([1,0,0,1,0,1], 2));

/**
 * 1450. 在既定时间做作业的学生人数
 *
 * 给你两个整数数组 startTime（开始时间）和 endTime（结束时间），并指定一个整数 queryTime 作为查询时间。
 *
 * 已知，第 i 名学生在 startTime[i] 时开始写作业并于 endTime[i] 时完成作业。
 *
 * 请返回在查询时间 queryTime 时正在做作业的学生人数。形式上，返回能够使 queryTime 处于区间 [startTime[i], endTime[i]]（含）的学生人数。
 *
 * 示例 1：
 * 输入：startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
 * 输出：1
 * 解释：一共有 3 名学生。
 * 第一名学生在时间 1 开始写作业，并于时间 3 完成作业，在时间 4 没有处于做作业的状态。
 * 第二名学生在时间 2 开始写作业，并于时间 2 完成作业，在时间 4 没有处于做作业的状态。
 * 第三名学生在时间 3 开始写作业，预计于时间 7 完成作业，这是是唯一一名在时间 4 时正在做作业的学生。
 *
 * 示例 2：
 * 输入：startTime = [4], endTime = [4], queryTime = 4
 * 输出：1
 * 解释：在查询时间只有一名学生在做作业。
 *
 * 示例 3：
 * 输入：startTime = [4], endTime = [4], queryTime = 5
 * 输出：0
 *
 * 示例 4：
 * 输入：startTime = [1,1,1,1], endTime = [1,3,2,4], queryTime = 7
 * 输出：0
 *
 * 示例 5：
 * 输入：startTime = [9,8,7,6,5,4,3,2,1], endTime = [10,10,10,10,10,10,10,10,10], queryTime = 5
 * 输出：5
 *
 * 提示：
 * startTime.length == endTime.length
 * 1 <= startTime.length <= 100
 * 1 <= startTime[i] <= endTime[i] <= 1000
 * 1 <= queryTime <= 1000
 * */
const busyStudent = (startTime, endTime, queryTime) => {
    const len = startTime.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
            count++
        }
    }
    ;
    return count;
};
// console.log(busyStudent([1,2,3], [3,2,7], 4));

/**
 * 1460. 通过翻转子数组使两个数组相等
 *
 * 给你两个长度相同的整数数组 target 和 arr 。每一步中，你可以选择 arr 的任意 非空子数组 并将它翻转。你可以执行此过程任意次。
 *
 * 如果你能让 arr 变得与 target 相同，返回 True；否则，返回 False 。
 *
 * 示例 1：
 * 输入：target = [1,2,3,4], arr = [2,4,1,3]
 * 输出：true
 * 解释：你可以按照如下步骤使 arr 变成 target：
 * 1- 翻转子数组 [2,4,1] ，arr 变成 [1,4,2,3]
 * 2- 翻转子数组 [4,2] ，arr 变成 [1,2,4,3]
 * 3- 翻转子数组 [4,3] ，arr 变成 [1,2,3,4]
 * 上述方法并不是唯一的，还存在多种将 arr 变成 target 的方法。
 *
 * 示例 2：
 * 输入：target = [7], arr = [7]
 * 输出：true
 * 解释：arr 不需要做任何翻转已经与 target 相等。
 *
 * 示例 3：
 * 输入：target = [3,7,9], arr = [3,7,11]
 * 输出：false
 * 解释：arr 没有数字 9 ，所以无论如何也无法变成 target 。
 *
 * 提示：
 * target.length == arr.length
 * 1 <= target.length <= 1000
 * 1 <= target[i] <= 1000
 * 1 <= arr[i] <= 1000
 * */
const canBeEqual = (target, arr) => {
    // 方法1：思路 判断两个数组元素是否相同，若相同，则返回true，否则返回false
    target.sort((a, b) => a - b);
    arr.sort((a, b) => a - b);
    return target.toString() === arr.toString();
};
// console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]))

/**
 * 1464. 数组中两元素的最大乘积
 *
 * 给你一个整数数组 nums，请你选择数组的两个不同下标 i 和 j，使 (nums[i]-1)*(nums[j]-1) 取得最大值。
 *
 * 请你计算并返回该式的最大值。
 *
 * 示例 1：
 * 输入：nums = [3,4,5,2]
 * 输出：12
 * 解释：如果选择下标 i=1 和 j=2（下标从 0 开始），则可以获得最大值，(nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12 。
 *
 * 示例 2：
 * 输入：nums = [1,5,4,5]
 * 输出：16
 * 解释：选择下标 i=1 和 j=3（下标从 0 开始），则可以获得最大值 (5-1)*(5-1) = 16 。
 *
 * 示例 3：
 * 输入：nums = [3,7]
 * 输出：12
 *
 * 提示：
 * 2 <= nums.length <= 500
 * 1 <= nums[i] <= 10^3
 * */
const maxProduct = (nums) => {
    // 方法1：
    // nums.sort((a, b) => b - a);
    // return (nums[0] - 1) * (nums[1] - 1);

    // 方法2：
    let max = -1, second = -1;
    for (const n of nums) {
        if (n > max) {
            second = max;
            max = n;
        } else if (n > second) {
            second = n;
        }
    }
    return (max - 1) * (second - 1);
};
// console.log(maxProduct([3, 4, 5, 2]));

/**
 * 1470. 重新排列数组
 *
 * 给你一个数组 nums ，数组中有 2n 个元素，按 [x1,x2,...,xn,y1,y2,...,yn] 的格式排列。
 *
 * 请你将数组按 [x1,y1,x2,y2,...,xn,yn] 格式重新排列，返回重排后的数组。
 *
 * 示例 1：
 * 输入：nums = [2,5,1,3,4,7], n = 3
 * 输出：[2,3,5,4,1,7]
 * 解释：由于 x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 ，所以答案为 [2,3,5,4,1,7]
 *
 * 示例 2：
 * 输入：nums = [1,2,3,4,4,3,2,1], n = 4
 * 输出：[1,4,2,3,3,2,4,1]
 *
 * 示例 3：
 * 输入：nums = [1,1,2,2], n = 2
 * 输出：[1,2,1,2]
 *
 * 提示：
 * 1 <= n <= 500
 * nums.length == 2n
 * 1 <= nums[i] <= 10^3
 * */
const shuffle = (nums, n) => {
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(nums[i], nums[i + n]);
    }
    return res;
};
// console.log(shuffle([2, 5, 1, 3, 4, 7], 3));

/**
 * 1475. 商品折扣后的最终价格
 *
 * 给你一个数组 prices ，其中 prices[i] 是商店里第 i 件商品的价格。
 *
 * 商店里正在进行促销活动，如果你要买第 i 件商品，那么你可以得到与 prices[j] 相等的折扣，其中 j 是满足 j > i 且 prices[j] <= prices[i] 的 最小下标 ，如果没有满足条件的 j ，你将没有任何折扣。
 *
 * 请你返回一个数组，数组中第 i 个元素是折扣后你购买商品 i 最终需要支付的价格。
 *
 * 示例 1：
 * 输入：prices = [8,4,6,2,3]
 * 输出：[4,2,4,2,3]
 * 解释：
 * 商品 0 的价格为 price[0]=8 ，你将得到 prices[1]=4 的折扣，所以最终价格为 8 - 4 = 4 。
 * 商品 1 的价格为 price[1]=4 ，你将得到 prices[3]=2 的折扣，所以最终价格为 4 - 2 = 2 。
 * 商品 2 的价格为 price[2]=6 ，你将得到 prices[3]=2 的折扣，所以最终价格为 6 - 2 = 4 。
 * 商品 3 和 4 都没有折扣。
 *
 * 示例 2：
 * 输入：prices = [1,2,3,4,5]
 * 输出：[1,2,3,4,5]
 * 解释：在这个例子中，所有商品都没有折扣。
 *
 * 示例 3：
 * 输入：prices = [10,1,1,6]
 * 输出：[9,0,1,6]
 *
 * 提示：
 * 1 <= prices.length <= 500
 * 1 <= prices[i] <= 10^3
 * */
const finalPrices = (prices) => {
    // 方法1：
    // const res = [];
    // for (let i = 0; i < prices.length; i++) {
    //     for (let j = i + 1; j < prices.length; j++) {
    //         if (prices[j] <= prices[i]) {
    //             res.push(prices[i] - prices[j]);
    //             break;
    //         }
    //     }
    //     if (i !== res.length - 1) {
    //         res.push(prices[i])
    //     }
    // }
    // return res;

    // 方法2：改进 方法1
    // for (let i = 0; i < prices.length; i++) {
    //     let discount = 0;
    //     for (let j = i + 1; j < prices.length; j++) {
    //         if (prices[j] <= prices[i]) {
    //             discount = prices[j]
    //             break;
    //         }
    //     }
    //     prices[i] -= discount;
    // }
    // return prices;

    // let stack = [];
    // for (let i = 0; i < prices.length; i++) {
    //     while (stack !== null && prices[stack[stack.length - 1]] >= prices[i]) {
    //         prices[stack.pop()] -= prices[i];
    //     }
    //     stack.push(i);
    // }
    // return prices;
};
// console.log(finalPrices([8,4,6,2,3]))

/**
 * 1480. 一维数组的动态和
 *
 * 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。
 *
 * 请返回 nums 的动态和。
 *
 * 示例 1：
 * 输入：nums = [1,2,3,4]
 * 输出：[1,3,6,10]
 * 解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。
 *
 * 示例 2：
 * 输入：nums = [1,1,1,1,1]
 * 输出：[1,2,3,4,5]
 * 解释：动态和计算过程为 [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1] 。
 *
 * 示例 3：
 * 输入：nums = [3,1,2,10,1]
 * 输出：[3,4,6,16,17]
 *
 * 提示：
 * 1 <= nums.length <= 1000
 * -10^6 <= nums[i] <= 10^6
 * */
const runningSum = (nums) => {
    const res = [], len = nums.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        count += nums[i];
        res.push(count);
    }
    return res;
};
// console.log(runningSum([1,2,3,4]))

/**
 * 1491. 去掉最低工资和最高工资后的工资平均值
 *
 * 给你一个整数数组 salary ，数组里每个数都是 唯一 的，其中 salary[i] 是第 i 个员工的工资。
 *
 * 请你返回去掉最低工资和最高工资以后，剩下员工工资的平均值。
 *
 * 示例 1：
 * 输入：salary = [4000,3000,1000,2000]
 * 输出：2500.00000
 * 解释：最低工资和最高工资分别是 1000 和 4000 。
 * 去掉最低工资和最高工资以后的平均工资是 (2000+3000)/2= 2500
 *
 * 示例 2：
 * 输入：salary = [1000,2000,3000]
 * 输出：2000.00000
 * 解释：最低工资和最高工资分别是 1000 和 3000 。
 * 去掉最低工资和最高工资以后的平均工资是 (2000)/1= 2000
 *
 * 示例 3：
 * 输入：salary = [6000,5000,4000,3000,2000,1000]
 * 输出：3500.00000
 *
 * 示例 4：
 * 输入：salary = [8000,9000,2000,3000,6000,1000]
 * 输出：4750.00000
 *
 * 提示：
 * 3 <= salary.length <= 100
 * 10^3 <= salary[i] <= 10^6
 * salary[i] 是唯一的。
 * 与真实值误差在 10^-5 以内的结果都将视为正确答案。
 * */
const average = (salary) => {
    // 方法1：
    // salary.sort((a, b) => a - b);
    // let sum = salary.reduce((pre, cur) => pre + cur, 0);
    // return (sum - salary[0] - salary[salary.length - 1]) / (salary.length - 2);
};
// console.log(average([8000,9000,2000,3000,6000,1000]))

/**
 * 1502. 判断能否形成等差数列
 *
 * 给你一个数字数组 arr 。
 *
 * 如果一个数列中，任意相邻两项的差总等于同一个常数，那么这个数列就称为 等差数列 。
 *
 * 如果可以重新排列数组形成等差数列，请返回 true ；否则，返回 false 。
 *
 * 示例 1：
 * 输入：arr = [3,5,1]
 * 输出：true
 * 解释：对数组重新排序得到 [1,3,5] 或者 [5,3,1] ，任意相邻两项的差分别为 2 或 -2 ，可以形成等差数列。
 *
 * 示例 2：
 * 输入：arr = [1,2,4]
 * 输出：false
 * 解释：无法通过重新排序得到等差数列。
 *
 * 提示：
 * 2 <= arr.length <= 1000
 * -10^6 <= arr[i] <= 10^6
 * */
const canMakeArithmeticProgression = (arr) => {
    // 方法1：
    // arr.sort((a, b) => a - b);
    // let d = arr[1] - arr[0];
    // for (let i = 2; i < arr.length; i++) {
    //     if (arr[i] - arr[i - 1] !== d) return false;
    // }
    // return true;

    // 方法2：
    arr.sort((a, b) => a - b);
    for (let i = 1, n = arr.length; i < n - 1; i++) {
        if (arr[i] * 2 !== arr[i - 1] + arr[i + 1]) {
            return false;
        }
    }
    return true;
};
// console.log(canMakeArithmeticProgression([1, 3, 5]))

/**
 * 1512. 好数对的数目
 *
 * 给你一个整数数组 nums 。
 *
 * 如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。
 *
 * 返回好数对的数目。
 *
 * 示例 1：
 * 输入：nums = [1,2,3,1,1,3]
 * 输出：4
 * 解释：有 4 组好数对，分别是 (0,3), (0,4), (3,4), (2,5) ，下标从 0 开始
 *
 * 示例 2：
 * 输入：nums = [1,1,1,1]
 * 输出：6
 * 解释：数组中的每组数字都是好数对
 *
 * 示例 3：
 * 输入：nums = [1,2,3]
 * 输出：0
 *
 * 提示：
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 100
 * */
const numIdenticalPairs = (nums) => {
    // 方法1：
    // let map = new Map();
    // for (let i = 0; i < nums.length; i++) {
    //     if (!map.has(nums[i])) {
    //         map.set(nums[i], 1)
    //     } else {
    //         map.set(nums[i], map.get(nums[i]) + 1)
    //     }
    // }
    // let arr = [];
    // map.forEach((val, keys) => {
    //     if (val >= 2) {
    //         arr.push(val)
    //     }
    // })
    // if (arr.length === 0) return 0;
    // let res = 0;
    // // 总结出来的公式
    // for (let i = 0; i < arr.length; i++) {
    //     let count = 0;
    //     if (arr[i] % 2 === 0) {
    //         count += arr[i] * arr[i] / 2 - arr[i] / 2
    //     } else {
    //         count += Math.floor(arr[i] / 2) * arr[i]
    //     }
    //     res += count;
    // }
    // return res;

    // 方法2：
    let count = new Array(101).fill(0)
    let res = 0;
    for (const n of nums) {
        res += count[n];
        count[n]++;
    }
    return res;
};
// console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))
// console.log(numIdenticalPairs([1,1,1,1]))

/**
 * 1528. 重新排列字符串
 *
 * 给你一个字符串 s 和一个 长度相同 的整数数组 indices 。
 *
 * 请你重新排列字符串 s ，其中第 i 个字符需要移动到 indices[i] 指示的位置。
 *
 * 返回重新排列后的字符串。
 *
 * 示例 1：
 * 输入：s = "codeleet", indices = [4,5,6,7,0,2,1,3]
 * 输出："leetcode"
 * 解释：如图所示，"codeleet" 重新排列后变为 "leetcode" 。
 *
 * 示例 2：
 * 输入：s = "abc", indices = [0,1,2]
 * 输出："abc"
 * 解释：重新排列后，每个字符都还留在原来的位置上。
 *
 * 提示：
 * s.length == indices.length == n
 * 1 <= n <= 100
 * s 仅包含小写英文字母
 * 0 <= indices[i] < n
 * indices 的所有的值都是 唯一 的
 * */
const restoreString = (s, indices) => {
    // 方法1：
    // let map = new Map();
    // for (let i = 0; i < indices.length; i++) {
    //     map.set(indices[i], s[i])
    // };
    // let res = Array.from(indices.length).fill(0);
    // for (let i = 0; i < indices.length; i++) {
    //     res[i] = map.get(i)
    // }
    // return res.join('');

    // 方法2：
    let ary = [];
    for (let i = 0; i < indices.length; i++) {
        ary[indices[i]] = s.charAt(i)
    }
    ;
    return ary.join();
};
// console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));

/**
 * 1534. 统计好三元组
 *
 * 给你一个整数数组 arr ，以及 a、b 、c 三个整数。请你统计其中好三元组的数量。
 *
 * 如果三元组 (arr[i], arr[j], arr[k]) 满足下列全部条件，则认为它是一个 好三元组 。
 *
 * 0 <= i < j < k < arr.length
 * |arr[i] - arr[j]| <= a
 * |arr[j] - arr[k]| <= b
 * |arr[i] - arr[k]| <= c
 * 其中 |x| 表示 x 的绝对值。
 *
 * 返回 好三元组的数量 。
 *
 * 示例 1：
 * 输入：arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
 * 输出：4
 * 解释：一共有 4 个好三元组：[(3,0,1), (3,0,1), (3,1,1), (0,1,1)] 。
 *
 * 示例 2：
 * 输入：arr = [1,1,2,2,3], a = 0, b = 0, c = 1
 * 输出：0
 * 解释：不存在满足所有条件的三元组。
 *
 * 提示：
 * 3 <= arr.length <= 100
 * 0 <= arr[i] <= 1000
 * 0 <= a, b, c <= 1000
 * */
const countGoodTriplets = (arr, a, b, c) => {
    // 方法1：暴力求解
    let res = 0;
    const len = arr.length;
    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len; j++) {
            if (Math.abs(arr[i] - arr[j]) <= a) {
                for (let k = j + 1; k < len; k++) {
                    if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
                        res += 1;
                    }
                }
            }
        }
    }
    return res;
};
// console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3))

/**
 * 1539. 第 K 个缺失的正整数
 *
 * 给你一个 严格升序排列 的正整数数组 arr 和一个整数 k 。
 *
 * 请你找到这个数组里第 k 个缺失的正整数。
 *
 * 示例 1：
 * 输入：arr = [2,3,4,7,11], k = 5
 * 输出：9
 * 解释：缺失的正整数包括 [1,5,6,8,9,10,12,13,...] 。第 5 个缺失的正整数为 9 。
 *
 * 示例 2：
 * 输入：arr = [1,2,3,4], k = 2
 * 输出：6
 * 解释：缺失的正整数包括 [5,6,7,...] 。第 2 个缺失的正整数为 6 。
 *
 * 提示：
 * 1 <= arr.length <= 1000
 * 1 <= arr[i] <= 1000
 * 1 <= k <= 1000
 * 对于所有 1 <= i < j <= arr.length 的 i 和 j 满足 arr[i] < arr[j]
 * */
const findKthPositive = (arr, k) => {
    // 方法1：
    // const len = arr.length;
    // const x = arr[len - 1];
    // const y = [];
    // for (let i = 1; i <= x + 1; i++) {
    //     if (arr.indexOf(i) === -1) {
    //         y.push(i)
    //     }
    // };
    // return k > y.length ? y[y.length - 1] + k - y.length : y[k - 1]

    // 方法2：
    // const sum = arr.length + k;
    // for (let i = 1; i < sum + 1; i++) {
    //     if (!arr.includes(i)) {
    //         k--
    //     }
    //     if (k === 0) {
    //         return i
    //     }
    // }

    // 方法3：
    // let l = 0, r = arr.length - 1, m;
    // while (l < r) {
    //     m = Math.floor((l + r) / 2);
    //     console.log(m)
    //     if (arr[m] - m - 1 < k) {
    //         l = m + 1;
    //     } else {
    //         r = m
    //     }
    // }
    // return l + k;
};
// console.log(findKthPositive([2, 3, 4, 7, 11], 5))
// console.log(findKthPositive([7, 8, 9, 10], 5))

/**
 * 1550. 存在连续三个奇数的数组
 *
 * 给你一个整数数组 arr，请你判断数组中是否存在连续三个元素都是奇数的情况：如果存在，请返回 true ；否则，返回 false 。
 *
 * 示例 1：
 * 输入：arr = [2,6,4,1]
 * 输出：false
 * 解释：不存在连续三个元素都是奇数的情况。
 *
 * 示例 2：
 * 输入：arr = [1,2,34,3,4,5,7,23,12]
 * 输出：true
 * 解释：存在连续三个元素都是奇数的情况，即 [5,7,23] 。
 *
 * 提示：
 * 1 <= arr.length <= 1000
 * 1 <= arr[i] <= 1000
 * */
const threeConsecutiveOdds = (arr) => {
    const len = arr.length;
    if (len < 3) return false;
    let count = 0;
    for (let i = 0; i < len; i++) {
        if (arr[i] % 2 === 1) {
            count++
            if (count === 3) return true;
        } else {
            count = 0;
        }
    }
    return false;
};
// console.log(threeConsecutiveOdds([1,1,1]))
// console.log(threeConsecutiveOdds([2,6,4,1]))

/**
 * 1566. 重复至少 K 次且长度为 M 的模式
 *
 * 给你一个正整数数组 arr，请你找出一个长度为 m 且在数组中至少重复 k 次的模式。
 *
 * 模式 是由一个或多个值组成的子数组（连续的子序列），连续 重复多次但 不重叠 。 模式由其长度和重复次数定义。
 *
 * 如果数组中存在至少重复 k 次且长度为 m 的模式，则返回 true ，否则返回  false 。
 *
 * 示例 1：
 * 输入：arr = [1,2,4,4,4,4], m = 1, k = 3
 * 输出：true
 * 解释：模式 (4) 的长度为 1 ，且连续重复 4 次。注意，模式可以重复 k 次或更多次，但不能少于 k 次。
 *
 * 示例 2：
 * 输入：arr = [1,2,1,2,1,1,1,3], m = 2, k = 2
 * 输出：true
 * 解释：模式 (1,2) 长度为 2 ，且连续重复 2 次。另一个符合题意的模式是 (2,1) ，同样重复 2 次。
 *
 * 示例 3：
 * 输入：arr = [1,2,1,2,1,3], m = 2, k = 3
 * 输出：false
 * 解释：模式 (1,2) 长度为 2 ，但是只连续重复 2 次。不存在长度为 2 且至少重复 3 次的模式。
 *
 * 示例 4：
 * 输入：arr = [1,2,3,1,2], m = 2, k = 2
 * 输出：false
 * 解释：模式 (1,2) 出现 2 次但并不连续，所以不能算作连续重复 2 次。
 *
 * 示例 5：
 * 输入：arr = [2,2,2,2], m = 2, k = 3
 * 输出：false
 * 解释：长度为 2 的模式只有 (2,2) ，但是只连续重复 2 次。注意，不能计算重叠的重复次数。
 *
 * 提示：
 * 2 <= arr.length <= 100
 * 1 <= arr[i] <= 100
 * 1 <= m <= 100
 * 2 <= k <= 100
 * */
const containsPattern = (arr, m, k) => {
    if (m * k > arr.length) return false;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + m]) {
            count++
            // 第一次出现重复的时候是计算两次，随后每当 count 的次数增加 m 的时候，实则只出现一次重复
            if (Math.floor(count / m) + 1 === k) {
                return true
            }
        } else {
            count = 0
        }
    }
    return false;
}
// console.log(containsPattern([1, 2, 1, 2, 1, 1, 1, 3], 2, 2))
// console.log(containsPattern([1,2,1,2,1,3], 2, 3))
// console.log(containsPattern([1,2,4,4,4,4], 1, 3))

/**
 * 1572. 矩阵对角线元素的和
 *
 * 给你一个正方形矩阵 mat，请你返回矩阵对角线元素的和。
 *
 * 请你返回在矩阵主对角线上的元素和副对角线上且不在主对角线上元素的和。
 *
 * 示例  1：
 * 输入：mat = [[1,2,3],
 *             [4,5,6],
 *             [7,8,9]]
 * 输出：25
 * 解释：对角线的和为：1 + 5 + 9 + 3 + 7 = 25
 * 请注意，元素 mat[1][1] = 5 只会被计算一次。
 *
 * 示例  2：
 * 输入：mat = [[1,1,1,1],
 *             [1,1,1,1],
 *             [1,1,1,1],
 *             [1,1,1,1]]
 * 输出：8
 *
 * 示例 3：
 * 输入：mat = [[5]]
 * 输出：5
 *
 * 提示：
 * n == mat.length == mat[i].length
 * 1 <= n <= 100
 * 1 <= mat[i][j] <= 100
 * */
const diagonalSum = (mat) => {
    // 方法1：
    // let len = mat.length;
    // let count = 0;
    // for (let i = 0; i < len; i++) {
    //     count += mat[i][i]
    //     count += mat[i][len - 1 - i]
    // }
    // if (len % 2 === 1) {
    //     let x = Math.floor(len / 2)
    //     count -= mat[x][x]
    // }
    // return count;

    // 方法2：
    const n = mat.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += mat[i][i] + mat[i][n - 1 - i];
        if (i === n - 1 - i) sum -= mat[i][i];
    }
    return sum;
};
// console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]]))

/**
 * 1582. 二进制矩阵中的特殊位置
 *
 * 给你一个大小为 rows x cols 的矩阵 mat，其中 mat[i][j] 是 0 或 1，请返回 矩阵 mat 中特殊位置的数目 。
 *
 * 特殊位置 定义：如果 mat[i][j] == 1 并且第 i 行和第 j 列中的所有其他元素均为 0（行和列的下标均 从 0 开始 ），则位置 (i, j) 被称为特殊位置。
 *
 * 示例 1：
 * 输入：mat = [[1,0,0],
 *             [0,0,1],
 *             [1,0,0]]
 * 输出：1
 * 解释：(1,2) 是一个特殊位置，因为 mat[1][2] == 1 且所处的行和列上所有其他元素都是 0
 *
 * 示例 2：
 * 输入：mat = [[1,0,0],
 *             [0,1,0],
 *             [0,0,1]]
 * 输出：3
 * 解释：(0,0), (1,1) 和 (2,2) 都是特殊位置
 *
 * 示例 3：
 * 输入：mat = [[0,0,0,1],
 *             [1,0,0,0],
 *             [0,1,1,0],
 *             [0,0,0,0]]
 * 输出：2
 *
 * 示例 4：
 * 输入：mat = [[0,0,0,0,0],
 *             [1,0,0,0,0],
 *             [0,1,0,0,0],
 *             [0,0,1,0,0],
 *             [0,0,0,1,1]]
 * 输出：3
 *
 * 提示：
 * rows == mat.length
 * cols == mat[i].length
 * 1 <= rows, cols <= 100
 * mat[i][j] 是 0 或 1
 * */
const numSpecial = (mat) => {
    let sum = 0;
    let len = mat.length;
    for (let i = 0; i < len; i++) {
        let count = len;
        const idx = mat[i].indexOf(1);
        const lastIdx = mat[i].lastIndexOf(1);
        if (idx !== -1 && idx === lastIdx) {
            for (let j = 0; j < len; j++) {
                if (mat[j][idx] === 0) {
                    count--;
                }
            }
        }
        if (count === 1) {
            sum++
        }
    }
    return sum;
};
// console.log(numSpecial([[0,0,1,0],[0,0,0,0],[0,0,0,0],[0,1,0,0]]))
// console.log(numSpecial([[0, 0, 0, 1], [1, 0, 0, 0], [0, 1, 1, 0], [0, 0, 0, 0]]))

/**
 * 1588. 所有奇数长度子数组的和
 *
 * 给你一个正整数数组 arr ，请你计算所有可能的奇数长度子数组的和。
 *
 * 子数组 定义为原数组中的一个连续子序列。
 *
 * 请你返回 arr 中 所有奇数长度子数组的和 。
 *
 * 示例 1：
 * 输入：arr = [1,4,2,5,3]
 * 输出：58
 * 解释：所有奇数长度子数组和它们的和为：
 * [1] = 1
 * [4] = 4
 * [2] = 2
 * [5] = 5
 * [3] = 3
 * [1,4,2] = 7
 * [4,2,5] = 11
 * [2,5,3] = 10
 * [1,4,2,5,3] = 15
 * 我们将所有值求和得到 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
 *
 * 示例 2：
 * 输入：arr = [1,2]
 * 输出：3
 * 解释：总共只有 2 个长度为奇数的子数组，[1] 和 [2]。它们的和为 3 。
 *
 * 示例 3：
 * 输入：arr = [10,11,12]
 * 输出：66
 *
 * 提示：
 * 1 <= arr.length <= 100
 * 1 <= arr[i] <= 1000
 * */
const sumOddLengthSubarrays = (arr) => {
    // 方法1：
    // let output = 0;
    // const len = arr.length;
    // for (let i = 0; i < len; i++) {
    //     let left = i + 1,
    //         right = len - i,
    //         left_odd = Math.floor((left + 1) / 2),
    //         left_even = Math.floor(left / 2),
    //         right_odd = Math.floor((right + 1) / 2),
    //         right_even = Math.floor(right / 2);
    //     output += (left_even * right_even+ left_odd * right_odd) * arr[i];
    // }
    // return output;

    // 方法2：
    let res = 0, len = arr.length;
    for (let i = 0; i < len; i++) {
        // res += Math.floor(((i + 1) * (len - 1) + 1) / 2) * arr[i];
        res += Math.floor(((i + 1) * (len - i) + 1) / 2) * arr[i];
    }
    return res;
};
// console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]))

/**
 * 1598. 文件夹操作日志搜集器
 *
 * 每当用户执行变更文件夹操作时，LeetCode 文件系统都会保存一条日志记录。
 *
 * 下面给出对变更操作的说明：
 *
 * "../" ：移动到当前文件夹的父文件夹。如果已经在主文件夹下，则 继续停留在当前文件夹 。
 * "./" ：继续停留在当前文件夹。
 * "x/" ：移动到名为 x 的子文件夹中。题目数据 保证总是存在文件夹 x 。
 * 给你一个字符串列表 logs ，其中 logs[i] 是用户在 ith 步执行的操作。
 *
 * 文件系统启动时位于主文件夹，然后执行 logs 中的操作。
 *
 * 执行完所有变更文件夹操作后，请你找出 返回主文件夹所需的最小步数 。
 *
 * 示例 1：
 * 输入：logs = ["d1/","d2/","../","d21/","./"]
 * 输出：2
 * 解释：执行 "../" 操作变更文件夹 2 次，即可回到主文件夹
 *
 * 示例 2：
 * 输入：logs = ["d1/","d2/","./","d3/","../","d31/"]
 * 输出：3
 *
 * 示例 3：
 * 输入：logs = ["d1/","../","../","../"]
 * 输出：0
 *
 * 提示：
 * 1 <= logs.length <= 103
 * 2 <= logs[i].length <= 10
 * logs[i] 包含小写英文字母，数字，'.' 和 '/'
 * logs[i] 符合语句中描述的格式
 * 文件夹名称由小写英文字母和数字组成
 * */
const minOperations = (logs) => {
    let res = 0, len = logs.length;
    for (let i = 0; i < len; i++) {
        if (logs[i] === "../") {
            res -= 1;
            if (res < 0) res = 0;
        } else if (logs[i] !== "./") {
            res += 1;
        }
    }
    return res;
};
// console.log(minOperations(["d1/","d2/","../","d21/","./"]))

/**
 * 1608. 特殊数组的特征值
 *
 * 给你一个非负整数数组 nums 。如果存在一个数 x ，使得 nums 中恰好有 x 个元素 大于或者等于 x ，那么就称 nums 是一个 特殊数组 ，而 x 是该数组的 特征值 。
 *
 * 注意： x 不必 是 nums 的中的元素。
 *
 * 如果数组 nums 是一个 特殊数组 ，请返回它的特征值 x 。否则，返回 -1 。可以证明的是，如果 nums 是特殊数组，那么其特征值 x 是 唯一的 。
 *
 * 示例 1：
 * 输入：nums = [3,5]
 * 输出：2
 * 解释：有 2 个元素（3 和 5）大于或等于 2 。
 *
 * 示例 2：
 * 输入：nums = [0,0]
 * 输出：-1
 * 解释：没有满足题目要求的特殊数组，故而也不存在特征值 x 。
 * 如果 x = 0，应该有 0 个元素 >= x，但实际有 2 个。
 * 如果 x = 1，应该有 1 个元素 >= x，但实际有 0 个。
 * 如果 x = 2，应该有 2 个元素 >= x，但实际有 0 个。
 * x 不能取更大的值，因为 nums 中只有两个元素。
 *
 * 示例 3：
 * 输入：nums = [0,4,3,0,4]
 * 输出：3
 * 解释：有 3 个元素大于或等于 3 。
 *
 * 示例 4：
 * 输入：nums = [3,6,7,7,0]
 * 输出：-1
 *
 * 提示：
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 1000
 * */
const specialArray = (nums) => {
    // 方法1：
    // nums.sort((a, b) => b - a)
    // let res = -1, len = nums.length;
    // for (let i = 1; i <= len; i++) {
    //     if (nums[i - 1] >= i) {
    //         res = i;
    //         continue
    //     }
    //     if (nums[i - 1] >= res) return -1;
    // }
    // return res;

    // 方法2：
    let left = 1, right = nums.length;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const count = nums.reduce((acc, curr) => mid <= curr ? acc + 1 : acc, 0);
        if (count === mid) return mid;
        if (count > mid) left = mid + 1;
        else right = mid - 1;
    }
    const count = nums.reduce((acc, cur) => (left <= cur ? acc + 1 : acc), 0);
    return count === left ? left : -1;
};
// console.log(specialArray([3, 5]))
// console.log(specialArray([0,4,3,0,4]))
// console.log(specialArray([3,6,7,7,0]))

/**
 * 1619. 删除某些元素后的数组均值
 *
 * 给你一个整数数组 arr ，请你删除最小 5% 的数字和最大 5% 的数字后，剩余数字的平均值。
 *
 * 与 标准答案 误差在 10-5 的结果都被视为正确结果。
 *
 * 示例 1：
 * 输入：arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]
 * 输出：2.00000
 * 解释：删除数组中最大和最小的元素后，所有元素都等于 2，所以平均值为 2 。
 *
 * 示例 2：
 * 输入：arr = [6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]
 * 输出：4.00000
 *
 * 示例 3：
 * 输入：arr = [6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4]
 * 输出：4.77778
 *
 * 示例 4：
 * 输入：arr = [9,7,8,7,7,8,4,4,6,8,8,7,6,8,8,9,2,6,0,0,1,10,8,6,3,3,5,1,10,9,0,7,10,0,10,4,1,10,6,9,3,6,0,0,2,7,0,6,7,2,9,7,7,3,0,1,6,1,10,3]
 * 输出：5.27778
 *
 * 示例 5：
 * 输入：arr = [4,8,4,10,0,7,1,3,7,8,8,3,4,1,6,2,1,1,8,0,9,8,0,3,9,10,3,10,1,10,7,3,2,1,4,9,10,7,6,4,0,8,5,1,2,1,6,2,5,0,7,10,9,10,3,7,10,5,8,5,7,6,7,6,10,9,5,10,5,5,7,2,10,7,7,8,2,0,1,1]
 * 输出：5.29167
 *
 * 提示：
 * 20 <= arr.length <= 1000
 * arr.length 是 20 的 倍数
 * 0 <= arr[i] <= 105
 * */
const trimMean = (arr) => {
    const len = arr.length;
    let sum = 0;
    arr.sort((a, b) => a - b);
    for (let i = Math.floor(len * 0.05); i < Math.floor(len * 0.95); i++) {
        sum += arr[i];
    }
    return (sum / (arr.length * 0.9)).toFixed(5)
};
// console.log(trimMean([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]))

/**
 * 1629. 按键持续时间最长的键
 *
 * LeetCode 设计了一款新式键盘，正在测试其可用性。测试人员将会点击一系列键（总计 n 个），每次一个。
 *
 * 给你一个长度为 n 的字符串 keysPressed ，其中 keysPressed[i] 表示测试序列中第 i 个被按下的键。releaseTimes 是一个升序排列的列表，其中 releaseTimes[i] 表示松开第 i 个键的时间。字符串和数组的 下标都从 0 开始 。第 0 个键在时间为 0 时被按下，接下来每个键都 恰好 在前一个键松开时被按下。
 *
 * 测试人员想要找出按键 持续时间最长 的键。第 i 次按键的持续时间为 releaseTimes[i] - releaseTimes[i - 1] ，第 0 次按键的持续时间为 releaseTimes[0] 。
 *
 * 注意，测试期间，同一个键可以在不同时刻被多次按下，而每次的持续时间都可能不同。
 *
 * 请返回单次按键 持续时间最长 的键，如果有多个这样的键，则返回 按字母顺序排列最大 的那个键。
 *
 * 示例 1：
 * 输入：releaseTimes = [9,29,49,50], keysPressed = "cbcd"
 * 输出："c"
 * 解释：按键顺序和持续时间如下：
 * 按下 'c' ，持续时间 9（时间 0 按下，时间 9 松开）
 * 按下 'b' ，持续时间 29 - 9 = 20（松开上一个键的时间 9 按下，时间 29 松开）
 * 按下 'c' ，持续时间 49 - 29 = 20（松开上一个键的时间 29 按下，时间 49 松开）
 * 按下 'd' ，持续时间 50 - 49 = 1（松开上一个键的时间 49 按下，时间 50 松开）
 * 按键持续时间最长的键是 'b' 和 'c'（第二次按下时），持续时间都是 20
 * 'c' 按字母顺序排列比 'b' 大，所以答案是 'c'
 *
 * 示例 2：
 * 输入：releaseTimes = [12,23,36,46,62], keysPressed = "spuda"
 * 输出："a"
 * 解释：按键顺序和持续时间如下：
 * 按下 's' ，持续时间 12
 * 按下 'p' ，持续时间 23 - 12 = 11
 * 按下 'u' ，持续时间 36 - 23 = 13
 * 按下 'd' ，持续时间 46 - 36 = 10
 * 按下 'a' ，持续时间 62 - 46 = 16
 * 按键持续时间最长的键是 'a' ，持续时间 16
 *
 * 提示：
 * releaseTimes.length == n
 * keysPressed.length == n
 * 2 <= n <= 1000
 * 1 <= releaseTimes[i] <= 109
 * releaseTimes[i] < releaseTimes[i+1]
 * keysPressed 仅由小写英文字母组成
 * */
const slowestKey = (releaseTimes, keysPressed) => {
    // 方法1
    // let num = releaseTimes[0], str = keysPressed[0];
    // for (let i = 1; i < releaseTimes.length; i++) {
    //     let current = releaseTimes[i] - releaseTimes[i - 1];
    //     if (current > num) {
    //         num = current;
    //         str = keysPressed[i]
    //     } else if (current === num) {
    //         if (keysPressed[i].charCodeAt(0) > str.charCodeAt(0)) {
    //             str = keysPressed[i];
    //         }
    //     }
    // }
    // return str;

    // 方法2：
    let idx = 0;
    let gap = releaseTimes[0];
    for (let i = 1; i < releaseTimes.length; i++) {
        if (releaseTimes[i] - releaseTimes[i - 1] > gap || (releaseTimes[i] - releaseTimes[i - 1] === gap && keysPressed[i] > keysPressed[idx] )) {
            gap = releaseTimes[i] - releaseTimes[i - 1];
            idx = i;
        }
    }
    return keysPressed[idx];
}
// console.log(slowestKey([9,29,49,50], "cbcd"))
// console.log(slowestKey([12,23,36,46,62], "spuda"))