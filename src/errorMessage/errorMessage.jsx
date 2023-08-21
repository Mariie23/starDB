import React from "react"
import "./errorMessage.css"
const ErrorMessage = () => {
  return (
    <div className="error">
      <p className="error-header">BOOOM!</p>
      <p className="error-text">Something has gone terribly wrong</p>
    </div>
  )
}

export default ErrorMessage
