// Code your solution in this file!
function distanceFromHqInBlocks (num){
    return Math.abs(num - 42);
}
function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet) * 264
}
function distanceTravelledInFeet(start, destination){
return distanceFromHqInFeet(destination) - distanceFromHqInFeet(start)
}
function calculatesFarePrice(start, destination){
    let situa = distanceTravelledInFeet(start, destination);
    let desti = "";
    if ( situa <= 400 ){
        desti =0;
    }else if ( situa < 2000 ){
        desti = (situa - 400) * 0.02;
    }else if ( situa < 2500){
        desti= 25;
    }else if (situa > 2500){
        desti ="cannot travel that far";
    }
 return desti
}