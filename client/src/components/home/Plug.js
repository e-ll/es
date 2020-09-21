import React from "react";

import "./Plug.css";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Countdown from "./Count2.js";
import YoutubeBackground from "react-youtube-background";
import { Button, TextField, Grid, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const ValidationTextField = withStyles({
  root: {
    minWidth: "200px",
    width: "20.8vw",
    fontSize: "1.5vw",
    "& input:valid + fieldset": {
      border: "0.35vw solid #55B563",
      borderWidth: "0.139vw",
      borderRadius: "2.2vw",
    },
    "& input:invalid + fieldset": {
      border: "0.4vw solid #55B563",
      borderWidth: "0.139vw",
      borderRadius: "32px",
    },
    "& input:valid:focus + fieldset": {
      border: "0.4vw solid #55B563",
      borderLeftWidth: "0.42vw",
      padding: "0.28vw !important",
      borderRadius: "2.2vw", // override inline-style
    },
  },
})(TextField);

const ColorButton = withStyles((theme) => ({
  root: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",

    textAlign: "center",
    color: "#FFFFFF",
    borderRadius: "2vw",
    backgroundColor: "#55B563",
    "&:hover": {
      backgroundColor: "green",
    },
  },
}))(Button);
const ColorIButton = withStyles((theme) => ({
  root: {
    color: "#55B563",
    borderRadius: "2vw",
    fill: "#55B563",
    "&:hover": {
      backgroundColor: "green",
    },
  },
}))(IconButton);
const ColorIconButton = withStyles((theme) => ({
  root: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#FFFFFF",
    backgroundColor: "#white",
    "&:hover": {
      transform: "matrix(-1, 0, 0, 1, 0, 0)",
    },
  },
}))(IconButton);

function Plug() {
  const currentDate = new Date();
  const year =
    currentDate.getMonth() === 11 && currentDate.getDate() > 23
      ? currentDate.getFullYear() + 1
      : currentDate.getFullYear();

  return (
    <div className="App">
      <div className="content">
        <YoutubeBackground
          style={{ minHeight: "75vh" }}
          videoId={"Aj2ffdSkuiQ"}
           playerOptions = {{loop:1}}
        >
          <div className="fest">
            <img src="/img/fest.png" alt="fest" />
          </div>
          <span className="festDate">19-20 СЕНТЯБРЯ</span>

          <div className="count">
            <Countdown date={`${year+1}-09-19T10:00:00`} />
          </div>
          {/* <Timer /> */}
          {/* <div className="form"> */}
          <div className="inputForm">
            <form
              action="https://festyline.us17.list-manage.com/subscribe/post?u=40fc2bc94eaa68b71519dda87&amp;id=e3ffda6771"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <ValidationTextField
                position="start"
                label="Введите email"
                required
                variant="outlined"
                id="validation-outlined-input"
              />
              <ColorIButton color="primary" type="submit">
                <CheckCircleOutlineIcon fontSize="large" />
              </ColorIButton>
            </form>
          </div>
          <span className="getPost">оставь свою почту и будь в курсе!</span>

          <div className="contacts">
            <ColorIconButton href="https://vk.com/megaevents_ekb">
              <img src="/img/vk.png" style={{ width: "8.17vw" }} alt="VK" />
            </ColorIconButton>
            <ColorIconButton href="https://www.instagram.com/megaekb_events">
              <img
                src="/img/insta.png"
                style={{ width: "8.17vw" }}
                alt="Instagram"
              />
            </ColorIconButton>
            <ColorButton
              color="primary"
              variant="contained"
              href="https://docs.google.com/document/d/e/2PACX-1vQStLV49nC112_Z6z0mMiFjRHZgc4yNrXOqGis0q5iMm39bF4MuAqMk9b6Y5o-UIF12RGUbXudBXxIS/pub"
            >
              Расписание
            </ColorButton>
          </div>
        </YoutubeBackground>
        <footer className="footer">
          <Grid container direction="row">
            <Grid item style={{ width: "70%" }} direction="row">
              <span className="footerTitle">
                ВИРТУАЛЬНЫЙ И ЖИВОЙ МЕЖДУНАРОДНЫЙ ЭКОЛОГИЧЕСКИЙ ФЕСТИВАЛЬ.
                <br />
              </span>
              <span className="footerTitle" fontWeight="fontWeightBold" m={1}>
                NEW GREEN REALITY. ЗЕЛЕНЫЕ РЕШЕНИЯ ДЛЯ ЖИЗНИ. <br />
                19-20 СЕНТЯБРЯ
              </span>
            </Grid>
            <Grid item style={{ width: "30%" }} direction="row">
              <span className="orgContact">
                По вопросам участия в маркете:
                <br />
                Александра: <a href="tel:+79120413346">+7 912 04-133-46</a>
              </span>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            className="partners"
          >
            <img src="/img/MEGA_logo.png" alt="logo" />
            <img src="/img/elcin.png" alt="logo" />
            <img src="/img/mayak.png" alt="logo" />
            <img src="/img/mak.png" alt="logo" />
          </Grid>
        </footer>
      </div>
    </div>
  );
}

export default Plug;
