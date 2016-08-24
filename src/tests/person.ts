import * as chai from 'chai';

const testObj = {
  name: 'John',
  lastName: "Doe",
  age: undefined
};

describe('Person', ()=>{
  it('Name is longer than lastName', ()=>{
    chai.expect(testObj.name).to.length.greaterThan(testObj.lastName.length);
  });
  it('Name is not null|undefined', ()=>{
    chai.expect(testObj.name).to.exist;
  });
  it('Age is undefined', ()=>{
    chai.expect(testObj.age).to.not.exist;
  });
});
