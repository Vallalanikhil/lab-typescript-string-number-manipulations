import {
  StringManipulationService,
  NumberManipulationService,
} from "./main-service";

class StringManipulations implements StringManipulationService {
  public print(word: String): void {
    console.log(word);
    console.log(word.toUpperCase());
    console.log(word.toLowerCase());
    console.log(word.charAt(4));
    console.log(word.concat(" Kanna"));
    console.log(word.slice(2, -1));
    console.log(word.length);
  }
  printWithSpace(sentence: string): void {
    console.log(sentence);
    console.log(sentence.split("").join(" "));
  }
  findVowel(str: string): void {
    console.log(str);
    console.log(str.replace(/[^aeiou]/gi, "").length);
  }
}

let display = new StringManipulations();

display.print("nikhil");
display.printWithSpace("Kanna");
display.findVowel("nikhil");

class NumbersManipulations implements NumberManipulationService {
  findPrime(num: number): void {
    console.log(num);
    if (num % 2 == 0) {
      console.log("not a prime number");
    } else {
      console.log("prime number");
    }
  }
  findMagic(num: number): void {
    console.log(num);
    if (num % 9 == 1) {
      console.log("Magic Number");
    } else {
      console.log("Not a Magic Number");
    }
  }
}
let object = new NumbersManipulations();
object.findPrime(17);
object.findMagic(1234);
