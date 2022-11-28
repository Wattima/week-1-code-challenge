// Speed Detector

//Otherwise, for every 5 km/s above the speed limit (70), 
// it should give the driver one demerit point and print the total number of demerit points.

// For example, if the speed is 80, it should print: “Points: 2”. 
// If the driver gets more than 12 points, the function should print: “License suspended”.


//Declared a function called speedDetector
function speedDetector() {
    //Created a variable with a speed limit of 70
    let speedLimit = 70;
    //Created a variable which prompts the user to input the speed of car
    let carSpeed = prompt(`Enter speed of car`);
    
    //if the speed of car is less than the speed limit, it returns Ok
    if (carSpeed <= speedLimit) {
        return `Ok.`;
    } 
    //else condition where the speed of car is greater than the speed limit
    else if(carSpeed > speedLimit) {
        //Declared a variable demerit points which is a result of dividing the excess speed by 5
        let demeritPoints = (carSpeed-speedLimit)/5;
        //if the demerit points are less than 12, it prints the points available in integer
        if(demeritPoints<=12) {
            return `Points: ${parseInt(demeritPoints)}`;
        } 
        //if demerit points are more than 12, it returns that License is suspended
        else if (demeritPoints > 12){
            return `License Suspended!!`;
        }
    }

}
//this calls the function speed detector 
speedDetector();


