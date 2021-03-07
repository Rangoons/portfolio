import React from 'react'
const Card = ({ children }) => (
  <div className="p-6 max-w-sm bg-white rounded-xl shadow-md flex items-center space-x-4 mx-8">
    <div>{children}</div>
  </div>
)

export default Card
