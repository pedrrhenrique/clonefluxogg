
import React, { useEffect } from 'react';
import './JerseyMain.css'

function JerseyMain() {

    useEffect(() => {
        document.title = 'Jerseys - Site Clone'
    })

    return (
        <div>
            <div className='containerSquad'>
                <div className='squad nobruRaja'>
                    <p className='squadDetails'>UNIFORME OFICIAL FLUXO 2022 <br />
                    <span>R$ 179,00</span> </p>
                </div>
                <div className='squad laraDeusa'>
                <p className='squadDetails'>UNIFORME OFICIAL CRIAS - FEM. <br />
                    <span>R$ 179,00</span> </p>
                </div>
                <div className='squad bakRekkon'>
                <p className='squadDetails'>UNIFORME OFICIAL CRIAS - MASC. <br />
                    <span>R$ 179,00</span> </p>
                </div>
            </div>

            <div className='btnJersey'>
                <a href='https://loja.fluxo.gg' target="_blank" className='btnClick'>
                    <btn >ADQUIRA JÁ NO SITE OFICIAL!</btn>
                </a>
            </div>

        </div>
    )
}

export default JerseyMain