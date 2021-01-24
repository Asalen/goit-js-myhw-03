const atTheOldToad = {
    potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
    updatePotionName(oldName, newName) {
        // Пиши код ниже этой строки
        const potionsToChage = this.potions.indexOf(oldName);
        this.potions.splice(potionsToChage, 1, newName);
        // 🔥 Оставляем три пустые строки для студента
        // Пиши код выше этой строки
    },
};

console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));