function truncateString(str, num) {
 let truncatedString = str.slice(0, num)
 if(str.length > truncatedString.length)
    truncatedString += '...' 
  return truncatedString
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
