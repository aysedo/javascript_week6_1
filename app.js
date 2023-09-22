// Define an Array called `myArray` with some numbers 
const myArray = [7, 1, 1, 7, 1, 7, 9, 9, 12, 8, 12, 12, 9, 8]
// let length Stores the length of the array in the variable `length`, to avoid recalculating the arrays length which can be more efficient.
let length = myArray.length
// start a for loop will continue as long as `i`~ is less than the `length`(13)in each iteration `i`will be incremented by 1.
for (let i = 0; i < length; i++) {
    // This variable will be used to count how many times a specific number appears in the array.
    let count = 0;
    // This line assigns the current of `myArray`at the `i`to a variable named memorizedNumber.This variable will be hold the number that we are currently examining in the outer loop.
    let memorizedNumber = myArray[i];
    //This line starts an inner for loop that will also iterate trough the elements of the array. In each iteration `j`will be increment by 1.
    for (let j = 0; j < length; j++) {
    //Inside the inner loop, this line assigns the current element of `myArray`at index`j`to a variable named nextNumber. This variable will hold the number that we are currently comparing to memorizedNumber.       
        let nextNumber = myArray[j];
    // This line checks if the memorizedNumber(the number from the outer loop)is equalto the nextNumber(the number from the innerloop)        
        if (memorizedNumber === nextNumber) {
    // If the numbers are equal, this line increment the count variable by 1. This is done to count how many times memorizedNumber appears in the array.            
            count++;
        }
    // The inner loop continues until it has compared nextNumber to all elements in the array.       
    }
    //After the inner loop finishes,this line checks if the count variable is equal to 2. If count is 2, it means that nextNummber appeard twice in the array.
    if (count === 2) {
    // if count is 2, this line prints a message to the console, indicating that the number memorizedNumber occurs twice.
        console.log("The Number that includes twice is:" + memorizedNumber);
    // After finding the first number that occurs twice , this line uses the break statement to exit the outer loop. This ensures that the code stops searching for more duplicates after finding the first one.
        break;
    }
}
// The code essentially searches for the first number in the array that occurs twice and prints that number. It then stops further iterations of the loop.