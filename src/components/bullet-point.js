import React from 'react'

const BulletPoint = ({ children }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'baseline',
      marginLeft: 10,
    }}
  >
    <icon>🔹</icon>
    <span>{children}</span>
  </div>
)

export default BulletPoint
