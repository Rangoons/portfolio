import React from 'react'
import { Icon } from '@blueprintjs/core'

const IconListing = ({ icon, size = 16, text }) => (
  <div style={{ display: 'flex', alignItems: 'baseline' }}>
    <Icon icon={icon} iconSize={size} />
    <span style={{ marginLeft: 10 }}>{text}</span>
  </div>
)

export default IconListing
