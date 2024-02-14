import React from 'react'
import { useLocation } from 'react-router-dom'

export default function NewList() {
  const location = useLocation()
  console.log(location.state)
  return (
    <div>NewList</div>
  )
}
