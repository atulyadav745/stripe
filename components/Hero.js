import React, { useState } from 'react';
import Monthly from './Monthly';
import Yearly from './Yearly';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('monthly');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div >
      <div>
        <button class="bg-berry  text-white font-bold py-2  rounded-full p-4 focus:bg-mauve mr-4" onClick={() => handleTabChange('monthly')}>Monthly</button>
        <button class="bg-berry  text-white font-bold py-2 rounded-full p-4 focus:bg-mauve " onClick={() => handleTabChange('yearly')}>Yearly</button>
      </div>
      <div>
        {activeTab === 'monthly' && (
         <Monthly/>
        )}
        {activeTab === 'yearly' && (
          <Yearly/>
        )}
      </div>
    </div>
  );
};

export default Hero;
