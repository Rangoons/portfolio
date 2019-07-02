import React from 'react'
import { Link } from 'gatsby'
import Button from './button.js'

const LocalButton = ({ to, ...props }) => (
  <Link to={to}>
    <Button {...props} />
  </Link>
)
export default LocalButton
