import {shortNumber} from "./index";

describe("check invalid Number", () => {
    test("undefined is ''", () => {
        expect(shortNumber(undefined)).toBe("");
    });
    test("null is ''", () => {
        expect(shortNumber(null)).toBe("");
    });
    test("'asd' is ''", () => {
        expect(shortNumber("asd")).toBe("");
    });
    test("NaN is ''", () => {
        expect(shortNumber(NaN)).toBe("");
    });
});

describe("short Number ZH", () => {
    test("0 is 0", () => {
        expect(shortNumber(0)).toBe("0");
    });
    test("100 is 100", () => {
        expect(shortNumber(100)).toBe("100");
    });
    test("12000 is 12萬", () => {
        expect(shortNumber(120000)).toBe("12萬");
    });
    test("12000 is 12万 in chinese simplified", () => {
        expect(shortNumber(120000, true)).toBe("12万");
    });
    test("'1200000' is 1200萬", () => {
        expect(shortNumber(12000000)).toBe("1200萬");
    });
    test("'120000000' is 12億", () => {
        expect(shortNumber(1200000000)).toBe("12億");
    });
    test("'12000000000000' is 12兆", () => {
        expect(shortNumber(12000000000000)).toBe("12兆");
    });
    test("'1200000000000000' is 1200兆", () => {
        expect(shortNumber(1200000000000000)).toBe("1200兆");
    });
});
