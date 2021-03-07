import React from 'react'

const IconHeading = ({ icon, text }) => (
  <div style={{ display: 'flex', alignItems: 'baseline' }}>
    <icon>{icon}</icon>
    <h3 style={{ marginLeft: 10, marginBottom: 10 }}>{text}</h3>
  </div>
)

export default IconHeading
