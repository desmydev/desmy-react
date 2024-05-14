declare class DesmyAuth {
    constructor();
    logout(): void;
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
    remove(name: string): void;
    save(key: string, data: string): void;
    getCookie(name: string): string | null;
}
declare const _default: DesmyAuth;
export default _default;
