const USER_LOCAL_STORAGE_KEY = 'gamify_user';

// get user from localStorage
export function getStoredUser() {
  const storedUser = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
  return storedUser ? JSON.parse(storedUser) : null;
}
// set user from localStorage
export function setStoredUser(user) {
  localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
}
export function deleteStoredUser() {
  localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
}
// delete user from localStorage
