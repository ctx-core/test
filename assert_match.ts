import { throw__error } from '@ctx-core/error'
export function assert_match(opts) {
	const { match, actual } = opts
	const _error_message =
		opts._error
		|| (ctx=>
			`${ctx.actual} should match ${ctx.match}`)
	if (typeof match === 'string') {
		if (actual.indexOf(match) == -1) {
			throw__error(_error_message(opts))
		}
	} else if (typeof match === 'object') {
		if (!match.test(actual)) {
			throw__error(_error_message(opts))
		}
	}
}
export const assert__match = assert_match
