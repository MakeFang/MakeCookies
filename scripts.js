/********************************

COOKIE clicker

********************************/


let cookieCount = 0;

let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');

cookieClicker.addEventListener("click", function() {
    cookieCount += clickPower;
    refreshCookieCount();
})

let refreshCookieCount = function() {
    cookieCounter.innerHTML = cookieCount;
}

/********************************

Click Power

********************************/

let clickPower = 1;
let clickPowerPriceAmount = 10;
let clickPowerLevelNumber = 1;

let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');

buyClickPower.addEventListener("click", ()=>{
    if (cookieCount >= clickPowerPriceAmount){
        console.log("Purchase success");
        cookieCount -= clickPowerPriceAmount;
        refreshCookieCount();

        clickPowerLevelNumber += 1;
        clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);
        clickPower += 1 * Math.floor(clickPowerLevelNumber * 1.05);
        refreshPowerClick();
    }else{
        console.log("Not enough minerals");
    }
})

let refreshPowerClick = function() {
    clickPowerLevel.innerHTML = clickPowerLevelNumber;
    clickPowerPrice.innerHTML = clickPowerPriceAmount;
    clickPowerMultiple.innerHTML = clickPower;
}

/********************************

Grandmas

********************************/
//set default values
let grandmaPower = 50;
let grandmaPriceAmount = 10;
let grandmaLevelNumber = 0;
let grandmaAuto = false;

//declare DOM variables
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');
let grandmaInterval = window.setInterval(function(){},1000);

buyGrandma.addEventListener("click", function() {

    //make sure we have enough cookies and subtract our cookies from the price
    if (cookieCount>= grandmaPriceAmount){
        cookieCount -= grandmaPriceAmount;
        refreshCookieCount();
        grandmaLevelNumber += 1;
        grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);
        grandmaPower += 10 + Math.floor(grandmaLevelNumber * 1.33);
        autoGrandma = true;
        window.clearInterval(grandmaInterval);
        autoGrandmaStart();
        refreshGrandma();
    }else{
        console.log("Not enough minerals");
    }

})

let autoGrandmaStart = function() {
    grandmaInterval = window.setInterval(function(){
        cookieCount += grandmaPower - 10;
        refreshCookieCount();
    }, 1000);
}

let refreshGrandma = function() {
    grandmaLevel.innerHTML = grandmaLevelNumber
    grandmaPrice.innerHTML = grandmaPriceAmount;
    grandmaMultiple.innerHTML = grandmaPower - 10;
}

/********************************

Facilities

********************************/

let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 10;
let facilityLevelNumber = 0;

//declare DOM variables
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');
let facilityInterval = window.setInterval(function(){},1000);

console.log(buyFacility);
//buy a facility
buyFacility.addEventListener("click", function() {
    //set autoLoop to false
    facilityAuto = false;

    //make sure we have enough cookies
    if (cookieCount >= facilityPriceAmount) {
        cookieCount -= facilityPriceAmount;
        refreshCookieCount();
        //upgrade power level
        facilityLevelNumber += 1;

        //update price
        facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33);

        //update facility power
        facilityPower += 600 + Math.floor(facilityLevelNumber * 1.33);;

        //turn autoFacility on!
        facilityAuto = true
        window.clearInterval(facilityInterval);
        autoFacilityStart();

        //refresh shop item
        refreshFacility();

    }else{
        console.log("Not enough");
    }

})

//refresh shop
let refreshFacility = function() {
  facilityLevel.innerHTML = facilityLevelNumber
  facilityPrice.innerHTML = facilityPriceAmount;
  facilityMultiple.innerHTML = facilityPower - 600;
}

//game loop
let autoFacilityStart = function() {
    facilityInterval = window.setInterval(function(){
      cookieCount += facilityPower-600;
      refreshCookieCount();
    }, 1000);
}
