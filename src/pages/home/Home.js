
import React, { useEffect } from 'react';
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

import './Home.css';

function Home() {

    useEffect(() => {
        document.title = 'Fluxo - Site Clone'
    })

    return (
        <div>

            <Header />
            <Footer />

        </div>
    )
}

export default Home;