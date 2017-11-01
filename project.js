
////////// 1-10
//1
function sleep_in(weekday,vacation) {
    /*sleep_in determines whether or not we can sleep in
     * We can if it's not a weekday, or if it is a holiday
     */
    var result = false;
    if (weekday == false || vacation == true) {
        result = true;
    }
    return result;
}
//2
function monkey_trouble(a_smile, b_smile) {
    /* monkey_trouble determines whether or not we are in trouble.
     * trouble occurs when both or neither monkeys are smiling.
     */
    var result = false;
    if(a_smile == b_smile) {
        result = true;
    }
    return result;

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
        console.log("i=" + i);
       console.log("string=" + bittyString);
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
function tester() {
    //tests sleep_in: FUNCTIONAL
    document.getElementById("outputOne").innerHTML = "sleep_in: " + sleep_in(true, false);
    //tests monkey_trouble: FUNCTIONAL
    document.getElementById("outputTwo").innerHTML = "monkey_trouble: " +  monkey_trouble(true, false);
    //tests string_times: FUNCTIONAL
    document.getElementById("outputThree").innerHTML ="string_times: " +  string_times('Super ', 6);
    //tests front_times: FUNCTIONAL
    document.getElementById("outputFour").innerHTML = "front_times: " + front_times("abcdefg", 9);
    //tests string_bits: FUNCTIONAL
    document.getElementById("outputFive").innerHTML ="string_bits: " +  string_bits("123456");
    //tests caughtSpeeding
    document.getElementById("outputSix").innerHTML ="caughtSpeeding: " +  caughtSpeeding(85, true);
    //tests fizzBuzz: FUNCTIONAL
    document.getElementById("outputSeven").innerHTML = "fizzBuzz: " + fizzBuzz(8);
    //tests teaParty: FUNCTIONAL
    document.getElementById("outputEight").innerHTML = "teaParty: " + teaParty(3, 1);
    //tests blackjack
    document.getElementById("outputNine").innerHTML = "blackjack: " + blackjack(22, 30);
    //tests loneSum
    document.getElementById("outputTen").innerHTML = "loneSum: " + loneSum(3, 2, 2);

}
