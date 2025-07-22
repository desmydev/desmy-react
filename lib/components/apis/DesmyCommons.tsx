class DesmyCommons {
    getFileSize(file: File): string {
        let _size = file.size;
        const fSExt = ['Bytes', 'KB', 'MB', 'GB'];
        let i = 0;
        while (_size > 900) {
            _size /= 1024;
            i++;
        }
        const exactSize = `${(Math.round(_size * 100) / 100)} ${fSExt[i]}`;
        return exactSize;
    }

    getExtension(filename: string): string {
        return filename.split('.').pop()!;
    }

    getFileName(filename: string): string {
        return filename.split('/').pop()!;
    }

    isValidHttpUrl(s: string): boolean {
        let url;
        try {
            url = new URL(s);
        } catch (e) { return false; }
        return /https?/.test(url.protocol);
    }

    makeUniqueid(length = 10): string {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    nameToText(value: string): string {
        const header = value.split('_');
        return header.join(' ');
    }

    getRandomColor(): string {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    toSentenceCase = (str: string): string => {
        return str
          .toLowerCase()                       // Convert to lowercase
          .replace(/_/g, ' ')                   // Replace underscores with spaces
          .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase()); // Capitalize first letter of each word
      };
    isCurrentPath(urlPaths: string | string[]): boolean {
        let currentPath = window.location.pathname;
        if (!currentPath.endsWith('/')) {
            currentPath += '/';
        }

        // Normalize input to array
        const paths = Array.isArray(urlPaths) ? urlPaths : [urlPaths];

        return paths.some(path => {
            let normalizedPath = path;
            if (!normalizedPath.endsWith('/')) {
            normalizedPath += '/';
            }
            return normalizedPath === currentPath;
        });
        }


    generateKey = (): number => {
        return Math.floor(Math.random() * 100) + 1;
    }

    concat(a: string, b: string): string {
        return `${a} ${b}`;
    }
    isObject(data: any): boolean {
        return typeof data === 'object' && data !== null && !Array.isArray(data) && !(data instanceof File);
    }
    
    isEmptyOrNull(data: any, isForce: boolean = false): boolean {
        if (data == null) {
            return true; // handles null and undefined
        }
        
    
        if (Array.isArray(data)) {
            return data.length === 0;
        }
    
        if (typeof data === 'object' && !Array.isArray(data) && !(data instanceof File)) {
            const keys = Object.keys(data);
    
            if (keys.length === 0) {
                return true; // Empty object
            }
    
            if (isForce) {
                return keys.every(key => {
                    const value = data[key];
                    if (typeof value === 'string') {
                        return value.trim() === "";
                    } else if (typeof value === 'boolean') {
                        return value === false;
                    } else if (typeof value === 'number') {
                        return value === 0;
                    } else if (Array.isArray(value)) {
                        return value.length === 0;
                    } else if (value instanceof File) {
                        return value.size === 0;
                    } else if (typeof value === 'object' && value !== null) {
                        return Object.keys(value).length === 0;
                    }
                    return value == null;
                });
            } else {
                return !keys.some(key => {
                    const value = data[key];
                    if (typeof value === 'string') {
                        return value.trim() !== "";
                    } else if (typeof value === 'boolean') {
                        return value === true;
                    } else if (typeof value === 'number') {
                        return value !== 0;
                    } else if (Array.isArray(value)) {
                        return value.length !== 0;
                    } else if (value instanceof File) {
                        return value.size !== 0;
                    } else if (typeof value === 'object' && value !== null) {
                        return Object.keys(value).length !== 0;
                    }
                    return value != null;
                });
            }
        }
        
        if (data instanceof File) {
            
            return data.size === 0;
        }
    
        return data === "";
    }
    

    toBoolean(data: any): boolean {
        return String(data).toLowerCase() === "true";
    }
    toStringDefault(data: any, defaultValue = ""): string {
        return (!this.isEmptyOrNull(data)) ? `${data}` : `${defaultValue}`;
    }
    getDefaultValue = (defaultValue: any): string | string[] => {
        if (Array.isArray(defaultValue)) {
            return defaultValue.map(item => String(item?.id ?? item));
        }
        if (defaultValue && typeof defaultValue === 'object' && 'id' in defaultValue) {
            return String(defaultValue.id);
        }
        return this.toStringDefault(defaultValue, '');
        }


    toString(data: any): string {
        return  `${data}`;
    }

    isEmpty(text: string | null | undefined): boolean {
        return text === "" || text === undefined || text === null;
    }

    validatePasswords(passwordOne: string, passwordTwo: string): boolean {
        return (passwordOne !== "" && passwordOne === passwordTwo);
    }
    isValidDate(input: string | Date): boolean {
        const date = typeof input === "string" ? new Date(input) : input;
        return !isNaN(date.getTime());
    }
    validatePassword(passwordOne: string): {
        hasUppercase: boolean,
        hasLowercase: boolean,
        hasNumber: boolean,
        hasSpecialCharacter: boolean,
        has8Characters: boolean,
        allValidationsPassed: boolean
    } {
        // Check if password has uppercase letter
        const hasUppercase = /[A-Z]/.test(passwordOne);

        // Check if password has lowercase letter
        const hasLowercase = /[a-z]/.test(passwordOne);

        // Check if password has number
        const hasNumber = /\d/.test(passwordOne);

        // Check if password has special character
        const hasSpecialCharacter = /[~`!#@$%^&*+=\-[\]\\';,/{}|\\":<>?]/.test(passwordOne);

        // Check if password has at least 8 characters
        const has8Characters = passwordOne.length >= 8;

        // Check if all validations passed
        const allValidationsPassed = hasUppercase && hasLowercase && hasNumber && hasSpecialCharacter && has8Characters;

        return { hasUppercase, hasLowercase, hasNumber, hasSpecialCharacter, has8Characters, allValidationsPassed};
    }

    isNotEmpty(value: string): boolean {
        return value !== "";
    }
    columnHead(value: string): string {
        let header = value.split('_');
        if (header.length > 1 && header.slice(-1)[0].toLowerCase()) {
            return header.slice(0, -1).join(' ').toUpperCase();
        } else {
            return header.join(' ').toUpperCase();
        }
    }
    
    convertUnderscoreToSpaceString(str: string): string {
        return str.replace(/_/g, ' ');
    }
    
    isDarkTheme(): boolean {
        return localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    
    /**
     * Force the theme to update based on a provided mode.
     * @param mode - Either "dark" or "light".
     */
    forceTheme(mode: 'dark' | 'light'): void {
        if (mode === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
    }

    /**
     * Synchronize the theme with the system or user preference and start listening for changes.
     * @param callback - Optional callback to run after syncing the theme.
     */
    async syncTheme(callback?: (isDark: boolean) => void): Promise<void> {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const storedTheme = localStorage.getItem('color-theme');
        const isDark = storedTheme
            ? storedTheme === 'dark'
            : prefersDark;

        // Apply the theme
        this.forceTheme(isDark ? 'dark' : 'light');

        // Start listening for system theme changes
        this.listenForSystemThemeChanges();

        // Execute the callback if provided
        if (callback) {
            callback(isDark);
        }
    }

    /**
     * Listen for system theme changes and update the theme dynamically.
     */
    listenForSystemThemeChanges(): void {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        // Handle theme changes
        const handleThemeChange = (event: MediaQueryListEvent) => {
            const isDark = event.matches;
            this.forceTheme(isDark ? 'dark' : 'light');
        };

        // Add an event listener for system theme changes
        mediaQuery.addEventListener('change', handleThemeChange);
    }
    async imageSize(image: Blob): Promise<{ width: number, height: number }> {
        return new Promise((resolve, reject) => {
            try {
                const fileReader = new FileReader();
    
                fileReader.onload = () => {
                    const img = new Image();
    
                    img.onload = () => {
                        resolve({ width: img.width, height: img.height });
                    };
    
                    img.src = fileReader.result as string;
                };
    
                fileReader.onerror = (error) => {
                    reject(error);
                };
    
                fileReader.readAsDataURL(image);
            } catch (e) {
                reject(e);
            }
        });
    }
    

    capitalizeEachWord(data: string): string {
        const str = data.toLowerCase();
        return str
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    formatDateString(inputDate: string): string {
        const match = inputDate.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
        if (!match) {
            throw new Error("Invalid date format. Please provide date in dd/mm/yyyy format.");
        }
    
        const [, day, month, year] = match;
    
        const formattedDate = `${year}-${month}-${day}`;
    
        return formattedDate;
    }
    
    formatDate(dateString : string) {
        const date = new Date(dateString);
        
        // Extracting the parts of the date
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JS
        const day = String(date.getDate()).padStart(2, '0');
    
        return `${year}-${month}-${day}`;
      }
    
      validateEmail = (email: string): boolean => {
        const atIndex = email.indexOf("@");
        const dotIndex = email.lastIndexOf(".");
        if (atIndex <= 0 || atIndex === email.length - 1) return false;

        if (dotIndex < atIndex + 2 || dotIndex === email.length - 1) return false;
    
        const domain = email.slice(atIndex + 1, dotIndex);
        if (!domain || domain.includes("@") || domain.includes(" ")) return false;
    
        const topLevelDomain = email.slice(dotIndex + 1);
        if (topLevelDomain.length < 2) return false;
    
        return true;
    };
    
    

    convertNumber(number: number): string {
        if (Math.abs(number) >= 1000000) {
            // Convert to millions (e.g., 1.99M)
            return (number / 1000000).toString().substring(0, 4) + 'M';
        } else if (Math.abs(number) >= 1000) {
            // Convert to thousands (e.g., 1.99k)
            return (number / 1000).toString().substring(0, 4) + 'k';
        } else {
            // No conversion needed
            return number.toString();
        }
    }
    

    daysLeft(data: string): number {
        // Convert the string date to a Date object
        const date = new Date(data);
    
        // Get the current date
        const currentDate = new Date();
    
        // Calculate the difference in milliseconds between the provided date and the current date
        const differenceInTime = date.getTime() - currentDate.getTime();
    
        // Calculate the difference in days
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    
        return differenceInDays;
    }

    formatDateToCustomFormat(date: Date): string {
        const daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day: string = daysOfWeek[date.getDay()];
        const dayOfMonth: number = date.getDate();
        const monthNames: string[] = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'
        ];
        const month: string = monthNames[date.getMonth()];
        const year: number = date.getFullYear();
    
        // Function to add 'st', 'nd', 'rd', or 'th' to the day of the month
        function getDayOfMonthSuffix(day: number): string {
            if (day >= 11 && day <= 13) {
                return 'th';
            }
            switch (day % 10) {
                case 1:
                    return 'st';
                case 2:
                    return 'nd';
                case 3:
                    return 'rd';
                default:
                    return 'th';
            }
        }
    
        const daySuffix: string = getDayOfMonthSuffix(dayOfMonth);
    
        return `${day}, ${dayOfMonth}${daySuffix} ${month}, ${year}`;
    }
     
    getTimeAgoAndCustomDate(timestamp: string | number | Date): string {
        const currentDate = new Date();
        const targetDate = new Date(timestamp);
    
        const timeDiffMillis = currentDate.getTime() - targetDate.getTime();
    
        // Check if currentDate is before targetDate
        if (currentDate < targetDate) {
            return "Future date"; // Handle future dates differently if needed
        }
    
        const secondsAgo = Math.floor(timeDiffMillis / 1000);
    
        if (secondsAgo < 60) {
            return `${secondsAgo} seconds ago`;
        } else if (secondsAgo < 3600) {
            const minutesAgo = Math.floor(secondsAgo / 60);
            return `${minutesAgo} minutes ago`;
        } else if (secondsAgo < 86400) {
            const hoursAgo = Math.floor(secondsAgo / 3600);
            return `${hoursAgo} hours ago`;
        } else if (secondsAgo < 2592000) {
            const daysAgo = Math.floor(secondsAgo / 86400);
            return `${daysAgo} days ago`;
        } else {
            const formattedDate = targetDate.toLocaleString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short"
            });
            return formattedDate;
        }
    }
    

    roundTo2dp(data: string): string {
        // Parse the input string to a floating-point number
        const numberData = parseFloat(data);
    
        // Check if the input is a valid number
        if (isNaN(numberData)) {
            // If not a valid number, return the input string as it is
            return data;
        }
    
        // Round the number to 2 decimal places
        const roundedNumber = Math.round(numberData * 100) / 100;
    
        // Convert the rounded number back to a string with 2 decimal places
        return roundedNumber.toFixed(2);
    }
    
    getParamUrl(data: string): string {
        const pathSegments = window.location.pathname.split("/");
        const index = pathSegments.indexOf(data);
        return index !== -1 && index + 1 < pathSegments.length ? pathSegments[index + 1] : "";
    }
    
}
export default  new DesmyCommons();
