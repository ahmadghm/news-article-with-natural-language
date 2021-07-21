// Import the js file to test
import "babel-polyfill";
import {checkUrl} from "../src/client/js/validation";
// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing validation of url", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test("check an url, should return true or false", () => {
       let url = 'https://www.google.com';
           // Define the input for the function, if any, in the form of variables/array
           // Define the expected ourespotput, if any, in the form of variables/array
           // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
           // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
       //const respo = checkUrl();
    //  expect(checkUrl(url)).toBeDefined();
        expect(checkUrl(url)).toBe(true);
});});
