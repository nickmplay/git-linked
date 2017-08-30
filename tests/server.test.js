const expect = require('expect');

describe('First test group', () => {
	it('should all be ok', (done) => {
		var testString = "Hello tests";
		expect(testString).toBe("Hello tests");
		expect(testString).toNotBe("something else");
		done();
	})
})