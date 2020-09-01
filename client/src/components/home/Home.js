import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Button } from '@material-ui/core';

import styles from './Home.module.css';
import LandingImg from '../../img/landingImg.jpg';
import HowitworkImg1 from "../../img/landingImg.jpg";
import HowitworkImg2 from "../../img/steps.jpg";
import StepsImg from '../../img/steps.jpg';

class Home extends Component{
  onLogoutClick(e){
      e.preventDefault();
      this.props.logoutUser();
  }
  
  render(){
      const { isAuthenticated } = this.props.auth;
      const {
        header,
        header__text,
        header__buttons,
        header__img,
        howItWork,
        howItWork__container,
        howItWork__text,
        howItWork__imgReverse,
        steps__text,
        steps__list } = styles;
      
      const guestLinks = (
        <div className={header__buttons}>
          <Button className="primary-color marginR-1" component={Link} to="/register" variant="contained" size="large">
            Зарегистрироваться
          </Button>
          <Button className="secondary-color" component={Link} to="/events" variant="contained" size="large">
            Посмотреть
          </Button>
      	</div>
      );
      
      const userLinks = (
        <div className={header__buttons}>
          <Button className="primary-color marginR-1" component={Link} to="/profile" variant="contained" size="large">
            Профиль
          </Button>
          <Button className="secondary-color" component={Link} to="/events" variant="contained" size="large">
            Посмотреть
          </Button>
      	</div>
      );

      return (
        <Container maxWidth="lg">
          <header className={header}>
            <div className={header__text}>
              <h1>Festyline - онлайн фестивали</h1>
              <p>Отдыхайте и общайтесь даже на карантине!</p>
              {isAuthenticated ? userLinks : guestLinks}
            </div>
            <img src={LandingImg} alt="Landing" className={header__img} />
          </header>

          <main>
            <div className={howItWork}>
              <div className={howItWork__container}>
                <img src={StepsImg} alt="HowitworkImg2" />
                <div className={steps__text}>
                  <h2>
                    Сервис, в котором вы можете создать свой виртуальный
                    фестиваль
                  </h2>
                  <ol className={steps__list}>
                    <li>Создавайте зоны</li>
                    <li>Добавляйте контент</li>
                    <li>Приглашайте участников</li>
                    <li>Общайтесь</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className={howItWork}>
              <div className={howItWork__container}>
                <img
                  src={HowitworkImg1}
                  className={howItWork__imgReverse}
                  alt="HowitworkImg1"
                />
                <div className={howItWork__text}>
                  <h2>Зайти на фестиваль</h2>
                  <p>
                    Посмотрите что проходит на площадке сейчас
                  </p>
                  <Button
                    className="primary-color marginB-2"
                    component={Link}
                    to="/events"
                    variant="contained"
                    size="large"
                  >
                    Посмотреть
                  </Button>
                </div>
              </div>

              <div className="mb-5"></div>

              <div className={howItWork__container}>
                <img src={HowitworkImg2} alt="HowitworkImg2" />
                <div className={howItWork__text}>
                  <h2>Разместить стенд</h2>
                  <p>
                    Разместите свой стенд
                  </p>
                  <Button
                    className="primary-color"
                    component={Link}
                    to="/create-event"
                    variant="contained"
                    size="large"
                  >
                    Участвовать
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </Container>
      );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Home);