import React from "react";
import TabBlocksStyles from './TabBlocks.module.css';
import clock from '../../../img/clock.png';
import users from '../../../img/users.png';
import Vector from '../../../img/Vector.png';
import arrowLeft from '../../../img/arrow-left-circle.png';
import arrowRight from '../../../img/arrow-right-circle.png';
import nature from '../../../img/nature 6.png';
import image from '../../../img/image.png';
import { SheduleParticipant } from './SheduleParticipant/SheduleParticipant';

///////////////////////// Styles /////////////////////////////
const {main,tab,border,headline,headlineLeft,headlineRight,headlineTwoFour,headlineThird,clockImg,
    arrowright,onClick,content} = TabBlocksStyles;

///////////////////////// Component /////////////////////////////
export const TabBlocks = (props) => {

    // Data //
    // imitation of shedule
    let contentData = null;
    // imitation data from server with shedule information and participants
    let dataJSON = {
      shedule: [
        {
          imgSrc: nature,
          title: "Название",
          description: "описание - текст",
          day: "19 сентября",
          time: "12:00",
        },
        {
          imgSrc: nature,
          title: "Название",
          description: "описание - текст",
          day: "19 сентября",
          time: "12:00",
        },
        {
          imgSrc: nature,
          title: "Название",
          description: "описание - текст",
          day: "19 сентября",
          time: "12:00",
        },
        {
          imgSrc: nature,
          title: "Название",
          description: "описание - текст",
          day: "19 сентября",
          time: "12:00",
        },
      ],
      participants: [
        {
          imgSrc: image,
          title: "Название",
          description: "описание - текст",
        },
        {
          imgSrc: image,
          title: "Название",
          description: "описание - текст",
        },
        {
          imgSrc: image,
          title: "Название",
          description: "описание - текст",
        },
        {
          imgSrc: image,
          title: "Название",
          description: "описание - текст",
        },
      ],
    };

    let contentShedule = dataJSON.shedule.map((el) => {
        
        return (
            <SheduleParticipant data = {el} isDate = {true}  />
        )
    })

    let contentParticipants = dataJSON.participants.map((el) => {
        return (
            <SheduleParticipant data = {el}  />
        )
    })


    const firstLastBlocks = props.numberInArray; // number of block
    const isBorder = firstLastBlocks == 3 && border; // last block "Трансляция"

    // headline imgs
    let imgSrc = null;

    // headlineStyles for each component
    let headlineStyle = null;
    switch (firstLastBlocks) {
        case 0: headlineStyle = headline + " " + headlineLeft + " " + clockImg;
                imgSrc = clock;
                contentData = contentShedule;
            break;
        case 1: headlineStyle = headline + " " + headlineTwoFour;
                imgSrc = users;
                contentData = contentParticipants;
            break;
        case 2: headlineStyle = headline + " " + headlineThird;
                imgSrc = Vector;
            break;
        case 3: headlineStyle = headline + " " + headlineRight + " " + arrowright;
                imgSrc = arrowLeft;
            break;
        default: headlineStyle = headline;
            break;
    }

    return (
        <div className = {tab + " " + isBorder}>
                {props.isTwoHeadlines 
                                    ? <div className = {headlineStyle}> {/* two headlines */}
                                            <p className = {firstLastBlocks == 0 && onClick}><img src= {imgSrc} alt=""/> <span>{props.headlineArray[0]}</span> </p>
                                            <p>{props.headlineArray[1]}</p>
                                    </div>
                                    : <div className = {headlineStyle}> {/* one headlines */}
                                        <p><img src={imgSrc} alt=""/> <span>{props.headlineArray}</span> 
                                        {firstLastBlocks == 3 && <img src={arrowRight} alt=""/>} </p>
                                    </div>}
            <div className = {content}>
                {contentData}
            </div>
        </div>
    )
}