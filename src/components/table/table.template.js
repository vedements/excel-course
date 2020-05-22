const CODES = {
  A: 65,
  Z: 90
}

function createCell(i) {
  return `<div class="cell" contenteditable="">${i}</div>`
}

function toColumn(col) {
  return `<div class="column">${col}</div>`
}

function createRow(content, index = '') {
  return `<div class="row">

   <div class="row-info">${index}</div>
   <div class="row-data">
   ${content}
   </div>
   </div>`
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 50) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')

  const colsnull = new Array(colsCount)
      .fill('')
      .map(() => createCell(''))
      .join('')

  rows.push(createRow(cols))

  for (let i=1; i < rowsCount + 1; i++) {
    rows.push(createRow(colsnull, i))
  }

  return rows.join(' ')
}

