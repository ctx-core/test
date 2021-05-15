export declare function assert_equal(opts: Opts__assert__equal): void;
export interface Opts__assert__equal {
    error_message_header?: string;
    _error?: (a: any) => string;
    actual: any;
    expected: any;
}
export { assert_equal as assert__equal };
