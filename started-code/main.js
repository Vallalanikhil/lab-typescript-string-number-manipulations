"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(4));
        console.log(word.concat(" Kanna"));
        console.log(word.slice(2, -1));
        console.log(word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        console.log(sentence);
        console.log(sentence.split("").join(" "));
    };
    StringManipulations.prototype.findVowel = function (str) {
        console.log(str);
        console.log(str.replace(/[^aeiou]/gi, "").length);
    };
    return StringManipulations;
}());
var display = new StringManipulations();
display.print("nikhil");
display.printWithSpace("Kanna");
display.findVowel("nikhil");
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        console.log(num);
        if (num % 2 == 0) {
            console.log("not a prime number");
        }
        else {
            console.log("prime number");
        }
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        console.log(num);
        if (num % 9 == 1) {
            console.log("Magic Number");
        }
        else {
            console.log("Not a Magic Number");
        }
    };
    return NumbersManipulations;
}());
var object = new NumbersManipulations();
object.findPrime(17);
object.findMagic(1234);
