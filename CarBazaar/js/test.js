// Tests if valus are greater than zero.
QUnit.test('IsGreaterThanZero()', function (assert) {
    // arrange
    var values = [];

    // act
    values = [0, -4, 5, 12, -3];

    // assert
    assert.ok(IsGreaterThanZero(values[0]), "0 is not greater than zero.");
    assert.ok(IsGreaterThanZero(values[1]), "-4 is not greater than zero.");
    assert.ok(IsGreaterThanZero(values[2]), "5 is greater than zero.");
    assert.ok(IsGreaterThanZero(values[3]), "12 is greater than zero.");
    assert.ok(IsGreaterThanZero(values[4]), "-3 is not greater than zero.");

})