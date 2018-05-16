function confirmEnding(str, target) {
  const strList = str.split(' ');
  if (str.substr(-1, 1) === target) {
    return true;
  } else if (strList[strList.length - 1].substr(-target.length) === target) {
    return true;
  }
  return false;
}

confirmEnding('Bastian', 'n');
