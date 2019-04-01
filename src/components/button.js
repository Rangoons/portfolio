import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Button = ({ to, text }) => (
  <Link to={to}>
    <StyledButton>{text}</StyledButton>
  </Link>
)
export default Button

const StyledButton = styled.button`
  text-decoration: none;
  transition: all 0.2s;
  border: 2px solid #de626e;
  font-family: sans-serif;
  color: #de626e;
  border-radius: 5px;
  outline: none;
  background: #fff;
  padding: 0.2rem 1rem;
  &:hover {
    cursor: pointer;
    background: #de626e;
    color: #fff;
  }
`
