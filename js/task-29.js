const defaultSettings = {
    theme: 'light',
    public: true,
    withPassword: false,
    minNumberOfQuestions: 10,
    timePerQuestion: 60,
};
const overrideSettings = {
    public: false,
    withPassword: true,
    timePerQuestion: 30,
};
// Пиши код ниже этой строки
const finalSettings = {...defaultSettings, ...overrideSettings };

console.log(finalSettings.theme);
console.log(finalSettings.public);
console.log(finalSettings.withPassword);
console.log(finalSettings.minNumberOfQuestions);
console.log(finalSettings.timePerQuestion);