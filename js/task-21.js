const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
};
// Пиши код ниже этой строки
const { yesterday, today, tomorrow } = highTemperatures;
// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;

console.log(highTemperatures);