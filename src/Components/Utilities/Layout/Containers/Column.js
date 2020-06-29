import React from 'react'

export default function Column({ children, size, offset, ...props}) {
  let clsNm = ``
  if(typeof size === "object") {
    for (const [key, value] of Object.entries(size)) {
      clsNm += `col-${key}-${value} `
    }
  } else {
    clsNm += `col-${size}`
  }

  if(typeof offset === "object") {
    for (const [key, value] of Object.entries(size)) {
      clsNm += `offset-${key}-${value} `
    }
  } else {
    clsNm += `offset-${size}`
  }
  return (
    <div {...props} className={clsNm}>
      {children}
    </div>
  )
}