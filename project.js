/* Name: Nora Coates
* JS Problems 1-10
*Completed Friday September 22nd, turned in Monday September 24th (Didn't read turn-ininstructions carefully enough)
*/
//1
function sleep_in(weekday,vacation) {
    /*sleep_in determines whether or not we can sleep in
     * We can if it's not a weekday, or if it is a holiday
     */
    if (weekday == false || vacation == true) {
        return true;
    } else {
        return false;
    }
}
//2
function monkey_trouble(a_smile, b_smile) {
    /* monkey_trouble determines whether or not we are in trouble.
     * trouble occurs when both or neither monkeys are smiling.
     */
    if(a_smile == b_smile) {
        return true;
    } else {
        return false;
    }
}
//3
function string_times(string, n) {
    /* String_times returns a string n times, where n is not negative
     */
    if(n>0) {
        var stringOne = string;
        for (var i = n; i>1; i--) {
            string += stringOne;
        }
        return string;
    }
}
//4
function front_times(string, n) {
    /* front_times takes the first three characters of a string
     * and returns them n times where n is more than 0
     */
    if (string.length <= 3) {
        for (var i = 1; i< n; i++) {
            string+=string;
        }
        return string;
    } else {
        var placeholder = string.substring(0,3);
        for (var z = 1; z < n; z++) {
            placeholder += string.substring(0,3);
        }
        return placeholder;
    }
}
//5
function string_bits(string) {
    /* takes a string and returns every other character starting with the first
    * FUNCTIONAL
     */
    var bittyString = "";
    for(var i = 0; i < string.length; i+=2) {
        bittyString += string[i];
    }
    return bittyString;
}
//6
function caughtSpeeding(speed, birthday) {
    /* tests if birthday is true and speed is low enoguh to get a ticket
    * returns 0 if you don't get a ticket, 1 if you get a normal ticket, 2 for a big one
    * if birthday is true, speed can be 5 higher
     */
    var ticket = 0;
    if (birthday == false) {
        speed +=5;
    }
        if (speed <=65) {
            ticket = 0;
        } else if (speed <= 85) {
            ticket = 1;
        } else if (speed > 85) {
            ticket = 2;
        }
    return ticket;
}
//7
function fizzBuzz(num) {
    /* returns string form of an int with a ! added, UNLESS
    * int is divisible by 3, then say "Fizz!", OR
    * int is divisble by 5, then say Buzz!", OR
    * int is divisble by both, then say "FizzBuzz!"
     */
    var strnum = String(num);
    if (num % 3 == 0 || num % 5 ==0) {
        strnum = "";
        if (num % 3 == 0) {
            strnum = "Fizz";

        }
        if (num % 5 == 0) {
            strnum += "Buzz";
        }
    }
    return strnum + "!";
}
//8
function teaParty(tea, candy) {
    var qualitea = 0;
    if(tea >=5 && candy >= 5) {
        qualitea = 1;
        if (tea >= candy*2 || candy >= tea*2) {
            qualitea = 2;
        }
    }
    return qualitea;
}
//9
function blackjack(pOne, pTwo) {
    /* given two ints, finds the one closest to but smaller than 21 and returns it
    * if both are larger, returns 0
     */
    var result = 0;
    if (pOne > 21) {
        pOne = 0;
    }
    if (pTwo > 21) {
        pTwo = 0;
    }
    if (pOne > pTwo) {
        result = pOne;
    } else {
        result = pTwo;
    }
    return result;
}
//10
function loneSum(a, b, c) {
    /* Given 3 int values, a b c, return their sum.
    * However, if one of the values is the same as another of the values
    * it does not count towards the sum.
     */
    var sum = 0;
    var initb = b;
    var inita = a;
    var initc = c;
    if (b == inita || b == initc) {
        //if b is the same as a, both b and a are set to 0
        b = 0;
    }
    sum += b;
    if (a == initc || a == initb) {
        // if c is the same as a, both a and c are set to 0
        a = 0;
    }
    sum += a;
    if (c == initb || c == inita) {
        c = 0;
    }
    sum += c;
    return sum;
}


//Here there be testers
/////////// 1-10
//1 FUNCTIONAL
function tester_sleep_in() {
    //tests sleep_in: FUNCTIONAL
    document.getElementById("outputOne").innerHTML = sleep_in(true, false);
}
//2 FUNCTIONAL
function tester_monkey_trouble() {
    //tests monkey_trouble: FUNCTIONAL
    document.getElementById("outputTwo").innerHTML = monkey_trouble(true, false);
}
//3 FUNCTIONAL
function tester_string_times() {
    //tests string_times: FUNCTIONAL
    document.getElementById("outputThree").innerHTML = string_times('Super ', 6);
}
//4 FUNCTIONAL
function tester_front_times() {
    //tests front_times: FUNCTIONAL
    document.getElementById("outputFour").innerHTML = front_times("abcdefg", 9);
}
//5 FUNCTIONAL
function tester_string_bits() {
    //tests string_bits: FUNCTIONAL
    document.getElementById("outputFive").innerHTML = string_bits("123456");
}
//6 FUNCTIONAL
function tester_caughtSpeeding() {
    //tests caughtSpeeding
    document.getElementById("outputSix").innerHTML = caughtSpeeding(85, true);
}
//7 FUNCTIONAL
function tester_fizzBuzz() {
    //tests fizzBuzz: FUNCTIONAL
    document.getElementById("outputSeven").innerHTML = fizzBuzz(8);
}
//8 FUNCTIONAL
function tester_teaParty() {
    //tests teaParty: FUNCTIONAL
    document.getElementById("outputEight").innerHTML = teaParty(3, 1);
}
//9 FUNCTIONAL
function tester_blackjack() {
    //tests blackjack
    document.getElementById("outputNine").innerHTML = blackjack(22, 30);
}
//10 FUNCTIONAL
function tester_loneSum() {
    //tests loneSum
    document.getElementById("outputTen").innerHTML = loneSum(3, 2, 2);
}
