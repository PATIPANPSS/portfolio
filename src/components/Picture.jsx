import React from 'react'

const Picture = ({picture, title}) => {
  if(!picture) {
    return null;
  }
  return (
    <div>
    <img src={picture} alt={title} className="w-5/6 rounded-md" />
  </div>
  )
}

export default Picture