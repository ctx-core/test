export declare function assert_match<T>(opts:assert_match__opts_T<T>):void
export { assert_match as assert__match }
export interface assert_match__opts_T<T> {
	error_message_?:(a:assert_match__opts_T<T>)=>string
	match?:T
	actual?:T
}
export declare type assert_match_I<T> = assert_match__opts_T<T>
