import React, { useEffect, useState } from 'react';
import '../styles/CookieBar.scss'

const CookieBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    const handleScroll = () => {
      if (window.scrollY !== 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    return (
      <footer className={`cookie-bar ${isVisible ? 'visible' : ''}`}>
        <div className='cookie-help'>Cookies help us deliver our services. By using this website you agree to our use of cookies.</div>
        <div className='cookie-info'>
          <p className='cookie-learn'>Learn more</p>
          <p className='cookie-understand'>i understand</p>
        </div>
      </footer>
    );
}

export default CookieBar