// Tests if valus are greater than zero.
QUnit.test('ConcatArrayOfWords()', function(assert)
{
    // Arrange
    var values = [];

    // Act
    values = ['My', 'chicken', 'ate', 'some', 'corn'];

    // Assert
    assert.equal(ConcatArrayOfWords(values), "My chicken ate some corn ", 'My chicken ate some corn ');
})

QUnit.test('AddArrayOfNumbers()', function(assert)
{
    // Arrange
    var numvalues = [];
    var numValuesWithLetter = [];

    // Act
    numvalues = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10];
    numValuesWithLetter = [1,4,5, 'T'];

    // Assert
    assert.equal(AddArrayOfNumbers(numvalues), 55, '1-10 added together is 55.');
    assert.equal(AddArrayOfNumbers(numValuesWithLetter), 'error', 'Letters cannot be added');
})

QUnit.test('TestIfSquareRootIsWholeNumber()', function(assert)
{
    // Arrange
    var value;
    var otherValue;
    var NaNvalue;

    // Act
    value = 4;
    otherValue = 10;
    NaNvalue = "sad";

    // Assert
    assert.equal(TestIfSquareRootIsWholeNumber(value), true, '2 is whole number');
    assert.equal(TestIfSquareRootIsWholeNumber(otherValue), false, '3.16~ is not a whole number')
})

QUnit.test('GetRandomInteger()', function(assert)
{
    // Arrange
    var number;
    var string;
    var boolean;

    // Act
    number = 30;
    string = "Hello World";
    boolean = true;

    // Assert
    assert.ok(GetRandomInteger(number), "The return value is a number");
    assert.equal(GetRandomInteger(string), 'error', "Only numbers allowed. Passed in string.");
    assert.equal(GetRandomInteger(boolean), 'error', "Only numbers allowed. Passed in bool");
    
})