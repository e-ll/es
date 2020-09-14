import React from 'react';
import MainGreenPageStyles from './MainGreenPage.module.css';
import { GreenMap } from './GreenMap/GreenMap';

const {main, mainTop, festyline,
        logo, title, mapTopIcon,
        offMapIcon,userTopIcon,alertCircleTopIcon,
        centerTop,topIcons, content} = MainGreenPageStyles;

export const MainGreenPage = () => {
    return (
        <div>
            <div className = {mainTop}>
                <div className = {festyline}>
                    <p>Festyline</p>
                </div>
                <div className = {centerTop}>
                    <div className = {logo}><p>Логотип фестиваля</p></div>
                    <div className = {title}><p>Экофест2020</p></div>
                </div>
                <div className = {topIcons}>
                    <div className = {mapTopIcon}>
                        <svg  height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.54199 9.49984V34.8332L12.3337 28.4998L24.667 34.8332L35.4587 28.4998V3.1665L24.667 9.49984L12.3337 3.1665L1.54199 9.49984Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.333 3.1665V28.4998" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M24.667 9.5V34.8333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className = {offMapIcon}>Карта оффлайн<br/>мероприятий</p>
                    </div>
                    <div className = {userTopIcon}>
                        <svg  height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.1663 40.25V36.4167C39.1663 34.3833 38.341 32.4333 36.872 30.9955C35.403 29.5577 33.4105 28.75 31.333 28.75H15.6663C13.5888 28.75 11.5964 29.5577 10.1273 30.9955C8.6583 32.4333 7.83301 34.3833 7.83301 36.4167V40.25" stroke="#26374D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M23.5003 21.0833C27.8266 21.0833 31.3337 17.6509 31.3337 13.4167C31.3337 9.18248 27.8266 5.75 23.5003 5.75C19.1741 5.75 15.667 9.18248 15.667 13.4167C15.667 17.6509 19.1741 21.0833 23.5003 21.0833Z" stroke="#26374D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className = {alertCircleTopIcon}>
                        <svg  height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 39.4168C30.665 39.4168 38.5 31.3953 38.5 21.5002C38.5 11.6051 30.665 3.5835 21 3.5835C11.335 3.5835 3.5 11.6051 3.5 21.5002C3.5 31.3953 11.335 39.4168 21 39.4168Z" stroke="#26374D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21 14.3335V21.5002" stroke="#26374D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21 28.6665H21.0173" stroke="#26374D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>  
            </div>
            <div className = {content}>
                <GreenMap/>
            </div>
        </div>
    )
};