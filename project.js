//write first method
/*sleep_in determines if it's a weekday or not, vacation or not, and whether or not we can sleep in
 */
function sleep_in(weekday,vacation) {
    if (weekday == false || vacation == true) {
        return true;
    } else {
        return false;
    }
}


//write second method
/* monkey_trouble determines whether or not we are in trouble.
* trouble occurs when both or neither monkeys are smiling.
 */
function monkey_trouble(a_smile, b_smile) {
    if(a_smile == b_smile) {
        return true;
    } else {
        return false;
    }
}

/* String_times returns a string n times, where n is not negative
* problem: end string too long
 */

function String_times(string, n) {
    if(n>0) {
        for (var i = n; i>0; i--) {
            string = string + string;
        }
        return string;
    }
}

function tester() {
    //tests sleep_in: FUNCTIONAL
    document.getElementById("output").innerHTML = sleep_in(true, false);
    //tests monkey_trouble: FUNCTIONAL
    document.getElementById("output").innerHTML = monkey_trouble(true, true);
    //tests String_times
    document.getElementById("output").innerHTML = String_times('z', 2);
}