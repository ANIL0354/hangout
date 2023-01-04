//to check if any character matched
export function checkIfAnyMatched(letter, input) {
  let tempLetter = []
  let ifAnyMatched = false
  letter.forEach((item) => {
    if (item.value === input) {
      ifAnyMatched = true
      tempLetter.push({ ...item, match: true })
    } else {
      tempLetter.push(item)
    }
  })
  return [tempLetter, ifAnyMatched]
}

//to check if any character not matched
export function checkIfAllMatched(tempLetter) {
  return tempLetter.findIndex((item, index) => {
    if (!item.match) {
      return index
    }
  })
}
