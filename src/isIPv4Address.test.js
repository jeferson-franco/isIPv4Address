const solution = require('./isIPv4Address.js');

test('test 1', () => {
    expect(solution("172.16.254.1")).toBe(true);
});

test('test 2', () => {
    expect(solution("172.316.254.1")).toBe(false);
});

test('test 3', () => {
    expect(solution(".254.255.0")).toBe(false);
});

test('test 4', () => {
    expect(solution("1.1.1.1a")).toBe(false);
});

test('test 5', () => {
    expect(solution("1")).toBe(false);
});

test('test 6', () => {
    expect(solution("0.254.255.0")).toBe(true);
});

test('test 7', () => {
    expect(solution("1.23.256.255.")).toBe(false);
});

test('test 8', () => {
    expect(solution("1.23.256..")).toBe(false);
});

test('test 9', () => {
    expect(solution("0..1.0")).toBe(false);
});

test('test 10', () => {
    expect(solution("64.233.161.00")).toBe(false);
});

test('test 11', () => {
    expect(solution("64.00.161.131")).toBe(false);
});

test('test 12', () => {
    expect(solution("01.233.161.131")).toBe(false);
});

test('test 13', () => {
    expect(solution("35..36.9.9.0")).toBe(false);
});

test('test 14', () => {
    expect(solution("1.1.1.1.1")).toBe(false);
});

test('test 15', () => {
    expect(solution("1.256.1.1")).toBe(false);
});

test('test 16', () => {
    expect(solution("a0.1.1.1")).toBe(false);
});

test('test 17', () => {
    expect(solution("0.1.1.256")).toBe(false);
});

test('test 18', () => {
    expect(solution("129380129831213981.255.255.255")).toBe(false);
});

test('test 19', () => {
    expect(solution("255.255.255.255abcdekjhf")).toBe(false);
});

test('test 20', () => {
    expect(solution("7283728")).toBe(false);
});

test('test 21', () => {
    expect(solution("0..1.0.0")).toBe(false);
});
