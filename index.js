// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns #blocks from hq (42) to pickup location (someValue)
    return Math.abs(42 - someValue);
}
// convert number of blocks to feet
function distanceFromHqInFeet(someValue) {
    // 1 block is 264 ft
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, end) {
    //first 400 feet are free
    const distance = distanceTravelledInFeet(start, end);

    if(distance <= 400) {
        return 0;
    }
    else if(distance > 400 && distance <= 2000) {
        return 0.02 * (distance - 400);
    }
    else if(distance > 2000 && distance < 2500) {
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}