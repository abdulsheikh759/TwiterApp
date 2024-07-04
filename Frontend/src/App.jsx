 import React from 'react'
 import Home from './components/Home'
 import './Css/sticky.css'
//  import React, { useState, useEffect } from 'react';

 
 const App = () => {
  // const [isSticky, setSticky] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) { // Adjust scroll threshold as needed
  //       setSticky(true);
  //     } else {
  //       setSticky(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

   return (
    <div>
       <Home/>

    </div>
    //  <div className={`sticky-element ${isSticky ? 'sticky' : ''}`}>
    //  </div>
   )
 }
 
 export default App



// import './styles.css'; // Import your CSS file

  

 