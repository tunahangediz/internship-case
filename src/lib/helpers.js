//convert to number K or M if needed
export function convertToK(num) {
  if (num >= 1000 && num < 1000000) {
    return `${(num / 1000).toFixed(1)}K`;
  } else if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  } else {
    return num;
  }
}

// if more than 33 characters truncate and add ...
export function truncateString(str) {
  return str.length > 33 ? str.substring(0, 33) + "..." : str;
}

// if number greater than 1000 use comma separator
export function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// if @ in front of username remove it
export function removeAt(str) {
  return str.charAt(0) === "@" ? str.slice(1) : str;
}
