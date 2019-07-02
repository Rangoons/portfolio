import React from 'react'
import styled from 'styled-components'

const Button = ({ text, color, style }) => (
  <StyledButton color={color} style={style}>
    {text}
  </StyledButton>
)
export default Button

const StyledButton = styled.button`
  text-decoration: none;
  transition: all 0.2s;
  border: 2px solid ${props => props.color || '#de626e'};
  font-family: sans-serif;
  color: ${props => props.color || '#de626e'};
  border-radius: 5px;
  outline: none;
  background: #fff;
  padding: 0.2rem 1rem;
  &:hover {
    cursor: pointer;
    background: ${props => props.color || '#de626e'};
    color: #fff;
  }
`
