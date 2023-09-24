// Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. 
// Otherwise, for every 5 km/s above the speed limit (70), 
// it should give the driver one demerit point and print the total number of demerit points.

// > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended


//function checks speed limit
const speedCheck = (speed)=>{
// define the number of demerit points given for every km/h over the limit
    let demeritPoint;
    //define constant for speed limit
    const speedLimit = 70;
    let status;
    
    //check if the car's speed is less than or equal to the speed limit. If it is, we print "Ok."
        if(speed <= 70){
            status = 'Ok'
        }else{
//If the speed is greater than the speed limit, we calculate the number of demerit points based on the excess speed.
//  We use Math.floor to round down to the nearest whole number.
     const differnce = speed - speedLimit;
     demeritPoint = Math.floor(differnce/5);
    
    //  console.log(demeritPoint)

//If the calculated demerit points exceed the maximum allowed, we print "License suspended.
     if(demeritPoint >= 12){
        status = "License suspended";
     }else{
//Otherwise, we print the number of demerit points.
        status = demeritPoint
     }
        }
    return status;
       
    
    }
    
    // speedCheck(100);
    
    
    console.log(speedCheck(200))