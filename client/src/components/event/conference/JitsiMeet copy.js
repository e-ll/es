import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Jutsu } from 'react-jutsu'

export const JitsiCalling = ({ roomId, name, password }) => {
  //   const { id } = useParams()
  return (
    <Jutsu
      
      roomName={roomId}
      displayName={name}
      loadingComponent={<p>loading ...</p>}
    />
  )
}

export const JitsiMeet = () => {
  
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [call, setCall] = useState(false)
  

  const handleClick = (event) => {
    event.preventDefault()
    if (room && name) setCall(true)
  }

  return call ? (
    <JitsiCalling name={name} roomId={room}  />
  ) : (
    <form>
      <input
        id='room'
        type='text'
        placeholder='Room'
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <input
        id='name'
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleClick} type='submit'>
        Start / Join
      </button>
    </form>
  )
}
