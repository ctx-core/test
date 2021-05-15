import { throw__error } from '@ctx-core/error'
export function assert_match(opts:assert_match_I) {
	const { match, actual } = opts
	const _error_message =
		opts._error
		|| ((ctx:assert_match_I)=>
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
export interface assert_match_I {
	_error?:any
	match?:any
	actual?:any
}
export { assert_match as assert__match }
