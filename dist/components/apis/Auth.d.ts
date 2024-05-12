declare class Auth {
    authenticated: boolean;
    constructor();
    logout(): void;
    logoutApplication(): void;
    getSession(): string | null;
    getApplicantSession(): string | null;
    getAccount(): string | null;
    isDebug(): boolean;
    getSessionItem(name: string): string | null;
    removeLocalData(name: string): void;
    saveSession(key: string, data: string): void;
    getLocalData(param: string): string | null;
    getAccountInfo(): void;
    hasSession(): boolean;
    isAuthenticated(): boolean;
    getCookie(name: string): string | null;
    fetchAccount(cb: () => void): void;
}
declare const _default: Auth;
export default _default;
