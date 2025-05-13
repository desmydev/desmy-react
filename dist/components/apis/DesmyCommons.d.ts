declare class DesmyCommons {
    getFileSize(file: File): string;
    getExtension(filename: string): string;
    getFileName(filename: string): string;
    isValidHttpUrl(s: string): boolean;
    makeUniqueid(length?: number): string;
    nameToText(value: string): string;
    getRandomColor(): string;
    toSentenceCase: (str: string) => string;
    generateKey: () => number;
    concat(a: string, b: string): string;
    isObject(data: any): boolean;
    isEmptyOrNull(data: any, isForce?: boolean): boolean;
    toBoolean(data: any): boolean;
    toStringDefault(data: any, defaultValue?: string): string;
    toString(data: any): string;
    isEmpty(text: string | null | undefined): boolean;
    validatePasswords(passwordOne: string, passwordTwo: string): boolean;
    isValidDate(input: string | Date): boolean;
    validatePassword(passwordOne: string): {
        hasUppercase: boolean;
        hasLowercase: boolean;
        hasNumber: boolean;
        hasSpecialCharacter: boolean;
        has8Characters: boolean;
        allValidationsPassed: boolean;
    };
    isNotEmpty(value: string): boolean;
    columnHead(value: string): string;
    convertUnderscoreToSpaceString(str: string): string;
    isDarkTheme(): boolean;
    /**
     * Force the theme to update based on a provided mode.
     * @param mode - Either "dark" or "light".
     */
    forceTheme(mode: 'dark' | 'light'): void;
    /**
     * Synchronize the theme with the system or user preference and start listening for changes.
     * @param callback - Optional callback to run after syncing the theme.
     */
    syncTheme(callback?: (isDark: boolean) => void): Promise<void>;
    /**
     * Listen for system theme changes and update the theme dynamically.
     */
    listenForSystemThemeChanges(): void;
    imageSize(image: Blob): Promise<{
        width: number;
        height: number;
    }>;
    capitalizeEachWord(data: string): string;
    formatDateString(inputDate: string): string;
    formatDate(dateString: string): string;
    validateEmail: (email: string) => boolean;
    convertNumber(number: number): string;
    daysLeft(data: string): number;
    formatDateToCustomFormat(date: Date): string;
    getTimeAgoAndCustomDate(timestamp: string | number | Date): string;
    roundTo2dp(data: string): string;
    getParamUrl(data: string): string;
}
declare const _default: DesmyCommons;
export default _default;
