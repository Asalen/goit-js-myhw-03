function countProps(object) {
    let propCount = 0;
    // Пиши код ниже этой строки
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            propCount += 1
        }
    }
    console.log(propCount);
    // Пиши код выше этой строки
    return propCount;
}
countProps({});
countProps({ name: 'Mango', age: 2 });
countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });