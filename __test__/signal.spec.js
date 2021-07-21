// Import the js file to test
import { cal } from "../src/client/js/signal.js"
import "babel-polyfill";
// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing switch polarity ", () => {
    test("Testing the response the get key() function", () => {
    expect(cal("P+")).toBe('P+ >strong positive');
    expect(cal("P")).toBe('P >positive');
    expect(cal("NEU")).toBe('NEU >neutral');
    expect(cal("N")).toBe('N >negative');
    expect(cal("N+")).toBe('N+ >strong negative');
    expect(cal("NONE")).toBe('NONE >without polarity');
});
});
