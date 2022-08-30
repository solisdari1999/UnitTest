const {
    fromEuroToDollar,
    fromDollarToYen,
    fromYanToPound
} = require('./app.js')


test("One euro should be 1.206 dollars", function() {
    //import the function from app.js

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2;

    // this is the comparison for the unit test
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("1.2 dolares deberia ser 127.9 Yen", function() {
    expect(fromDollarToYen(2.4)).toBe(255.8);
})

test("127 yen deberia ser 0.8 Pound", function() {
    expect(fromYanToPound(255.8)).toBe(1.6);
}) git remote set - url origin