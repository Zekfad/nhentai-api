const
	assert = require('assert'),

	{ ESLint, } = require('eslint'), // eslint-disable-line import/no-extraneous-dependencies

	extensions = [
		'.js',
		'.mjs',
		'.cjs',
	],

	eslint = new ESLint({
		extensions,
	});


function formatMessages(messages) {
	const errors = messages
		.map(message =>
			`${message.line}:${message.column} ` +
			`${message.message.slice(0, -1)} - ${message.ruleId}`);

	return `\n${errors.join('\n')}`;
}

// In dev mode we won't run ESLint as test phase.
('dev' === (process.env.mode && process.env.mode.toLowerCase())
	? describe.skip
	: describe)('ESLint', function () {
	this.timeout(2 * 60 * 1000);

	let lintResults;

	before(async () => {
		lintResults = await eslint.lintFiles('.');

		describe('ESLint results', () => {

			for (const { filePath, messages, } of lintResults) {

				it(`Validate ${filePath}`, () => {
					if (messages.length > 0) {
						assert.strictEqual('Test failed', null, formatMessages(messages));
					}
				});

			}

		});
	});

	it('Run ESlint', () => {});

});
