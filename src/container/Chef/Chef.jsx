import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
   <div className="app__wrapper_img app__wrapper_img-reverse">
    <img src={images.chef} alt="chef" />
   </div>
   <div className="app__wrapper_info">
    <SubHeading title="chef's Words"/>
    <h1 className="headtext__cormorant">What We Believe In</h1>

    <div className="app__chef-content">
      <div className="app__chef-content_quote">
      <img src={images.quote} alt="quote" />
      <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ut.</p>
      </div>
      <p className="p__opensans"> sit amet consectetur adipisicing elit. Nam sequi dignissimos 
        odit velit delectus laboriosam placeat obcaecati perspiciatis est enim?</p>
    </div>
    <div className="app__chef-sign">
      <p>Kevin</p>
      <p className='p__opensans'>Chef & Founder</p>
      <img src={images.sign} alt="sign" />
    </div>
   </div>
  </div>
);

export default Chef;
