import { tab } from './tab'
export function multiline_json_error_message(params:multiline_json_error_message_I) {
	return `${JSON.stringify(params.actual)}\n${tab}should equal\n${tab}${JSON.stringify(params.expected)}`
}
export interface multiline_json_error_message_I {
	actual:any
	expected:any
}
export { multiline_json_error_message as message__error__json__multiline }
