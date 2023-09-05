const names = ["John", "Jane", "Michael", "Emily"];

const result = names.map(function (item) {
  return `${item} Ivanov`;
});

const newResult = result.filter(function (item) {
  return item.length >= 12;
});
 console.log(newResult);

 function fn(arr) {
    return arr
    .map(function(item) {
        return `${item} Ivanov`
    })
    .filter(function(item) {
        return item.length >= 12
    })
}

console.log(fn(names))