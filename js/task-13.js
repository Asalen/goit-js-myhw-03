function slugify(title) {
    // Пиши код ниже этой строки
    let slug;
    return slug = title.toLowerCase().split(' ').join('-');
    // Пиши код выше этой строки
}

console.log(slugify('Массивы для новичков'));
console.log(slugify('Английский для разработчика'));
console.log(slugify('Десять секретов JavaScript'));
console.log(slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ'));