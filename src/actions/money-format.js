const moneyFormat = ({ number, isDecimal }) => {
  let money = number
  if (isDecimal) {
    money = parseFloat(number).toLocaleString('en-US', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    })
  } else {
    money = parseFloat(number).toLocaleString('en-US')
  }

  return money
}

export default moneyFormat
