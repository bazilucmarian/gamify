export const getPermission = (requestedRoles, userLoggedInRole) =>
  requestedRoles.map(role => role.toLowerCase()).includes(userLoggedInRole.toLowerCase());
