
const converter = require('./converter');

test('1 BAHT = 0.03 DOLLAR', () => {
    expect(converter(1)).toEqual('$0.03');
});

test('5 BAHT = 0.15 DOLLAR', () => {
    expect(converter(5)).toEqual('$0.15');
});

test('10 BAHT = 3 DOLLAR', () => {
    expect(converter(10)).toEqual('$0.30');
});

test('3.5 BAHT = 0.10 DOLLAR', () => {
    expect(converter(3.5)).toEqual('$0.10');
});

test('input a = error', () => {
    expect(converter('a')).toEqual('error');
});
