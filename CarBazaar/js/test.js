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