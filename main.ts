// src/main.js
import answer from "the-answer";
import { button, chark } from "./src";

(async function main() {
  try {
    console.log("the answer is " + answer);
    console.log("the button is " + button);
    console.log("the chark is " + chark);
  } catch (error) {
    console.log(error.message);
  }
})();
