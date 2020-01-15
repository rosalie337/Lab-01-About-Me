export default function isYes(str) {
    if (str.toLowerCase() === 'yes' || str.toLowerCase() === 'y' || str.toLowerCase() === 'yea' || str.toLowerCase() === 'Y' || str.toLowerCase() === 'YES') return true;
    else return false;}