import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {TextField, Button} from '@material-ui/core'
import { Jutsu } from 'react-jutsu'
import Modal from "@material-ui/core/Modal";
import ModalConf from "./ModalConf"
import { makeStyles } from "@material-ui/core/styles";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  
  // getModalStyle is not a pure function, we roll the style only on the first render

  const {roomName, name, openL} = props;
  const [open, setOpen] = React.useState(openL);
  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Jutsu
          roomName={roomName}
          displayName={name}
          loadingComponent={<p>loading ...</p>}
        />
      </Modal>
    </div>
  );
}
export const JitsiCalling = (props) => {
  const { roomName, name,...other } = props;
  //   const { id } = useParams()

  return (
    
      <Jutsu
        roomName={roomName}
        displayName={name}
        loadingComponent={<p>loading ...</p>}
      />
    
  );
}

export const JitsiMeet = (props) => {
  
  // const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [call, setCall] = useState(false)
  const {roomName} = props

  const handleClick = (event) => {
    event.preventDefault()
    if (name) setCall(true)
  }

  return call ? (
    // <JitsiCalling name={name} roomName={roomName}  />
    <SimpleModal openL={true} name={name} roomName={roomName} />
  ) : (
    <form>
      {/* <input
        id='room'
        type='text'
        placeholder='Room'
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      /> */}
      <TextField
        id='name'
        type='text'
        placeholder='Введите ваше имя...'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Button onClick={handleClick} type='submit'>
        Позвонить
      </Button>
    </form>
  )
}
