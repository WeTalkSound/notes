export function htmlDecode(input) {
  let textArea = document.createElement('textarea')
  textArea.innerHTML = input
  return textArea.value
}