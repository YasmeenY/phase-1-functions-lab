// Code your solution in this file!

function distanceFromHqInBlocks(pickUpLocation) {
    if (pickUpLocation>42){
        return pickUpLocation-42;
    }
    else return 42-pickUpLocation;
}
function distanceFromHqInFeet(pickUpLocation){
    const distanceInFeet = distanceFromHqInBlocks(pickUpLocation);
    return distanceInFeet * 264;
}
function distanceTravelledInFeet(start, destination){
    if (start>destination){
        return (start-destination) * 264;
    }
    else {
        return (destination-start) * 264;
    }
}
function calculatesFarePrice(start, destination) {
    const result = distanceTravelledInFeet(start, destination);
    if (result < 400){
        return 0;
    }
    else if (result > 400 && result < 2000){
        return (result-400)*0.02
    }
    else if (result > 2000 && result < 2500){
        return 25;
    }
    else return "cannot travel that far"
  }