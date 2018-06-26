// Code your solution here:
driversWithRevenueOver = (drivers,limit) => {
  driverList = drivers.filter(driver => {
    if (driver.revenue > limit) {
      return driver; 
    }
  })
  return driverList; 
}

driverNamesWithRevenueOver = (drivers,limit) => {
  driverList = driversWithRevenueOver(drivers,limit)
  return driverList.map(driver => driver.name) 
}

exactMatch = (objectArray,referenceName) => {
  arrayMatch = objectArray.filter(object => {
    for (const key in object) {
      if (object[key] === referenceName[key]) {
        return object
        // debugger
      }
    }
  })
  return arrayMatch
}

exactMatchToList = (objectArray,referenceName) => {
  matchList = exactMatch(objectArray,referenceName)
  return matchList.map(obj => obj.name)
  // debugger
}