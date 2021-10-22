import React from 'react'

export default ({ children }) => (
  <div
    style={{
      width: '100vw',
      height: '100vw',
      backgroundColor: 'tomato',
      padding: '4rem'
    }}
  >
    {children}
  </div>
)