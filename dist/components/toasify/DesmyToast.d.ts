declare class DesmyToast {
    static context: any;
    static initialize(context: any): void;
    static success(message?: string): void;
    static error(message?: string): void;
    static info(message?: string): void;
}
export { DesmyToast };
