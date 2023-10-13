import React from 'react';
import '../Styles/about.css';
const about = () => {
  return (
    <div class="about-content">
         <div class="main-title">
            <h2>About <span>Me</span></h2>
         </div>
         <div class="about-container">
            <div class="left-about">
               <h4>Information About me</h4>
               <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  I am Yatri Doshi. I am 20 years old.
                  I am from Ahmedabad, Gujarat. I diploma
                  passed from Government Polytechnic,
                  Ahmedabad in 2021 with a degree in
                  Information Technology.My interests are in
                  Front End Engineering and I love to create
                  beautiful and performant products with
                  delightful user experiences. <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Let me introduce myself in 7 words.
                  Responsible, creative, open-minded,
                  friendly and ambitious web developer. This
                  is how I see myself, and hope you will
                  give me a chance to prove my words in the
                  job, or at least in this interview.
               </p>
            </div>
            <div class="right-about">
               <h4 class="stat-title">My Skills</h4>
               <div class="progress-bars">
                  <div class="progress-bar">
                     <p class="prog-title">html5</p>
                     <div class="progress-con">
                        <p class="prog-text">80%</p>
                        <div class="progress">
                           <span class="html"></span>
                        </div>
                     </div>
                  </div>
                  <div class="progress-bar">
                     <p class="prog-title">css3</p>
                     <div class="progress-con">
                        <p class="prog-text">95%</p>
                        <div class="progress">
                           <span class="css"></span>
                        </div>
                     </div>
                  </div>
                  <div class="progress-bar">
                     <p class="prog-title">javascript</p>
                     <div class="progress-con">
                        <p class="prog-text">75%</p>
                        <div class="progress">
                           <span class="js"></span>
                        </div>
                     </div>
                  </div>
                  <div class="progress-bar">
                     <p class="prog-title">ReactJS</p>
                     <div class="progress-con">
                        <p class="prog-text">60%</p>
                        <div class="progress">
                           <span class="react"></span>
                        </div>
                     </div>
                  </div>
                  <div class="progress-bar">
                     <p class="prog-title">NodeJS</p>
                     <div class="progress-con">
                        <p class="prog-text">87%</p>
                        <div class="progress">
                           <span class="node"></span>
                        </div>
                     </div>
                  </div>
                  <div class="progress-bar">
                     <p class="prog-title">Python</p>
                     <div class="progress-con">
                        <p class="prog-text">70%</p>
                        <div class="progress">
                           <span class="python"></span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
  )
}

export default about
