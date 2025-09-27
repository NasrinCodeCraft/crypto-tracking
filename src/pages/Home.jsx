import React from 'react';
import Navbar from '../components/Navbar';
import CoinArea from '../components/CoinArea';

const Home = () => {
  return (
    <div className='app'>
      <Navbar />
      <CoinArea />
    </div>
  );
};

export default Home;