// Definition of an integer
integerDefinition = "An integer is a whole number that can be positive, negative, or zero.";

// Explanation of if/else
 ifElseDescription = "An if/else statement lets a program make choices based on conditions.";

// Explanation of a function
 functionDescription = "A function is a piece of code that does a specific job and can take inputs and return results.";

// Definition of boolean
 booleanDefinition = "A boolean is a data type that can be true or false.";

// Difference between parameters and arguments
 parameterArgumentDifference = "Parameters are variables in a function that accept values, while arguments are the actual values you pass to the function.";

// Operator for a digital locker
 lockerOperator = "Use the equality operator (==) to check if the locker numbers match.";

// Operator for height check
 heightVerificationOperator = "Use the greater than or equal to operator (>=) to check if someone meets the height requirement.";

 { function calculateSalesTax(totalSales) {
        const taxRate = 0.07; // 7% sales tax
        return totalSales * taxRate;
    
    function checkSubscription(scheduledPayDate, accountBalance) {
        if (scheduledPayDate == 10) {
            if (accountBalance > 15.0) {
                console.log("Your subscription has been renewed. Auto-pay was successful.");
            } else if (accountBalance < 15.0) {
                console.log("Your subscription is on hold. Please check your payment method.");
            } else {
                console.log("There was an error in our system");
            }
        } else {
            console.log("Bill not due. It is not the payment date yet."); }

            console.log(checkPasswordLength("short")
console.log(checkPasswordLength("perfectpassword")

function checkAdmission(school, receivedRecommendation) {
    if (school === "Temple University") {
        if (receivedRecommendation) {
            console.log("Congratulations! You got into Temple University.");
        } else {
            console.log("Unfortunately, you did not get into Temple University.");
        }
    } else if (school === "Penn State") {
        if (receivedRecommendation) {
            console.log("Congratulations! You got into Penn State.");
        } else {
            console.log("Unfortunately, you did not get into Penn State.");
        }
    } else if (school === "University of Pennsylvania") {
        if (receivedRecommendation) {
            console.log("Congratulations! You got into the University of Pennsylvania.");
        } else {
            console.log("Unfortunately, you did not get into the University of Pennsylvania.");
        }
    } else if (school === "Cheyney University") {
        if (receivedRecommendation) {
            console.log("Congratulations! You got into Cheyney University.");
        } else {
            console.log("Unfortunately, you did not get into Cheyney University.");
        }
    } else {
        console.log("School not recognized. Please check the school name.");
    }
}

checkAdmission("Temple University", true); 
checkAdmission("Penn State", false);       
checkAdmission("University of Pennsylvania",true)
checkAdmission("Cheyney University", true)