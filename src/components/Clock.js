import React from 'react'

const Clock = ({date}) => {
    let hours = date.getHours()
    let minutes = date.getMinutes()

    if(minutes < 10){
        minutes = `0${minutes}`
    }
    if(hours < 10){
        hours = `0${hours}`
    }

  return (
    <h5 className='subtitle text-xl'>{hours} : {minutes}</h5>
  )
}

export default Clock