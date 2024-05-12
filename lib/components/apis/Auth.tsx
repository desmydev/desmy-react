class Auth {
    authenticated: boolean;

    constructor() {
        this.authenticated = this.hasSession();
    }

    logout(): void {
        localStorage.removeItem('access_token');
        this.authenticated = false;
    }

    logoutApplication(): void {
        localStorage.removeItem('a_token');
        localStorage.removeItem('app_req');
    }

    getSession(): string | null {
        return localStorage.getItem('access_token');
    }

    getApplicantSession(): string | null {
        return localStorage.getItem('a_token');
    }

    getAccount(): string | null {
        // Assuming aesEncryptionInstance is defined elsewhere
        return localStorage.getItem('account_req')
    }

    isDebug(): boolean {
        return localStorage.getItem('access_d')?.toLowerCase() === 'true';
    }

    getSessionItem(name: string): string | null {
        return localStorage.getItem(name);
    }

    removeLocalData(name: string): void {
        localStorage.removeItem(name);
    }

    saveSession(key: string, data: string): void {
        localStorage.setItem(key, data);
    }

    getLocalData(param: string): string | null {
        return localStorage.getItem(param);
    }

    getAccountInfo(): void {
        // Define this method as needed
    }

    hasSession(): boolean {
        return this.getSession() !== null;
    }

    isAuthenticated(): boolean {
        return this.authenticated;
    }

    getCookie(name: string): string | null {
        let cookieValue: string | null = null;

        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();

                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === name + '=') {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }

        return cookieValue;
    }

    fetchAccount(cb: () => void): void {
        // Define this method as needed
        cb();
    }
}

export default new Auth();
