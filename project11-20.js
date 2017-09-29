/* JSProjects 11-20
* Nora Coates
* Finished and uploaded on September 29th, 2017
 */
//11
function firstlast6(array) {
    /* Given an array of length > 1
     * return true if either the first or last element is a 6
     */
    var returnVal = false;
    if(array.length >= 1) {
        if(array[0] == 6 || array[array.length-1] == 6) {
            returnVal = true;
        }
        return returnVal;
    }
}
//12
function has_23(array) {
    /*
     * Given an array of length 2, return true if the array contains a 2 or a 3
     */
    var bool = 0;
    var returnVal = false;
    if(array.length == 2) {
        for (var i = 0; i< array.length; i++) {
            if (array[i] == 2 || array[i] == 3) {
                bool = 1;
            }
        }
    }
    if (bool == 1) {
        returnVal = true;
    }
    return returnVal;
}
//13
function fix_23(array) {
    /* given an int array of length 3, if there is a 2 element followed immediately by a 3,
     * set the 3 to 0. In any case, return the changed (or not) array
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
    var returnVal = false;
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
        returnVal = true;
    }
    return returnVal;
}
//16
function starOut(string) {
    /* returns the given string, without any stars (*)
     * or the characters immediately next to the stars
     */

    var starCount = 0;
    for(var x = 0; x < string.length-1; x++) {
        if(string[x] == "*") {
            //if this char is a star
            if(string[x+1] == "*"){
                starCount = 3 ;
            } else {
                starCount = 2;
            }
            string = string.substring(0, x-1) + string.substring(x+starCount, string.length);
        }

    }
    return string;
}
//17
function getSandwich(string) {
    /* returns anything in this string between instances of 'bread'
    * if there are fewer than two instances of bread
    * return empty string
     */
    var sandwich = "";
    for(var x = 0; x<string.length-1; x++) {
        if(string.length<=5) {
            break;
        }
        //if 'bread appears in the string
        if(string.substring(x,x+5)=="bread") {
            //set the second string equal to everything after bread
            sandwich += string.substring(x+5, string.length-1);
        }
    }
    for (var i = 0; i < sandwich.length; i++) {
        if(sandwich.substring(i,i+5)=="bread") {
            sandwich = sandwich.substring(0,i);
        }
    }
    return sandwich;
}
//18
function canBalance(array) {
    /* given an array with more than one item, return true if
    * there is a place at which the sum of numbers on one side equals the sum
    * of the other
     */
    var sum1 = 0;
    var result = false;

    //iterates through array
    for(var x = 0; x < array.length; x++) {
        //and adds the first value to sum1
        sum1 += array.shift();
        x--
    }
    if (sum1 % 2 == 0) {
        result = true;
    }

    return result;

}
//19
function countClumps(array) {
    /* for a given array,
     * returns the number of groups with
     * 2 or more adjacent elements of the same value
     */
    var clumps = 0;

    for(var x = 0; x < array.length; x++) {
        //if this element is the same as the next one
        if(array[x] == array [x+1]) {
            //if the element two spaces ahead is the same as the two before it
            if(array[x+2] == array[x]) {
                //subtract one from clumps, because in the next step
                clumps -= 1;
            }
            //1 is added to clumps regardless of if this element was already counted
            clumps+=1;
        }
    }
    return clumps;
}
//20
function evenlySpaced(lil, mid, big) {
    /* given three ints, small, medium and large,
    * return true if the difference between medium and big
    * is the same as between medium and small
     */
    var placeholder = 0;

    var bears = false;

    //if the first # is bigger than the second
    if(lil > mid) {
        //store the second # in a variable
        placeholder = mid;
        //the second number equals the first (bigger # move to the right)
        mid = lil;
        //lil = the starting value of mid
        lil = placeholder;
    }
    //if the middle # is bigger than the last
    if(mid>big) {
        //store the last in a var
        placeholder = big;
        //set the last # equal to the middle, bigger #
        big = mid;
        //set the middle # equal to the smaller one
        mid = placeholder;
    }

   //if the last # minus the second is the same as the 2nd minus the 1st
    if(big-mid == mid-lil) {
        //set the return value to true
        bears = true;
    }

    return bears;
}
//Here there be testers

//11 FUNCTIONAL
function tester() {
    //tests firstLast6 FUNCTIONAL
    document.getElementById("outputOne").innerHTML = "firstLast6: " + firstlast6([9, 5, 4, 7, 6]);
    //tests has_23 FUNCTIONAL
    document.getElementById("outputTwo").innerHTML = "has_23: " + has_23([9,8]);
    //tests fix_23 FUNCTIONAL
    document.getElementById("outputThree").innerHTML = "fix_23: " +fix_23([0, 2, 3]);
    //tests countYZ FUNCTIONAL
    document.getElementById("outputFour").innerHTML = "countYZ: " + countYZ("z yo oy ");
    //tests endOther FUNCTIONAL
    document.getElementById("outputFive").innerHTML = "endOther: " + endOther("Loo", "o");
    //tests starOut FUNCTIONAL
    document.getElementById("outputSix").innerHTML = "starOut: " + starOut("Beee**ssknn**eees");
    //tests getSandwich FUNCTIONAL
    document.getElementById("outputSeven").innerHTML = "getSandwich: " + getSandwich("breadjammbready");
    //tests canBalance FUNCTIONAL
    document.getElementById("outputEight").innerHTML = "canBalance: " + canBalance([2, 2, 2, 2]);
    //tests countClumps FUNCTIONAL
    document.getElementById("outputNine").innerHTML = "countClumps: " + countClumps([3, 3, 3, 3]);
    //tests evenlySpaced FUNCTIONAL
    document.getElementById("outputTen").innerHTML = "evenlySpaced: " + evenlySpaced(2,4,2);
}