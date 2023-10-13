import React from 'react';
import '../Styles/contact.css';
import {Language,LocationOn,Facebook,Twitter,GitHub,YouTube,School,Phone,Mail} from '@mui/icons-material';
const contact = () => {
  return (
    <div class="contact-content">
         <div class="main-title">
            <h2>Contact <span>Me</span></h2>
        </div>
        <div class="contact-content-con">
            <div class="left-contact">
                <h4>Contact me here</h4>
                <div class="contact-info">
                    <div class="contact-item">
                        <div class="icon">
                            <LocationOn/>
                            <span>Location</span>
                        </div>
                        <p>
                            : Ahmedabad, Gujarat, India.
                        </p>
                    </div>
                    <div class="contact-item">
                        <div class="icon">
                          <Mail />
                            <span>Email</span>
                        </div>
                        <p>
                            <span>: yatri412doshi@gmail.com</span>
                        </p>
                    </div>
                    <div class="contact-item">
                        <div class="icon">
                            <School />
                            <span>Education</span>
                        </div>
                        <p>
                            <span>: Government Polytechnic ,Ahmedabad</span>
                        </p>
                    </div>
                    <div class="contact-item">
                        <div class="icon">
                            <Phone />
                            <span>Mobile Number</span>
                        </div>
                        <p>
                            <span>: 0757294875</span>
                        </p>
                    </div>
                    <div class="contact-item">
                        <div class="icon">
                            <Language />
                            <span>Languages</span>
                        </div>
                        <p>
                            <span>: English, Hindi, Gujarati</span>
                        </p>
                    </div>
                </div>
                <div class="contact-icons">
                    <div class="contact-icon">
                        <a href="www.facebook.com" target="_blank">
                          <Facebook />
                        </a>
                        <a href="#" target="_blank">
                          <Twitter />
                        </a>
                        <a href="#" target="_blank">
                          <GitHub />
                        </a>
                        <a href="#" target="_blank">
                          <YouTube />
                        </a>
                    </div>
                </div>
            </div><br/>
            <div class="right-contact">
                <form action="" class="contact-form">
                    <div class="input-control i-c-2">
                        <input type="text" required placeholder="YOUR NAME" />
                        <input type="email" required placeholder="YOUR EMAIL" />
                    </div>
                    <div class="input-control">
                        <input type="text" required placeholder="ENTER SUBJECT" />
                    </div>
                    <div class="input-control">
                        <textarea name="" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
                    </div>
                    <div class="submit-btn">
                        <a href="#" class="main-btn">
                            <span class="btn-text">Submit</span>
                        </a>
                    </div>
                </form>
            </div>
      </div>
    </div>
  )
}

export default contact
