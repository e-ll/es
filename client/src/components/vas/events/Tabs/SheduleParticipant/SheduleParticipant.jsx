import React from "react";
import SheduleParticipantStyles from './SheduleParticipant.module.css';
import nature from '../../../../img/nature 6.svg';

///////////////////////// Styles /////////////////////////////
const {main, title, date, image, text} = SheduleParticipantStyles;

///////////////////////// Component /////////////////////////////

/*
    Props:
    1) data with:
        - imgSrc
        - title
        - description
        ~ day
        ~ time
    2) isDate. 1(true) or 2(false) component - 2/false delete day and time
*/

export const SheduleParticipant = (props) => {
    let propsData = props.data;
    return (
        <div className = {main}>
            <div className = {title}>
                <div className = {image}>
                <img src= {propsData.imgSrc} alt=""/>
                </div>
                <div className = {text}>
                    <p>{propsData.title}</p>
                    <p>{propsData.description}</p> 
                </div>
            </div>
            {props.isDate && <div className = {date}>
                                <p>{propsData.day}</p>
                                <p>{propsData.time}</p>
                            </div>}
        </div>
    )
}