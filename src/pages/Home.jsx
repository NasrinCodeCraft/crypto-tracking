import React from 'react';
import Navbar from '../components/Navbar';
import CoinArea from '../components/CoinArea';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='app'>
      <Navbar />
      <CoinArea />
      <Footer />
    </div>
  );
};

export default Home;