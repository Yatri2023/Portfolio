import React from 'react'
import { GitHub } from '@mui/icons-material'
import stopwatch from '../Images/StopWatch.png';
import tdl from '../Images/To-Dolist.png';
import cfg from '../Images/port5.png';
import '../Styles/portfolio.css';
const portfolio = () => {
  return (
    <div>
      <div class="portfolio-content">
        <div class="main-title">
          <h2>My <span>Projects</span></h2>
        </div>
        <p class="port-text">
          Here is some of my work that I've done in various programming languages.
        </p>
        <div class="portfolios">
          <div class="portfolio-item">
            <div class="image">
              <img src={stopwatch} alt="" />
            </div>
            <div class="hover-items">
              <h3>Project Source</h3>
              <div class="icons">
                <a href="https://yatri2023.github.io/StopWatch/" class="icon">
                  <GitHub className='i' />
                </a>
              </div>
            </div>
          </div>
          <div class="portfolio-item">
            <div class="image">
              <img src={tdl} alt="" />
            </div>
            <div class="hover-items">
              <h3>Project Source</h3>
              <div class="icons">
                <a href="#" class="icon">
                  <GitHub className='i' />
                </a>
              </div>
            </div>
          </div>
          <div class="portfolio-item">
            <div class="image">
              <img src={cfg} alt="" />
            </div>
            <div class="hover-items">
              <h3>Project Source</h3>
              <div class="icons">
                <a href="https://yatri2023.github.io/yatri_awt_coffee_junction/" class="icon">
                  <GitHub className='i' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default portfolio
