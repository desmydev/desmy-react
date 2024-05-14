class DesmyAuth {
    constructor() {
       
    }

    logout(): void {
        this.clear()
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
              localStorage.setItem(data.key, data.value.toString());
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
}

export default new DesmyAuth();
