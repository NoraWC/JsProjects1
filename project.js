
////////// 1-10
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
//11
function firstlast6(array) {
    /* Given an array of length > 1
    * return true if either the first or last element is a 6
     */
    if(array.length >= 1) {
        if(array[0] == 6 || array[array.length-1] == 6) {
            return true;
        }
        return false;
    }
}
//12
function has_23(array) {
    /*
    * Given an array of length 2, return true if the array contains a 2 or a 3
     */
    var bool = 0;
    if(array.length == 2) {
        for (var i = 0; i< array.length; i++) {
            if (array[i] == 2 || array[i] == 3) {
                bool = 1;
            }
        }
    }
    if (bool == 1) {
        return true;
    } else {
        return false;
    }
}
//13
function fix_23(array) {
    /* given an int array of length 3, if there is a 2 element followed immediately by a 3,
    * set the 3 to 0. In any case, return the changed array
     */
    if (array.length == 3) {
        for(var i = 0; i < array.length; i++) {
            if(array[i] == 2)
                if(array[i+1] == 3) {
                    array[i+1] = 0;
                }
        }
    }
    return array;
}
//14
function countYZ(string) {
    /*
    * given a string, count the number of times a y or z is followed by a space
     */
    var count = 0;
    for(var i = 0; i < string.length; i++) {
        if (string[i] == "y" || string [i] == "z") {
            if (string[i+1] == " ") {
                count ++;
            }
        }
    }
    return count;
}
//15
function endOther(firstString, secondString) {
    /* given two non-case-sensitive strings,
    * return true if one string appears at the end of the other
     */
    var str2;
    var str1;
    if (firstString.length>=secondString.length) {
        str1 = firstString.toLowerCase();
        str2 = secondString.toLowerCase();
    } else {
        str1 = secondString.toLowerCase();
        str2 = firstString.toLowerCase();
    }
    var len = str2.length;
    var gth = str1.length;
    if(str1.substring(gth,gth-len) == str2) {
        return true;
    } else {
        return false;
    }
}
//16 NONFUNCTIONAL!!!
function starOut(string) {
    /* returns the given string, without any stars (*)
    * or the characters immediately next to the stars
    * PROBLEM: doesn't skip the chars before * or after **
    */
    var stringTwo= "";
    var z = stringTwo.length;
    var boolOne = false;
    var boolTwo = false;

    for(var x = 0; x< string.length; x++) {
        if(string[x] != "*" && string[x+1] != "*") {
            boolOne = true;
        }
        if(string[x-1] != "*") {
            boolTwo = true;
        }
        if(boolTwo!=true) {
            //if the char before is not a star
            stringTwo += string[x];
        }
        if(boolOne==true) {
            //if neither this char nor the next is a *
            stringTwo += string[x];
            //add the char to the empty string
        } else {
            //but if this or the next char is a *
            stringTwo += string[z, x];
            //skip it and
            x+=2;
            //add 2 to the count
        }
    }
    return stringTwo;
}
//17
function getSandwich(string) {
    return string;
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
//11 FUNCTIONAL
function tester_firstLast6() {
    //tests firstLast6
    document.getElementById("outputEleven").innerHTML = firstlast6([9, 5, 4, 7, 6]);
}
//12 FUNCTIONAL
function tester_has_23() {
    //tests has_23
    document.getElementById("outputTwelve").innerHTML = has_23([9,8]);
}
//13 FUNCTIONAL
function tester_fix_23() {
    //tests fix_23
    document.getElementById("outputThirteen").innerHTML = fix_23([0, 3, 2]);
}
//14 FUNCTIONAL
function tester_countYZ() {
    //tests countYZ
    document.getElementById("outputFourteen").innerHTML = countYZ("z yo oy");
}
//15 FUNCTIONAL
function tester_endOther() {
    //tests endOther
    document.getElementById("outputFifteen").innerHTML = endOther("o", "Loo");
}
//16 NON FUNCTIONAL!!!
function tester_starOut() {
    //tests starOut
    document.getElementById("outputSixteen").innerHTML = starOut("aa*bbc**dd");
}
//17
function tester_getSandwich() {
    //tests getSandwich
    document.getElementById("outputSeventeen").innerHTML = getSandwich("boo");
}