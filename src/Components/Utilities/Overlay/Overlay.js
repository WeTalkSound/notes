import React from 'react'
import "./Overlay.css";

export default function Overlay({ close, children }) {
  return (
    <div className="Overlay">
      <div>
        <span className="fas fa-times" onClick={ close }></span>
      </div>
      {children}
    </div>
  )
}