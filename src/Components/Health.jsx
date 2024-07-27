import React from 'react';
import importance from '../images/importance.jpg';
import phiysical from '../images/about.png';
// import emotion from '../images/emotion.jpeg';
import sleep from '../images/sleep.jpeg';
import mhealth from '../images/mentalhealth.jpg';


function Health() {
  return (
    <div>
      <div className="page-heading-shows-wellness">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Check Your Health & Wellness</h2>
              <span>Check out upcoming and past shows & events.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <h2 className='py-5'>Importance of Health and Wellness</h2>
            <p>Maintaining good health and wellness is critical for athletes to perform at their best. It encompasses physical, mental, and emotional well-being, all of which contribute to an athlete's overall performance and longevity in their sport.</p>
           
                <h6 className='py-2'>A Guide to Pre-Workout Nutrition</h6>
                <p className='py-2'>Learn how to prepare your body for intense training with the right balance of nutrients. Discover the best foods to eat before a workout to maximize energy and performance.</p>
         <h6 className='py-2'>Building Mental Resilience:</h6>
         <p className='py-2'>Discover effective mental conditioning techniques to improve your focus, handle stress, and build resilience. Learn how to develop a strong and positive mindset for athletic success.</p>
        <h6 className='py-2'>Managing Competitive Stress: Tips for Athletes</h6>
        <p className='py-2'>Learn practical strategies for managing the pressure of competition and maintaining emotional well-being. Discover the importance of a strong support system and how to build one.</p>
        <h6 className='py-2'>Holistic Health for Athletes: Balancing Body and Mind</h6>
        <p className='py-2' >Explore the benefits of a holistic approach to athlete training. Learn how integrating physical, mental, and emotional health can lead to sustained performance and overall well-being.</p>
          </div>
          <div className="col-md-1 col-sm-12"></div>
          <div className="col-md-4 col-sm-12">
            <img className='img-fluid py-2' src={importance} alt="" />
            <img className='img-fluid py-2' src={mhealth} alt="" />
          </div>
        </div>
      </div>
      <div className="container pb-5">
        <div id='tabs-3'>
          <div className="row">
            <div className="col-lg-9">
              <div className="right-content">
                <h4 className='mt-5' > Sleep and Recovery </h4>
                <h6 className='py-2'>Overview</h6>
                <p className='py-2'>Quality sleep and effective recovery strategies are essential for athletic success. We offer guidance on optimizing sleep patterns and recovery techniques to ensure athletes are well-rested and ready for their next challenge.</p>
                <h6 className='py-2' >Features</h6>
                <li className='py-2'>Faster recovery times</li>
                <li className='py-2'>Improved overall health and well-being</li>
                <li className='py-2'>Enhanced athletic performance</li>
                <h6 className='py-2'>Benefits</h6>
                <li className='py-2'>Sleep Hygiene: Tips for better sleep quality</li>
                <li className='py-2'>Active Recovery Techniques: Stretching, yoga, and low-intensity exercises</li>
                <li className='py-2'>Improved overall health and performance</li>

              </div>
            </div>
            <div className="col-lg-3">
              <div id="map">
              <img  className='img-fluid py-3' src={sleep} alt="" />
              </div>
            </div>

          </div>
<div className="row">
<img className='img-fluid' src={phiysical} alt="" />
  <div className="col-md-3 col-sm-12">
   
  </div>
  <div className="col-md-3 col-sm-12">
    
  </div>
  <div className="col-md-3 col-sm-12">
    {/* <img className='img-fluid' src={emotion} alt="" /> */}
  </div>
  <div className="col-md-3 col-sm-12">
    <img className='img-fluid' src="" alt="" />
  </div>
</div>
        </div>

       
      </div >

     

   
    </div >
  )
}

export default Health
