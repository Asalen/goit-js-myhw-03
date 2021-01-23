function getCommonElements(array1, array2) {
    // Пиши код ниже этой строки
    const newArray = [];
    for (const numberArray of array1) {
        if (array2.includes(numberArray)) {
            newArray.push(numberArray)
        }
    }
    return newArray;
    // Пиши код выше этой строки
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));