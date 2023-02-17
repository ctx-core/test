import { throw__error } from '@ctx-core/error'
/**
 * @param opts{import('./index.d.ts').assert_match__opts_T}
 */
export function assert_match(opts) {
	const { match, actual } = opts
	if (typeof match === 'string') {
		if (actual.indexOf(match) == -1) {
			throw__error(error_message_())
		}
	} else if (typeof match === 'object') {
		if (!match.test(actual)) {
			throw__error(error_message_())
		}
	}
	function error_message_() {
		return (
			opts.error_message_(opts)
			|| (`\n${ctx.actual} should match ${ctx.match}`))
	}
}
export { assert_match as assert__match }
