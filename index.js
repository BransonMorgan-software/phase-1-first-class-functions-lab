// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
    return function(fare) {
        return (x * fare)
    }

}
const fareDoubler = function createFareMultiplier(fare) {
    return (fare * 2);
}
const fareTripler = function createFareMultiplier(fare) {
    return (fare * 3);
}
function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);

}
