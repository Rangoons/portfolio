import React from 'react'
import { Icon, H3 } from '@blueprintjs/core'

const IconHeading = ({ icon, size = 16, text }) => (
  <div style={{ display: 'flex', alignItems: 'baseline' }}>
    <Icon icon={icon} iconSize={size} />
    <H3 style={{ marginLeft: 10 }}>{text}</H3>
  </div>
)

export default IconHeading
