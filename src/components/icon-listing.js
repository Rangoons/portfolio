import React from 'react'

const IconListing = ({ icon, text }) => (
  <div style={{ display: 'flex', alignItems: 'baseline' }}>
    <icon>{icon}</icon>
    <span style={{ marginLeft: 10 }}>{text}</span>
  </div>
)

export default IconListing
