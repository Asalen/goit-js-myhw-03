const atTheOldToad = {
    potions: [
        { name: 'Зелье скорости', price: 460 },
        { name: 'Дыхание дракона', price: 780 },
        { name: 'Каменная кожа', price: 520 },
    ],
    // Пиши код ниже этой строки
    getPotions() {
        return this.potions;
    },
    addPotion(potionName) {
        if (this.potions.includes(potionName)) {
            return `Зелье ${potionName} уже есть в инвентаре!`;
        }

        this.potions.push(potionName);
    },
    removePotion(potionName) {
        for (let i = 0; i < this.potions.length; i += 1) {
            if (potionName === this.potions[i].name) {
                this.potions.splice(i, 1);
            }
        }
        // const potionIndex = this.potions.indexOf(potionName);

        // if (potionIndex === -1) {
        //   return `Зелья ${potionName} нет в инвентаре!`;
        // }

        // this.potions.splice(potionIndex, 1);
    },
    updatePotionName(oldName, newName) {
        for (let i = 0; i < this.potions.length; i += 1) {
            if (oldName === this.potions[i].name) {
                this.potions[i].name = newName;
            }
        }
        // const potionIndex = this.potions.indexOf(oldName);

        // if (potionIndex === -1) {
        //   return `Зелья ${oldName} нет в инвентаре!`;
        // }

        // this.potions.splice(potionIndex, 1, newName);
    },
    // Пиши код выше этой строки
};