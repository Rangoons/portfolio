import React from 'react'
const Card = ({ children }) => (
  <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
    <div>{children}</div>
  </div>
)

export default Card
