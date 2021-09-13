const format = {
  currency: ({ number, isDecimal = false }) => {
    let money = number
    if (isDecimal) {
      money = number.toLocaleString('en-US', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
      })
    } else {
      money = number.toLocaleString('en-US')
    }

    return money
  }
}

export default format
