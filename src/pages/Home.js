import React from 'react';
import Button from '../components/Button';
import Logo from '../components/Logo';
import Select from '../components/Select';

function Home() {
  return (
    <div className="home-page">
        <Logo />
        <div className="container">
            <section>
                <Select type="marker"/>
                <Select type="player"/>
            </section>

            <Button value="START" />
        </div>
    </div>
  )
}

export default Home;