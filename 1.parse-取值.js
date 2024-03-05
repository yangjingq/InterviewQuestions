// 写一个parse函数，实现如下功能

let obj = {
  a: 1,
  b: { c: 2 },
  d: [1, 2, 3],
  e: [{ f: [4, 5, 6] }],
};

let r1 = parse(obj, 'a'); // = 1
let r2 = parse(obj, 'b.c'); // =2
let r3 = parse(obj, 'd[2]'); // = 3
let r4 = parse(obj, 'e[0].f[0]'); // =4

console.log(r1, r2, r3, r4);
// 解答
// 方法1
/*function parse(obj, str) {
  let fn = new Function('obj', 'return obj.' + str);
  return fn(obj);
}*/

// 方法2
function parse(obj, str) {
  str.replace(/\[(\d+)\]/g, '.$1'); // 正则，将[] 替换为.  e[0] => e.0
  let arr = str.split('.');
  // arr.forEach((item) => {
  //   obj = obj[item];
  // });
  for (let i = 0; i < arr.length; i++) {
    obj = obj[item];
    if (!obj) return -1;
  }
  return obj;
}
