// Using the tests to guide you, create the following deliverables:

// - `returnFirstTwoDrivers()` — Declare the variable `returnFirstTwoDrivers` with
//   `const` and assign an anonymous function to it. The assigned function should
//   accept an array of drivers as an argument and return the **first** two drivers
//   in the array.
// - `returnLastTwoDrivers()` — Declare a variable with `const` that is assigned an
//   anonymous function. The assigned function should accept an array of drivers as
//   an argument and return the **last** two drivers in the array.
// - `selectingDrivers` — This is an array containing two elements: the two
//   functions that we previously defined (`returnFirstTwoDrivers()` and
//   `returnLastTwoDrivers()`).
// - `createFareMultiplier()` — This is a higher-order function that takes in one
//   argument, an integer, and returns a function that will multiply a fare for a
//   ride accordingly. If `createFareMultiplier()` receives an argument of `4`, it
//   will return a function that takes in a fare as an argument and quadruples the
//   fare.
// - `fareDoubler()` — Declare a variable with `const` and assign a function
//   returned by `createFareMultiplier()` to it. Invoke `createFareMultiplier()` in
//   such a way that the new `fareDoubler()` function accepts a fare as its lone
//   argument and doubles it.
// - `fareTripler()` — Declare a variable with `const` and assign a function
//   returned by `createFareMultiplier()` to it. Invoke `createFareMultiplier()` in
//   such a way that the new `fareTripler()` function accepts a fare as its lone
//   argument and triples it.
// - `selectDifferentDrivers()` — This function takes two arguments, an array of
//   `drivers` and either the `returnFirstTwoDrivers()` or `returnLastTwoDrivers()`
//   function. Based on these two arguments, `selectDifferentDrivers()` will return
//   either the first two drivers or the last two drivers.

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
  return function (multiplier) {
    return multiplier * integer;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(drivers);
};
