





var arr = [1,4,2,6,2,3,5,1]
const map = arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
console.log(map)

console.log("ffffffffffffffff")