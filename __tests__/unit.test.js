// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2


//tests for isPhoneNumber
test('1234567 is not a phone number', () => {
    let phoneNum = true;
    phoneNum = functions.isPhoneNumber('1234567');
    expect(phoneNum).toBe(false);
})

test('987.654.3210 is not a phone number', () => {
    let phoneNum = true;
    phoneNum = functions.isPhoneNumber('987.654.3210');
    expect(phoneNum).toBe(false);
})

test('999-999-9999 is a phone number', () => {
    let phoneNum = true;
    phoneNum = functions.isPhoneNumber('999-999-9999');
    expect(phoneNum).toBe(true);
})

test('(858)123-4567 is a phone number', () => {
    let phoneNum = true;
    phoneNum = functions.isPhoneNumber('(858)123-4567');
    expect(phoneNum).toBe(true);
})

//tests for isEmail
test('abcd.com is not an email', () => {
    let email = true;
    email= functions.isEmail('abcd.com');
    expect(email).toBe(false);
})

test('cse110@gmail is not an email', () => {
    let email = true;
    email= functions.isEmail('cse110@gmail');
    expect(email).toBe(false);
})


test('abcd@gmail.com is an email', () => {
    let email = true;
    email= functions.isEmail('abcd@gmail.com');
    expect(email).toBe(true);
})

test('cse110@ucsd.edu is an email', () => {
    let email = true;
    email= functions.isEmail('cse110@ucsd.edu');
    expect(email).toBe(true);
})

//tests for is StrongPassword
test('UUU!!! is not a strong password', () => {
    let strongPass = true;
    strongPass = functions.isStrongPassword('UUU!!!');
    expect(strongPass).toBe(false);
})

test('987abccccccccccc is not a strong password', () => {
    let strongPass = true;
    strongPass = functions.isStrongPassword('987abccccccccccc');
    expect(strongPass).toBe(false);
})

test('User11_0 is a strong password', () => {
    let strongPass = true;
    strongPass = functions.isStrongPassword('User11_0');
    expect(strongPass).toBe(true);
})

test('ASDF1234 is a strong password', () => {
    let strongPass = true;
    strongPass = functions.isStrongPassword('ASDF1234');
    expect(strongPass).toBe(true);
})

//tests for isDate
test('111/2/1111 is not a date', () => {
    let date = true;
    date = functions.isDate('111/2/1111');
    expect(date).toBe(false);
})

test('00-00-00 is not a date', () => {
    let date = true;
    date = functions.isDate('00-00-00');
    expect(date).toBe(false);
})

test('11/11/2021 is a date', () => {
    let date = true;
    date = functions.isDate('11/11/2021');
    expect(date).toBe(true);
})

test('99/88/7777 is a date', () => {
    let date = true;
    date = functions.isDate('99/88/7777');
    expect(date).toBe(true);
})

//tests for isHexColor
test('A is not a hex code used for HTML or CSS', () => {
    let hexColor = true;
    hexColor = functions.isHexColor('A');
    expect(hexColor).toBe(false);
})

test('AAAAAK is not a hex code used for HTML or CSS', () => {
    let hexColor = true;
    hexColor = functions.isHexColor('AAAAAK');
    expect(hexColor).toBe(false);
})

test('ABCDEF is a hex code used for HTML or CSS', () => {
    let hexColor = true;
    hexColor = functions.isHexColor('ABCDEF');
    expect(hexColor).toBe(true);
})

test('EEC is a hex code used for HTML or CSS', () => {
    let hexColor = true;
    hexColor = functions.isHexColor('EEC');
    expect(hexColor).toBe(true);
})