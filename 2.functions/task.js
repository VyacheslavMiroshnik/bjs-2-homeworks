function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    min = arr[i] < min ? arr[i] : min;
    max = arr[i] > max ? arr[i] : max;
    sum += arr[i];
  }
  let avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let initValue = 0;
  let resultSummElement = arr.reduce((sum, item) => sum + item, initValue);
  return resultSummElement;
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length) {
    return 0;
  } else {
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
    return max - min;
  }
}

function differenceEvenOddWorker(...arr) {
  let eventSumm = 0;
  let oddSumm = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      oddSumm += arr[i];
    } else {
      eventSumm += arr[i];
    }
  }
  return eventSumm - oddSumm;
}
function averageEvenElementsWorker(...arr) {
  let evenCount = 0;
  let sumCount = 0;
  if (arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2) {
        continue;
      } else {
        evenCount += 1;
        sumCount += arr[i];
      }
    }
  } else {
    return 0;
  }
  return sumCount / evenCount;
}

function makeWork(arrOfArr, func) {
  let maxWorkResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let funcResult = func(...arrOfArr[i]);
    maxWorkResult = maxWorkResult < funcResult ? funcResult : maxWorkResult;
  }
  return maxWorkResult;
}
