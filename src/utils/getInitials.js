export default function getInitials(userName) {
  const userNameArray = userName.split(' ');
  const newInitials = userNameArray
    .map(name => name.charAt(0))
    .join('')
    .toUpperCase();

  return {newInitials};
}
