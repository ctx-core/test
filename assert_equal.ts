import equal from 'deep-equal'
import { throw_error } from '@ctx-core/error'
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
		throw_error(_error_message(opts))
	}
}
export const assert__equal = assert_equal
export type Opts__assert__equal = {
	error_message_header?:string
	_error?:(any)=>string
	actual:any
	expected:any
}