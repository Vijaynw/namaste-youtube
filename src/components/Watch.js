import React from 'react'
import { useSearchParams } from 'react-router-dom'
const Watch = () => {

  const [serch]=useSearchParams()
  console.log(serch.get('v'))
  return (
    <div>{serch.get('v')}</div>
  )
}

export default Watch