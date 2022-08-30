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