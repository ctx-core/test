export declare function assert_equal<T>(opts:assert_equal__opts_T<T>):void
export { assert_equal as assert__equal }
export interface assert_equal__opts_T<T> {
	error_message_header?:string
	error_message_?:(a:assert_equal__opts_T<T>)=>string
	actual:T
	expected:T
}
export declare type Opts__assert__equal<T> = assert_equal__opts_T<T>
