// while loop to 101. if 3 and 5, else if 3, else if 5, else.
var num = 1;
while(num<101) {
    if(num % 3 == 0 && num % 5 == 0) {
        console.log("FizzBuzz");
    } else if(num % 3 == 0) {
        console.log("Fizz");
    } else if(num % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
    num++;
}