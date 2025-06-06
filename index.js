function distanceFromHqInBlocks(someValue) {
  const hq = 42;
  //returns the number of blocks given a value
  return Math.abs(someValue - hq);
}

function distanceFromHqInFeet(someValue) {
// call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  const blocks = distanceFromHqInBlocks(someValue);
  return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
//returns the number of feet traveled
  return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);
    //returns the fare for the customer
  if (distanceInFeet <= 400) {
    return 0; 
  } else if (distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02; 
  } else if (distanceInFeet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
