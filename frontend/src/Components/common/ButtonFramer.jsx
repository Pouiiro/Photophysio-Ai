import React from 'react'

const Variant1 = {
  buttonText: 'Button',
  // Using default values:
  hoverText: 'Click',
  radius: 10,
  boxSizing: 'border-box',
  width: 'auto' /* 89px */,
  height: 'auto' /* 32px */,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8px 15px 8px 15px',
  backgroundColor: 'blue',
  overflow: 'visible',
  borderRadius: 10,
  border: '2px solid rgba(34, 34, 34, 0.1)',
}
const FramerButton = () => {
  return (
    <div>
      <button style={Variant1}> Button </button>
    </div>
  )
}

export default FramerButton
