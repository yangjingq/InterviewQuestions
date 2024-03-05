/**
 * 1.preventExtensions 不可扩展 不可以增加新的属性， 老的属性可以删除，也可以修改值
 * Object.isExtensible() 检验对象是否可扩展
 */
let obj = { name: 'zhufeng' };
console.log(Object.isExtensible(obj)); // true 可扩展

Object.preventExtensions(obj);
console.log(Object.isExtensible(obj)); // false 不可扩展

obj.age = 10; // age属性添加失败
console.log(obj); // { name: 'zhufeng' }

console.log('--------------------------');
/**
 * 2.seal 密封 使对象不可以增加新的属性，老的属性不可以删除，但是可以修改值
 * Object.isSealed() 检验对象是否密封
 */
let obj2 = { name: 'zhufeng' };
console.log(Object.isExtensible(obj2)); // true 可扩展
console.log(Object.isSealed(obj2)); // false 没有密封
Object.seal(obj2);
console.log(Object.isExtensible(obj2)); // false 不可扩展
console.log(Object.isSealed(obj2)); // true 已密封

obj2.name = 'jiagou';
obj2.age = 10; // 属性新增失败
delete obj2.name; // 删除失败
console.log(obj2); // { name: 'jiagou' }

console.log('--------------------------');
/**
 * 3.freeze 冻结 使对象不能新增、删除、修改属性
 * Object.isFrozen() 检验一个对象是否冻结
 */
let obj3 = { name: '珠峰' };
Object.freeze(obj3);
obj3.name = 'jiagou'; // 值修改失败
console.log(obj3); // { name: '珠峰' }

// 总结： 以上三种都是浅控制，只能控制对象自身属性，针对引用类型无效

// 深度冻结-类似深拷贝实现思路
let obj4 = { name: { name: 'zhufeng' }, arr: [1, 2] };
function deepFreeze(obj) {
  let newObj = {};
  for (let key in obj) {
    let value = obj[key];
    newObj[key] = Object.freeze(value);
  }
}
