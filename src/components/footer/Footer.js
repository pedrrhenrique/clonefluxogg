

import React from 'react';
import './Footer.css'

import next from '../../assets/next.webp';
import casasbahia from '../../assets/casasbahia.webp';
import ifood from '../../assets/ifood.webp';
import tiktok from '../../assets/tiktok.webp';
import tnt from '../../assets/tnt.webp'

function Footer() {
    return (
        <div>
            <footer>
                <nav className='navBarSponsors'>
                    <div className='navBarSponsors-images'>
                        <img src={next}></img>
                        <img src={casasbahia}></img>
                        <img src={ifood}></img>
                        <img src={tiktok}></img>
                        <img src={tnt}></img>
                    </div>
                </nav>

                <hr />

                <div className='footerNetworks'>
                    <div className='footerNetworks-fluxo'>
                        <p>FLUXO ESPORTS AGÊNCIA E PRODUÇÕES LTDA. <br /> CNPJ: XX.XXX.XXX/XXXX-XX</p>
                    </div>

                    <div className='footerNetworks-redes'>
                        <a href='https://instagram.com/fluxogg' target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href='https://twitter.com/fluxogg' target="_blank">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href='https://www.youtube.com/channel/UCUSKHWPgQl1ixaal1vysMyw' target="_blank">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>

                </div>

                <div className='footerPolitics'>
                    <a href='#'>Termos de serviço</a>
                    <a href='#'>Política de reembolso</a>
                    <a href='#'>Política de envio</a>
                </div>

                <div className='footerContact'>
                    <a href='mailto:contato@fluxo.gg'>CONTATO@FLUXO.GG</a>
                    <span>FLUXO GAMING 2021 ® TODOS OS DIREITOS RESERVADOS</span>
                </div>

                <hr />

                <div className='footerWarning'>
                    <span>AVISO: <br /> ESTE É UM SITE CLONE PARA FINS ACADÊMICOS <br />
                        SITE OFICIAL: <a href='https://loja.fluxo.gg' target="_blank">LOJA.FLUXO.GG</a> <br />
                        EMAIL PARA CONTATO: <a href="mailto:pedrrhenriq@hotmail.com">PEDRRHENRIQ@HOTMAIL.COM</a>
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Footer