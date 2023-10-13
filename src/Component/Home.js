import React from 'react';
import '../Styles/home.css';
import profile from '../Images/Profile.png';
import Typewriter from 'typewriter-effect';


const Home = () => {
  return (
    <div class="main-content"> 
            <div class="left-main-content">
               <div class="image">
                  <img src={profile} alt=""/>
               </div>
            </div>
            <div class="right-main-content">
               <h1 class="name">
                  <Typewriter
                    options={{
                      strings: ['Hello', 
                      'I am Yatri Doshi.',
                      'I am Full Stack Web Developer',
                      'I love to create beautiful and functional websites.',
                      'Thank You for Visiting...'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
            </div>
      </div>
  )
}

export default Home
