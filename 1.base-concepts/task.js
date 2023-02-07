"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}
"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discr = (Math.pow(b,2) - 4 * a * c) ;
  if (discr >= 0 ){
    if (discr === 0){
      arr.push(-b/(2 * a));
    } else if (discr > 0) {
      arr.push((-b + Math.sqrt(discr) ) /  (2 * a) );
      arr.push((-b - Math.sqrt(discr)  )  /(2 * a) );
    };

  };
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let checkPercent = ((typeof(+ percent) === 'number' ) && !Number.isNaN(+ percent)) ? '' : `Параметр процент содержит неправильное значение ${percent} `;
  let checkContribution = ((typeof(+ contribution) === 'number' ) && !Number.isNaN(+ contribution)) ? '' : `Параметр первоначальный взнос содержит неправильное значение ${contribution} `;
  let checkAmount = ((typeof(+ amount) === 'number' ) && !Number.isNaN(+ amount)) ? '' : `Параметр сумма кредита содержит неправильное значение ${amount} `;
  let checkCountMonth = ((typeof(+ countMonths) === 'number' ) && !Number.isNaN(+ countMonths)) ? '' : `Параметр дата окончания содержит неправильное значение ${countMonths} `;
  if (checkPercent || checkContribution || checkAmount || checkCountMonth){
   return !checkPercent && !checkContribution && !checkAmount && !checkCountMonth;
  };
 let totalAmount;
 let clearAmount = amount - contribution;
 let percentByMonth = (percent / 100) / 12;
 let payByMonth = clearAmount * (percentByMonth + (percentByMonth/(Math.pow((1 + percentByMonth), countMonths) - 1)));
 totalAmount = +(payByMonth * countMonths).toFixed(2);
 return totalAmount;
}