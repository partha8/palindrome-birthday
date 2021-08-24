const datesInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const checkPalindrome = (birthdate) => {
  const birthdateArr = birthdate.split("");
  const reversedBirthdateArr = birthdateArr.reverse();
  const reversedBirthdate = reversedBirthdateArr.join("");

  return birthdate === reversedBirthdate;
};

export const getPalindrome = (dd, mm, yyyy) => {
  if (checkPalindrome(dd + mm + yyyy)) return `${dd}-${mm}-${yyyy}`;

  if (checkPalindrome(mm + dd + yyyy)) return `${mm}-${dd}-${yyyy}`;

  if (checkPalindrome(mm + dd + yyyy.substring(2)))
    return `${mm}-${dd}-${yyyy.substring(2)}`;

  if (checkPalindrome(dd + mm + yyyy.substring(2)))
    return `${dd}-${mm}-${yyyy.substring(2)}`;

  if (checkPalindrome(yyyy + mm + dd)) return `${yyyy}-${mm}-${dd}`;

  return "";
};

const getPalindromeHelper = (date, month, year) => {
  let yearString = String(year);
  let monthString = String(month);
  let dateString = String(date);

  if (monthString.length === 1) monthString = "0" + monthString;

  if (dateString.length === 1) dateString = "0" + dateString;

  return getPalindrome(dateString, monthString, yearString);
};

export const findNextPalindrome = (dd, mm, yyyy) => {
  let forwardDate = Number(dd);
  let backwardDate = Number(dd);

  let forwardMonth = Number(mm);
  let backwardMonth = Number(mm);

  let forwardYear = Number(yyyy);
  let backwardYear = Number(yyyy);

  let missedDays = 0;
  while (true) {
    missedDays++;
    console.log(missedDays);

    forwardDate++;

    let max_days;
    if (
      forwardMonth === 2 &&
      ((forwardYear % 4 === 0 && forwardYear % 100 !== 0) ||
        forwardYear % 400 === 0)
    ) {
      max_days = 29;
    } else {
      max_days = datesInMonth[forwardMonth - 1];
    }
    if (forwardDate > max_days) {
      forwardDate = 1;
      forwardMonth++;
      if (forwardMonth > 12) {
        forwardMonth = 1;
        forwardYear++;
      }
    }
    const forwardPalindromeFormat = getPalindromeHelper(
      forwardDate,
      forwardMonth,
      forwardYear
    );

    if (forwardPalindromeFormat !== "")
      return [forwardPalindromeFormat, missedDays];

    // check before birthdate
    backwardDate--;
    if (backwardDate < 1) {
      backwardMonth--;

      if (backwardMonth < 1) {
        backwardYear--;

        if (backwardYear < 1) {
          return ["", ""];
        } else {
          backwardMonth = 12;
          backwardDate = 31;
        }
      } else {
        if (
          backwardMonth === 2 &&
          ((yyyy % 4 === 0 && yyyy % 100 !== 0) || yyyy % 400 === 0)
        ) {
          backwardDate = 29;
        } else {
          backwardDate = datesInMonth[backwardMonth - 1];
        }
      }
    }

    const backwardPalindromeFormat = getPalindromeHelper(
      backwardDate,
      backwardMonth,
      backwardYear
    );
    if (backwardPalindromeFormat !== "")
      return [backwardPalindromeFormat, missedDays];
  }
};
