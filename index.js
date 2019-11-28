const returnFirstTwoDrivers = function (drivers) {
  // [first, second] = drivers;
  // return [first, second]
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = multiplier => function (fare) { return fare * multiplier }

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, callback) => callback(drivers)