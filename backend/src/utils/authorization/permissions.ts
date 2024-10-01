export async function verifyPermission(userPermissions: string[], requiredPermission: string): Promise<boolean> {
    return userPermissions.includes(requiredPermission);
}