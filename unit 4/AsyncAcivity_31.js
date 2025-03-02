// -The problem asks me to create a program where the students enter numeric grades, convert the grades into letter grades, calculate the average of the grades entered, and output the new average letter grade.
//-Yes, the problem specifies that the input data will be numerical grades entered by the student
// -Yes, the output data includes the corresponding grade for each numerical grade entered, as well as the average letter grade after multiple tries.

Initialize empty list for grades
Initialize variable for total grade to 0
Initialize variable for grade count to 0

While True:
    Prompt user to enter a numerical grade
    If user enters 'exit' or some termination signal:
        Break the loop
    If the input is a valid number:
        Convert input to a number
        Add the number to the list of grades
        Increment the total grade by this number
        Increment grade count by 1
        Calculate the average grade = total grade / grade count
        Determine the letter grade based on average:
            If average >= 90 then letter grade = "A"
            Else if average >= 80 then letter grade = "B"
            Else if average >= 70 then letter grade = "C"
            Else if average >= 60 then letter grade = "D"
            Else letter grade = "F"
        Print the new letter grade
    Else:
        Print an error message for invalid input