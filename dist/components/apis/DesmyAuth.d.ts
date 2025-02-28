declare class DesmyAuth {
    constructor();
    logout(): void;
    logoutApplication(): void;
    clearList(datallist: {
        key: string;
        value: any;
    }[], callback: (arg0: boolean) => void): void;
    get(name: string): string | null;
    saveList(datallist: {
        key: string;
        value: any;
    }[], callback: (arg0: boolean) => void): void;
    clear(): void;
    clientClear: () => void;
    remove(name: string): void;
    save(key: string, data: string): void;
    getCookie(name: string): string | null;
    setCookie(name: string, value: string, options?: {
        expires?: number | Date;
        path?: string;
        secure?: boolean;
    }): void;
}
declare const _default: DesmyAuth;
export default _default;
