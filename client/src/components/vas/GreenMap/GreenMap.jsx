import React from 'react';
import GreenMapStyles from './GreenMap.module.css';
import tree from '../../../img/tree.svg';
import greenFiled from '../../../img/greenField.svg';
import zone1 from '../../../img/zone1.svg';
import zone2 from '../../../img/zone2.svg';
import zone3 from '../../../img/zone3.svg';
import zone4 from '../../../img/zone4.svg';

const {main, greenBack, greenField, trees,
        zones} = GreenMapStyles;

const treesArray8 = [...Array(8)].map(i => {
    return (
        <div>
            <img src={tree} alt=""/>
        </div>

    )
})

export const GreenMap = () => {
    return (
        <div className = {main}>
            <div className = {greenBack}>
                <div className = {trees}>
                    {treesArray8}
                </div>
                <div className = {greenField}>
                    <img src={greenFiled} alt=""/>
                </div>
            </div>
            <div className = {zones}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
        </div>
    )
}