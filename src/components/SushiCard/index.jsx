import React from 'react'
import css from './SushiCard.module.css'


const SushiCard = ({el}) => {
    return (
    <div className={css.card}>
        <img style={{width:180, height:150}} src={el.bg}alt=""/>
        <h3 style={{marginLeft:20,color:"red"}}>{el.title}</h3>
        <p style={{marginLeft:10,marginRight:10,fontFamily:'bold'}}>{el.inside1}</p>
        <b style={{marginLeft:10,marginRight:10}}>{el.inside2}</b>
        <h2 style={{marginLeft:50}}>{el.price}</h2>
        <h4 style={{marginLeft:60}}>{el.qty}</h4>
        <h5 style={{marginLeft:20}}>{el.kcal}</h5>
        <button style={{backgroundColor:'red'}}>{el.btn1}</button>
        <input type="text"/>
        <button style={{backgroundColor:'red'}}>{el.btn2}</button>
        <div>
        <button style={{backgroundColor:'red',width:209}}>{el.btn3}</button>
        </div>

    </div>
    )
}

export {SushiCard}