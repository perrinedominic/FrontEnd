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