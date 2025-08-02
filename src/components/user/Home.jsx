import React from 'react';
import "../../styles/Home.css";
import Navbar from './Navbar';
import Footer from './Footer';
import Homenav from './homenav';
import Carousel from './Carocel';
import aquarius from '../../assets/images/sign/Aquarius.svg'; 
import leo from '../../assets/images/sign/Leo.svg';
import aries from '../../assets/images/sign/Aries.svg';
import taurus from '../../assets/images/sign/Taurus.svg';
import gemini from '../../assets/images/sign/Gemini.svg';
import cancer from '../../assets/images/sign/Cancer.svg';
import virgo from '../../assets/images/sign/Virgo.svg';
import libra from '../../assets/images/sign/Libra.svg';
import scorpio from '../../assets/images/sign/Scorpio.svg';
import sagittarius from '../../assets/images/sign/Sagittarius.svg';
import capricorn from '../../assets/images/sign/capricorn.svg';
import pisces from '../../assets/images/sign/Pisces.svg';
import { FaPhone, FaComments, FaArrowRight, FaRegSun } from 'react-icons/fa';
import Connect from './Connect'

function Home() {
  const sampleData = [
    { id: 1, name: "Aquarius", imageUrl: aquarius },
    { id: 2, name: "Leo", imageUrl: leo },
    { id: 3, name: "Aries", imageUrl: aries },
    { id: 4, name: "Taurus", imageUrl: taurus },
    { id: 5, name: "Gemini", imageUrl: gemini },
    { id: 6, name: "Cancer", imageUrl: cancer },
    { id: 7, name: "Virgo", imageUrl: virgo },
    { id: 8, name: "Libra", imageUrl: libra },
    { id: 9, name: "Scorpio", imageUrl: scorpio },
    { id: 10, name: "Sagittarius", imageUrl: sagittarius },
    { id: 11, name: "Capricorn", imageUrl: capricorn },
    { id: 12, name: "Pisces", imageUrl: pisces },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Top Navigation */}
      <div className="mb-4">
        <Homenav />
      </div>
      <div>
        <Connect/>
      </div>

      {/* Carousel Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Carousel
          sectionName="Explore Your Zodiac Sign"
          data={sampleData}
        />
      </div>

      {/* Optional Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
