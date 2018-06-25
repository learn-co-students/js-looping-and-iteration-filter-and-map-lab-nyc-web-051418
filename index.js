// Code your solution here:
function driversWithRevenueOver(array, string) {

  return array.filter( function (person) {
    return person.revenue > string;

  });

}

function driverNamesWithRevenueOver(array, string) {
  const newArray = driversWithRevenueOver(array, string);

  return newArray.map( function (person) {
    return person.name;
  });
}

function exactMatch(array, attribute) {

  return array.filter( function (person) {
    return person[Object.keys(attribute)[0]] === attribute[Object.keys(attribute)[0]];
  });

}

function exactMatchToList(array, attribute) {
  const newArray = exactMatch(array, attribute);

  return newArray.map( function (person) {
    return person.name;
  });

}
