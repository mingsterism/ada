
function titleCase(str) {
    const lowerStr = str.toLowerCase();
    const splitStr = lowerStr.split(' ');
    for (const i in splitStr) {
      result = result + splitStr[i][0].toUpperCase() + split.Str[i].slice(1);
    }
  
    return result;


titleCase("I'm a little tea pot");
