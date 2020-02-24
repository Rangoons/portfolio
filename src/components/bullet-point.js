import React from 'react'
import { Icon } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'

const BulletPoint = ({ children }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'baseline',
      marginLeft: 10,
    }}
  >
    <Icon icon={IconNames.CHEVRON_RIGHT} />
    <span>{children}</span>
  </div>
)

export default BulletPoint
