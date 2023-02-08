function compareArrays(arr1, arr2) {
  if (arr1.length === arr2.length) {
    return arr1.every((element, i) => element === arr2[i]);
  } else {
    return false;
  }
}

function getUsersNamesInAgeRange(users, gender) {
  let result = users
    .filter((user) => user.gender === gender)
    .map((user) => user.age)
    .reduce(
      (previous, current, i, arr) =>
        i == arr.length - 1
          ? (previous + current) / arr.length
          : previous + current,
      0
    );
  return result;
}
