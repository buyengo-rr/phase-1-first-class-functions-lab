// Code your solution in this file!
let drivers=['Antonia', 'Nuru', 'Amari', 'Mo',""]
const  returnFirstTwoDrivers= function(){
    const newD=drivers.slice(0,2)
    return newD;
}
const  returnLastTwoDrivers=function(){
    const newD=drivers.slice(2,4)
    return newD
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]
const createFareMultiplier=function(integer){
return function (fare){
return fare*integer;
    }
};
function fareDoubler(fare){
    return fare*2
}; 
function fareTripler(fare){
    return fare*3
};
function selectDifferentDrivers(Drivers,funct){
  return funct(Drivers) 
};