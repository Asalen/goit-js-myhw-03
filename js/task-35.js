const bookShelf = {
    books: ['Последнее королевство', 'Мгла', 'Страж снов'],
    updateBook(oldName, newName) {
        // Пиши код ниже этой строки

        const index = this.books.indexOf(oldName);
        this.books.splice(index, 1, newName);

        // Пиши код выше этой строки
    },
};