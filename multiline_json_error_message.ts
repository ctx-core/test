import { tab } from './tab'
export function multiline_json_error_message(ctx) {
	return `${JSON.stringify(ctx.actual)}\n${tab}should equal\n${tab}${JSON.stringify(ctx.expected)}`
}
export const message__error__json__multiline = multiline_json_error_message
