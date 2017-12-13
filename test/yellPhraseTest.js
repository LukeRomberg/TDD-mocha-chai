const chai = require('chai');
const assert = chai.assert
const yellPhrase = require('../yellPhrase').yellPhrase;
const botMessage = require('../yellPhrase').bot
// eslint-env node, mocha

describe('yellPhrase', () => {
  it('should convert a string to all caps', () => {
    assert.equal(yellPhrase('hey there'), 'HEY THERE')
    assert.equal(yellPhrase('hi there'), 'HI THERE')
  })
  it('should display a message if given a non-string input', () => {
    assert.equal(yellPhrase(['Yoooo', 'boiii']), 'Please input a string.')
  })
  it('should display a message if no input is given', () => {
    assert.equal(yellPhrase(), 'Please input a string.')
  })
})
describe('bot', () => {

  it('should add', () => {
    assert.equal(botMessage.message("Add 5 to 20."), 25, 'Addition test failed')
  })
  it('should add', () => {
    assert.equal(botMessage.message("Add 56 to 52."), 108, 'Addition test failed')
  })
  it('should add', () => {
    assert.equal(botMessage.message("Add 90 to 10."), 100, 'Addition test failed')
  })
  it('should add', () => {
    assert.equal(botMessage.message("Add 600 to 20."), 620, 'Addition test failed')
  })
  it('should add', () => {
    assert.equal(botMessage.message("Add 1064 to 3."), 1067, 'Addition test failed')
  })
  it('should subtract', () => {
    assert.equal(botMessage.message("Subtract 15 from 20."), 5, 'Subtraction test failed')
  })
  it('should subtract', () => {
    assert.equal(botMessage.message("Subtract 2 from 10."), 8, 'Subtraction test failed')
  })
  it('should subtract', () => {
    assert.equal(botMessage.message("Subtract 32 from 64."), 32, 'Subtraction test failed')
  })
  it('should tell weather', () => {
    assert.equal(botMessage.message("What is the weather at 4:30pm?"), "sunny", 'Weather test failed.')
  })
  it('should tell weather', () => {
    assert.equal(botMessage.message("What is the weather at 2:30am?"), "raining", 'Weather test failed.')
  })
  it('should tell weather', () => {
    assert.equal(botMessage.message("What is the weather at 10:30pm?"), "raining", 'Weather test failed.')
  })
  it('should tell weather', () => {
    assert.equal(botMessage.message("What is the weather at 6:00pm?"), "sunny", 'Weather test failed.');
  })
})
