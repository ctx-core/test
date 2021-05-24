import { tab } from './tab';
export function multiline_json_error_message(params) {
    return `${JSON.stringify(params.actual)}\n${tab}should equal\n${tab}${JSON.stringify(params.expected)}`;
}
export { multiline_json_error_message as message__error__json__multiline };
