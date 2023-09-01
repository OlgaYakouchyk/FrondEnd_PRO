const newArray = [5, 8, 93, 76, "hurdjk", "hdjudk", "jdfkidk"];
// let sum = 0;
// newArray.forEach(function (item) {
//   if (typeof item !== "string") {
//     sum += item;
//   }
// });
// console.log(sum);

newArray.forEach(function(item){
    if(typeof item !== 'string'){
        if(item % 2 === 0){
            console.log(item);
        }

    }
})