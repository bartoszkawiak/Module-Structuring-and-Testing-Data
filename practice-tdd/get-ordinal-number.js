export function getOrdinalNumber(num) {
  const exceptions = [11, 12, 13];
  const strNum = num.toString();

  for (let exception of exceptions) {
    if (strNum.endsWith(exception.toString())) {
      return strNum + "th";
    }
  }

  if (strNum.endsWith("1")) {
    return strNum + "st";
  } else if (strNum.endsWith("2")) {
    return strNum + "nd";
  } else if (strNum.endsWith("3")) {
    return strNum + "rd";
  }
}
