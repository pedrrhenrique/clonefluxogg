
import React, { useEffect } from 'react';
import './FlwMain.css'

function FlwMain() {

    useEffect(() => {
        document.title = 'Flw Collection - Site Clone'
    })

    return (
        <div>
            <div className='containerSquad2'>
                <div className='squad cerolRaja'>
                    <p className='squadDetails'>CAMISETA CASUAL FX RED <br />
                    <span className='cutSpan'>R$ 89,00</span> <span className='redSpan'>R$ 59,00</span> </p>
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

export default FlwMain