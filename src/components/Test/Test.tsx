import React from 'react'

interface IconProps {
  color: string
}

const Test = (props: IconProps) => {
  return <button>{props.color}</button>
}

export default Test