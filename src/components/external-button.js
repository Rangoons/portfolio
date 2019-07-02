import React from 'react'
import Button from './button.js'

const ExternalButton = ({ to, ...props }) => (
  <a href={to}>
    <Button {...props} />
  </a>
)
export default ExternalButton
