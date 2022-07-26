test('env', () => {
    expect(process.env.TEST_USER_LOGIN).toBe('username');
    expect(process.env.TEST_USER_PASSWORD).toBeDefined();
    expect(process.env.test).toBeUndefined();
});