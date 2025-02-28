import { DesmyState } from "./DesmyState";

class DesmyAuth {
    constructor() {
       
    }

    logout(): void {
        this.clear()
    }
    logoutApplication(): void {
      localStorage.removeItem('a_token')
      localStorage.removeItem('app_req')
    }
    clearList(datallist: { key: string, value: any }[], callback: (arg0: boolean) => void): void {
        try {
            if (datallist && datallist.length > 0) {
              datallist.forEach((data) => {
                localStorage.removeItem(data.key);
              });
            }
            callback(true);
          } catch (e) {
            callback(false);
          }
    }

    get(name: string): string | null {
        return localStorage.getItem(name);
    }
    saveList(datallist: { key: string, value: any }[], callback: (arg0: boolean) => void): void {
        try {
          if (datallist && datallist.length > 0) {
            datallist.forEach((data) => {
              localStorage.setItem(data.key, `${data.value}`);
            });
          }
          callback(true);
        } catch (e) {
          callback(false);
        }
    }
    clear():void{
        localStorage.clear();   
    }
    clientClear=()=>{
      this.remove(DesmyState.CLIENT_ACCESS_TOKEN)
    }
    remove(name: string): void {
        localStorage.removeItem(name);
    }
    
    save(key: string, data: string): void {
        localStorage.setItem(key, data);
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

    setCookie(name: string, value: string, options?: { expires?: number | Date; path?: string; secure?: boolean }): void {
      let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

      // Handle expiration
      if (options?.expires) {
          if (typeof options.expires === 'number') {
              const date = new Date();
              date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000); // Days to milliseconds
              cookieString += `; expires=${date.toUTCString()}`;
          } else if (options.expires instanceof Date) {
              cookieString += `; expires=${options.expires.toUTCString()}`;
          }
      }

      // Handle path
      if (options?.path) {
          cookieString += `; path=${options.path}`;
      }

      // Handle secure flag
      if (options?.secure) {
          cookieString += '; secure';
      }

      // Set the cookie
      document.cookie = cookieString;
  }
}

export default new DesmyAuth();
