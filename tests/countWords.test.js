const countWords = (s) => {
    return s.split(" ").length;
}
test("one word string gives a count of 1", () => {
    const input = "hello";
    const actualResult = countWords(input);
    const expectedResult = 1;
    expect(actualResult).toBe(expectedResult);
});

test("five word string gives a count of 5", () => {
    const input = "I think therefore I am";
    const actualResult = countWords(input);
    const expectedResult = 5;
    expect(actualResult).toBe(expectedResult);
});