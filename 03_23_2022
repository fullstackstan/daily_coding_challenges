// 7 kyu Money, Money, Money

function calculateYears(principal, interest, tax, desired) {
  let years=0
  for (let i=1;principal<desired;i++){
    let moneyEarned = principal*interest
    let taxAmount = moneyEarned*tax
    principal+=moneyEarned-taxAmount
    console.log(principal)
    years = i
  }return years
}
