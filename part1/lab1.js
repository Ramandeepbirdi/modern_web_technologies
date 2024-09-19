const hellothere = require("lodash")

const holidays = [
    {name : "Christmas" , date : new Date("2024-12-25")},
    {name : "Halloween" , date : new Date("2024-10-31")},
    {name : "My Birthday" , date : new Date("2025-03-01")},
];

const today = new Date()
holidays.forEach((holiday) =>{
    console.log(holiday);
    console.log((holiday.date - today)/(1000 * 60 * 60 *24))
});
console.log(hellothere.sample(holidays))

console.log(hellothere.findIndex(holidays,{name : "My Birthday"}))