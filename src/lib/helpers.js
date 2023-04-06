// if @ in front of username remove it
export function removeAt(str) {
  return str.charAt(0) === "@" ? str.slice(1) : str;
}
