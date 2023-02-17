import { tab } from '../tab/index.js'
/**
 * @param params{import('./index.d.ts').multiline_json_error_message__params_T}
 * @returns {string}
 */
export function multiline_json__error_message_(params) {
	return `${JSON.stringify(params.actual)}\n${tab}should equal\n${tab}${JSON.stringify(params.expected)}`
}
export {
	multiline_json__error_message_ as multiline_json_error_message_,
	multiline_json__error_message_ as message__error__json__multiline,
}
