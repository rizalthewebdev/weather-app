import React from 'react'
import ReactLoading from 'react-loading'

const Loading = ({color}) => {
  return (
    <ReactLoading type='bars' color={color} />
  )
}

export default Loading