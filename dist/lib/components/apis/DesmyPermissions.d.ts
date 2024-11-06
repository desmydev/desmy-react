type Permission = {
    name: string;
};
type PermissionGroup = {
    type: string;
    permissions: Permission[];
};
declare class DesmyPermissions {
    constructor();
    hasGrantedPermissions: (permissions: PermissionGroup[] | undefined, granted: string[], has_access: boolean) => boolean;
    hasUserGrantedPermissions: (user: any, granted: string[], checkHasAccess?: boolean) => boolean;
    hasGrantedPermissionGroup: (permissions: PermissionGroup[] | undefined, groups: string[]) => boolean;
    hasUserGrantedPermissionGroup: (user: any, groups: string[], checkHasAccess?: boolean) => boolean;
}
declare const _default: DesmyPermissions;
export default _default;
