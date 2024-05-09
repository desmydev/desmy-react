declare class Commons {
    getFileSize(file: File): string;
    getExtension(filename: string): string;
    getFileName(filename: string): string;
    isValidHttpUrl(s: string): boolean;
    makeUniqueid(length?: number): string;
    nameToText(value: string): string;
    getRandomColor(): string;
    generateKey: () => number;
    concat(a: string, b: string): string;
    isEmptyOrNull(data: any): boolean;
    toStringDefault(data: any, defaultValue?: string): string;
    toString(data: any): string;
    isEmpty(text: string | null | undefined): boolean;
    validatePasswords(passwordOne: string, passwordTwo: string): boolean;
    validatePassword(passwordOne: string): {
        hasUppercase: boolean;
        hasLowercase: boolean;
        hasNumber: boolean;
        hasSpecialCharacter: boolean;
        has8Characters: boolean;
        allValidationsPassed: boolean;
    };
    isNotEmpty(value: string): boolean;
    convertUnderscoreToSpaceString(str: string): string;
    imageSize(image: Blob): Promise<{
        width: number;
        height: number;
    }>;
    capitalizeEachWord(data: string): string;
    formatDateString(inputDate: string): string;
    validateEmail(email: string): boolean;
    convertNumber(number: number): string;
    daysLeft(data: string): number;
    formatDateToCustomFormat(date: Date): string;
    getTimeAgoAndCustomDate(timestamp: string | number | Date): string;
    roundTo2dp(data: string): string;
}
declare const _default: Commons;
export default _default;
