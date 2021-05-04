const assert = require('assert');
// Mocha Unit Tests
//
// The unit tests you are writing will be performed using the Mocha package.
// Make sure your unit tests return a value of some type.
//
// You can include multiple tests within a unit test - just add another "it" code block.
//
// At the end of each test you perform an assert.
// The assert can check if the object is equal, notEqual, or deepEqual.
// deepEqual is used when comparing parent objects that include child objects.
// (see "Demonstrating deepEqual assert with 'Who's On First?'" for an example of this assertion)
// This example Unit Test will be testing the Combine Array of Text function (you can find it below).
// You can title the Unit Test on the line below. It's best to name them in a way that describes the functionality being tested.
describe('Combine Array of Text', function(){
 // The first test checks if the provided array values create the correct string value.
 // The description of the test is on the line below.
 it('should combine each string in the array to create the string "Unit Tests are FUN!"', function(){
 // Arrange
 //
 // Arranging each variable in an appropriate format.
 // You have a variable to test (an array in this case), an expected test outcome, and the actual result.
 var arrayToTest;
 var expected;
 var actual;
 // Act
 //
 // Defining each variable appropriately.
 // You provide the test value, what you expect as a result, and save the results within the 'actual' result variable.
 arrayToTest = ['Unit','Tests','are', 'FUN!'];
 expected = 'Unit Tests are FUN!';
 actual = combineArrayOfText(arrayToTest);
 // Assert
 //
 // Utilizing the built-in assert function to determine if the test passed or failed.
 // You provide the actual results first, then what you expected from the test.
 // In this case, I'm expecting the two values are equal / match.
 assert.equal(actual, expected);
 });
 // The second test provides an array of integers instead, and expects the outcome of "1 2 3 4 5".
 it('should combine each string in the array to create the string "1 2 3 4 5"', function(){
 // Arrange
 var arrayToTest;
 var expected;
 var actual;
 // Act
 arrayToTest = [1, 2, 3, 4, 5];
 expected = '1 2 3 4 5';
 actual = combineArrayOfText(arrayToTest);
 // Assert
 assert.equal(actual, expected);
 });

 // The third test expects that the values do NOT match - intentionally providing an incorrect expected value.
 it('should NOT provide a matching string value', function(){
 // Arrange
 var arrayToTest;
 var expected;
 var actual;
 // Act
 arrayToTest = ['This', 'test', 'will', 'pass'];
 expected = 'because we are using "unequal" instead of "equal" in the Assert phase!';
 actual = combineArrayOfText(arrayToTest);
 // Assert
 //
 // Because we're expecting that the values do NOT match, we use the 'notEqual' function instead.
 assert.notEqual(actual, expected);
 });
});
// This example Unit Test will be testing the calculateItemValueWithCoupon function.
// The function will calculate the value of an item after applying a coupon that removes a set amount from the item (NOT percentage).
describe('Calculate Item Value with Coupon', function(){
 // The first test checks if the function works as intended in an expected scenario; using a $4.00 voucher on a $5.00 item.
 it('should remove $4.00 from a $5.00 item', function(){
 // Arrange
 //
 // We have four test variables; an item price, a coupon value, an expected result, and an actual result.
 var itemPriceToTest;
 var couponValueToTest;
 var expected;
 var actual;
 // Act
 //
 // Setting each test value, defining the amount we expect, and getting the actual calculation using the function.
 itemPriceToTest = 5.00;
 couponValueToTest = 4.00;
 expected = 1.00;
 actual = calculateItemValueWithCoupon(itemPriceToTest, couponValueToTest);
 // Assert
 //
 // Checking if the actual result is EQUAL to our expected result.
 assert.equal(actual, expected);
 });
 // The second test checks if the function returns a value of $0 when a coupon more valuable than the item is used.
 it('should round the value of the item to $0.00 when a coupon more valuable than the item is used', function(){
 // Arrange
 var itemPriceToTest;
 var couponValueToTest;
 var expected;
 var actual;
 // Act
 itemPriceToTest = 50.00;
 couponValueToTest = 75.00;
 expected = 0.00;
 actual = calculateItemValueWithCoupon(itemPriceToTest, couponValueToTest);
 // Assert
 assert.equal(actual, expected);
 });

 // The third test checks if the function returns a value that is properly rounded.
 // When performing the test with a coupon that included cents, a value was originally returned that wasn't rounded properly.
 // This test makes sure that the value of the item is properly rounded before it gets returned.
 it('should return a properly rounded item value', function(){
 // Arrange
 var itemPriceToTest;
 var couponValueToTest;
 var expected;
 var actual;
 // Act
 //
 // The expected variable is the value of the item before it gets properly rounded to two decimal places.
 // We'll be asserting that the actual value is NOT equal to our expected incorrect outcome.
 itemPriceToTest = 5.00;
 couponValueToTest = 4.10;
 expected = 0.9000000000000004;
 actual = calculateItemValueWithCoupon(itemPriceToTest, couponValueToTest);
 // Assert
 //
 // Checking if the actual result is NOT EQUAL to our unexpected result.
 assert.notEqual(actual, expected);
 });

 // The fourth test checks if the function returns a 'NaN' (Not a Number) value when provided with incorrect values.
 // It's possible that a user could provide a value of "Two Dollars" instead of $2.00 as an item value.
 // This checks if the function properly handles the incorrect value being provided.
 it('should respond \'NaN\' when the item price is not a number (\'Two Dollars\' string)', function(){
 // Arrange
 var itemPriceToTest;
 var couponValueToTest;
 var expected;
 var actual;
 // Act
 itemPriceToTest = 'Two Dollars';
 couponValueToTest = 1.00;
 expected = 'NaN';
 actual = calculateItemValueWithCoupon(itemPriceToTest, couponValueToTest);
 // Assert
 assert.equal(actual, expected);
 });
});
// This test exists to demonstrate the deepEqual assert check.
// assert.deepEqual compares two objects and their child objects
describe('Demonstrating deepEqual assert with \'Who\'s On First?\'', function(){
 // The first test demonstrates deepEqual by passing the ball to What.
 it('passes the ball to What', function(){
 // Arrange
 var parentObjectToTest;
 var expected;
 var actual;
 // Act
 //
 // Our Parent Object has eight children - Who, What, IDontKnow, Why, Because, Tomorrow, Today, and IDontCare
 // Each child has a position and a boolean value indicating whether they have the ball.
 // Our goal is to give What the ball.
 parentObjectToTest = {
 Who : { position : 'First Base', hasBall : false },
 What : { position : 'Second Base', hasBall : false },
 IDontKnow : { position : 'Third Base', hasBall : false },
 Why : { position : 'Left Field', hasBall : false },
 Because : { position : 'Center Field', hasBall : false },
 Tomorrow : { position : 'Pitcher', hasBall : false },
 Today : { position : 'Catcher', hasBall : false },
 IDontCare : { position : 'Shortstop', hasBall : false }
 };
 // Declaring the expected parent object. In this object, What has the ball.
 expected =
 {
 Who : { position : 'First Base', hasBall : false },
 What : { position : 'Second Base', hasBall : true }, // We expect What to have the ball in the end.
 IDontKnow : { position : 'Third Base', hasBall : false },
 Why : { position : 'Left Field', hasBall : false },
 Because : { position : 'Center Field', hasBall : false },
 Tomorrow : { position : 'Pitcher', hasBall : false },
 Today : { position : 'Catcher', hasBall : false },
 IDontCare : { position : 'Shortstop', hasBall : false }
 };
 // Setting the actual variable to match the parent object first.
 actual = parentObjectToTest;
 // Giving What the ball by setting their hasBall boolean to true.
 actual.What.hasBall = true;
 // Assert
 //
 // Using deepEqual to determine if the actual result object and the expected result object match.
 assert.deepEqual(actual, expected);
 });
});
//
//
// Add the functions you would like to test here.
//
// If your functions rely on calls to your project document, you may need to adapt your code.
// You might be able to utilize parameters on your functions to emulate your document variables.
//
//
// This example function combines an array of text into a single string with spaces in-between each word.
// It requires an array containing strings and returns the combined text string.
function combineArrayOfText(arrayOfStrings){
 // Preparing the combined text variable.
 var combinedText = '';
 // Looping through each item in the array using a For loop.
 for (let index = 0; index < arrayOfStrings.length; index++){
 // Checking if this is NOT the first index.
 if (index != 0){
 // If this is NOT the first iteration, add a space before appending the string from the array.
 combinedText += ' ' + arrayOfStrings[index];
 }
 else{
 // If this IS the first iteration, the string from the array is appended without a space.
 // This prevents an extra space at the beginning of the completed string.
 combinedText += arrayOfStrings[index];
 }
 }
 // Returning the combined string.
 return combinedText;
}
// This example function calculates the price of of an item while factoring in a coupon voucher.
// It requires the value of the item being added and the value of the coupon (set value, NOT percentage).
function calculateItemValueWithCoupon(itemValue, itemCouponValue){
 // Validating that the item value and the item coupon value are numbers.
 if (itemValue == NaN || itemCouponValue == NaN)
 {
 // If either of them are not a number, returning false - the code will break otherwise.
 return false;
 }
 // Calculating the price of the item after redeeming the coupon.
 // We're removing the coupon value from the item itself because we don't want to apply the coupon to other items accidentally.
 var itemPrice = itemValue - itemCouponValue;
 // Checking if the item's price is below $0.
 if (itemPrice < 0){
 // If so, setting the item's price to exactly $0.
 // A negative item price would result in the store paying the customer to take the item!
 itemPrice = 0.00;
 }
 // Rounding the item price to two decimal places.
 itemPrice = itemPrice.toFixed(2);
 // Returning the item's price after the coupon was applied.
 return itemPrice;
}