function countProps(object) {
    // Пиши код ниже этой строки
    let propCount = 0;
    const keys = Object.keys(object);

    return Object.keys(object).length;

    // for (const key of keys) {
    //     propCount += 1;
    // }

    // return propCount;
    // Пиши код выше этой строки

}

console.log(countProps({}));
console.log(countProps({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));