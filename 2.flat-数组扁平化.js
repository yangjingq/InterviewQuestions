// 实现数组扁平化
let arr = [[1], [2, 3], [4, 5, 6, [7, 8, [9, 10, [11]]]], 12];

// 方法1： flat -Infinity:最大层
console.log(arr.flat(Infinity), '方法1');

// 2. 先转成字符串，在转数组
// console.log(arr.toString()); // 1,2,3,4,5,6,7,8,9,10,11,12
console.log(
  arr
    .toString() // 1, 2, 3,.....
    .split(',')
    .map((item) => Number(item)),
  '方法2'
);

// 3. stringfy
// console.log(JSON.stringify(arr)); //  // [[1],[2,3],[4,5,6,[7,8,[9,10,[11]]]],12]
console.log(
  JSON.stringify(arr)
    .replace(/\[|\]/g, '') // 替换[ ]
    .split(',')
    .map((item) => Number(item)),
  '方法3'
);

// 4. concat 可以展开一层
/*while (arr.some((item) => Array.isArray(item))) {
  arr = [].concat(...arr);
}
console.log(arr);*/

// 5.自定义myFlat
Array.prototype.myFlat = function () {
  let result = [];
  let _this = this; // 原始数组
  function _flat(arr) {
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (Array.isArray(item)) {
        _flat(item);
      } else {
        result.push(item);
      }
    }
  }
  _flat(_this);
  return result;
};
console.log(arr.myFlat(), '方法4');
