import DesmyCommons from "./DesmyCommons";

type Permission = {
    name: string;
  };
  
  type PermissionGroup = {
    type: string;
    permissions: Permission[];
  };
  
  class DesmyPermissions {
    constructor() {}
  
    hasGrantedPermissions = (
        permissions: PermissionGroup[] | undefined,
        granted: string[],
        _has_access : boolean
      ): boolean => {
        if (!permissions || !granted.length) return false;
        return permissions.some((permissionGroup) =>
          permissionGroup.permissions.some(({ name }) =>
            granted.some((grantedPermission) =>
              name.toLowerCase() === grantedPermission.toLowerCase()
            )
          )
        );
    }
    hasUserGrantedPermissions = (
        user: any,
        granted: string[],
        checkHasAccess:boolean=true
      ): boolean => {
        
        if(!checkHasAccess) return false

        if (user?.has_access && checkHasAccess) return true;
        const permissions = user.groups;
      
        if (DesmyCommons.isEmptyOrNull(permissions) || DesmyCommons.isEmptyOrNull(granted)) return false;
      
        return permissions.some((permissionGroup: any) =>
          permissionGroup.permissions.some(({ name }: any) =>
            granted.some((grantedPermission) =>
              name.toLowerCase() === grantedPermission.toLowerCase()
            )
          )
        );
      };
    hasGrantedPermissionGroup = (
        permissions: PermissionGroup[] | undefined,
        groups: string[],
      ): boolean => {
        if (!permissions || !groups.length) return false;
      
        return permissions.some((permissionGroup) =>
          groups.some((group) =>
            DesmyCommons.toString(permissionGroup.type).toLowerCase() ===
            DesmyCommons.toString(group).toLowerCase()
          )
        );
      };
    
    hasUserGrantedPermissionGroup = (
        user: any,
        groups: string[],
        checkHasAccess:boolean=true
    ): boolean => {
      
        if (user?.has_access && checkHasAccess) return true;
        const permissions = user.groups;
    
        if (DesmyCommons.isEmptyOrNull(permissions) || DesmyCommons.isEmptyOrNull(groups)) return false;
        
        return permissions.some((permissionGroup: any) =>{
          return groups.some((group) =>
              DesmyCommons.toString(permissionGroup.type).toLowerCase() ===
              DesmyCommons.toString(group).toLowerCase()
          )
        }
          
        );
    };
  }
  export default new DesmyPermissions();
  