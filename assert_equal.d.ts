export declare function assert_equal(opts: Opts__assert__equal): void;
export declare const assert__equal: typeof assert_equal;
export interface Opts__assert__equal {
    error_message_header?: string;
    _error?: (any: any) => string;
    actual: any;
    expected: any;
}
