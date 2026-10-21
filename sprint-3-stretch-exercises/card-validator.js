export function isCardValid(cardNum) {
  if (typeof cardNum !== "number") {
    return false;
  }
  const has16Length = String(cardNum).length === 16;
  const seenDigits = [];
  const isFinalEven = cardNum % 2 === 0;
  let total = 0;
  for (const num of String(cardNum)) {
    if (!seenDigits.includes(num)) {
      seenDigits.push(num);
    }
    const regex = /^\d$/;
    if (!regex.test(num)) {
      return false;
    }
    total += Number(num);
  }
  if (has16Length && isFinalEven && total > 16 && seenDigits.length >= 2) {
    return true;
  } else {
    return false;
  }
}
