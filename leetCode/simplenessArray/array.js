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
const matrixReshape = (mat, r, c) => {
    // let drawdownArr = [];
    // for (let i = 0; i < mat.length; i++) {
    //     drawdownArr.push(...mat[i])
    // }
    // let resultArr = [];
    // function subGroup(arr, len) {
    //     let newArr = []
    //     for (let i = 0; i < arr.length; i++) {
    //         if (Math.floor(i / len) === i / len) {
    //             newArr.push(arr.slice(i, i + len))
    //         }
    //     }
    //     return newArr;
    // }
    // resultArr = subGroup(drawdownArr, drawdownArr.length / r)
    // return resultArr;
}
// console.log(matrixReshape([[1,2],[3,4]], 2, 4))

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

    if(nums.length === 0) return 0;
    let result = 1;
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] > nums[i - 1]) {
            count++
        } else {
            count = 1
        }
        if(count > result) result = count
    }
    return result;
}
// console.log(findLengthOfLCIS([1,3,5,4,7]))