function titleCase(str) {
  // 1) splitting the strings into an array of words
  const convertToArray = str.split('');
  // 2) uppercase the words
  const upperCase = convertToArray.toUpperCase();
  return convertToArray;
}

titleCase("I'm a little tea pot");

