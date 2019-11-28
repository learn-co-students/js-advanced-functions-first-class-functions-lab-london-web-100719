const returnFirstTwoDrivers = (arr) => {

	return arr.slice(0, 2)

}

const returnLastTwoDrivers = (arr) => {

	return arr.slice(-2)

}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (value) => {

	return (input) => {

		let storedValue = value;
		return input * storedValue;

	}

}

const fareDoubler = (input) => {

	return input * 2;

}

const fareTripler = (input) => {

	return input * 3;

}

const selectDifferentDrivers = (arrayOfDrivers, func) => {

	return func(arrayOfDrivers);

}