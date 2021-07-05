export default function getInitials(userName) {
  return userName
    .split(' ')
    .map(name => name.charAt(0))
    .join('')
    .toUpperCase();
}
