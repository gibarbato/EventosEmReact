import React from 'react'
import LedVerde from './imgs/led_verde.jpg'
import LedVermelho from './imgs/led_vermelho.jpg'


export default function Led(props) {
    return (
        <>
            <div>
                <img style={{ width: '75px' }} src={props.ligado ? LedVerde : LedVermelho} />
            </div>

            <button onClick={() => props.setLigado(!props.ligado)}>
                {props.ligado ? 'Desligar' : 'Ligar'}
            </button>
        </>
    );
}