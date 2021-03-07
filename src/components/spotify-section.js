import React from 'react'
import Card from '../components/card'

const SpotifySection = ({ text, left, caption, children }) => (
  <div
    className={[
      'flex',
      'm-4',
      'items-center',
      left ? 'flex-row' : 'flex-row-reverse',
    ].join(' ')}
  >
    <h2>{text}</h2>
    <Card>
      <div style={{ maxWidth: 450, minWidth: 250 }}>{children}</div>
      <div class="text-gray-500 mt-4">{caption}</div>
    </Card>
  </div>
)

export default SpotifySection
