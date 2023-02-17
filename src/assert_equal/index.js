import { error__throw } from '@ctx-core/error'
import equal from 'deep-equal'
const tab = '	'
/**
 * @param opts{import('./index.d.ts').assert_equal__opts_T}
 */
export function assert_equal(opts) {
	const { error_message_header } = opts
	const error_message_header__ =
		error_message_header
		? `${tab}${error_message_header}\n`
		: ''
	if (!equal(opts.actual, opts.expected)) {
		error__throw(error_message_())
	}
	function error_message_() {
		return (
			opts.error_message_(opts)
			|| (`\n${
				error_message_header__
			}${tab}${JSON.stringify(ctx.actual)} should == ${JSON.stringify(ctx.expected)}`))
	}
}
export { assert_equal as assert__equal }
