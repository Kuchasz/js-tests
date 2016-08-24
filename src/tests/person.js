"use strict";
var chai = require('chai');
var testObj = {
    name: 'John',
    lastName: "Doe",
    age: undefined
};
describe('Person', function () {
    it('Name is longer than lastName', function () {
        chai.expect(testObj.name).to.length.greaterThan(testObj.lastName.length);
    });
    it('Name is not null|undefined', function () {
        chai.expect(testObj.name).to.exist;
    });
    it('Age is undefined', function () {
        chai.expect(testObj.age).to.not.exist;
    });
});
