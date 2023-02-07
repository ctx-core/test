import equal from 'deep-equal'
import { error__throw } from '@ctx-core/error'
const tab = '	'
export function assert_equal(opts:Opts__assert__equal) {
	const { error_message_header } = opts
	const error_message_header__ =
		error_message_header
		? `${tab}${error_message_header}\n`
		: ''
	const _error_message =
		opts._error
		|| (ctx=>
			`\n${error_message_header__}${tab}${JSON.stringify(ctx.actual)} should == ${JSON.stringify(ctx.expected)}`)
	if (!equal(opts.actual, opts.expected)) {
		error__throw(_error_message(opts))
	}
}
export interface Opts__assert__equal {
	error_message_header?:string
	_error?:(a:any)=>string
	actual:any
	expected:any
}
export {
	assert_equal as assert__equal
}
