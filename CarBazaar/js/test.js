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
    var values = [];

    // Act
    values = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10];

    // Assert
    assert.equal(AddArrayOfNumbers(values, 55));
})