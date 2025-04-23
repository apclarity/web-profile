import React from 'react'
import Header from '../../components/Header'
import Content from '../../components/Content'
import SmoothScrollContainer from '../../components/SmoothScrollContainer'

const Home = ({ setFooterY }) => {
    return (
        <div className='wrapper mt-16'>
            <SmoothScrollContainer>
                <header id='header'>
                    <Header />
                </header>
                <section>
                    <div className='mt-5'>
                        <Content setFooterY={setFooterY} />
                    </div>
                </section>
            </SmoothScrollContainer>
        </div>
    )
}

export default Home