import React from 'react';
import coaching from "../images/coaching.png";
import strength from "../images/strength.jpg";
import meal from "../images/meal.jpg";
import mental from "../images/mentalperformance.png"

function Service() {
    return (
        <div>
            
            <div className="page-heading-rent-venue">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Are You Looking For Personalized Training Programs ?</h2>
                            <span>Check out our Training Programs, pick your choice and fill the registration application.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rent-venue-tabs">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row" id="tabs">
                                <div className="col-lg-12">
                                    <div className="heading-tabs">
                                        <div className="row">
                                            {/* <div className="col-lg-8">
                                                <ul>
                                                    <li><a href='#tabs-1'>Madison Square Garden</a></li>
                                                    <li><a href='#tabs-2'>Radio City Musical Hall</a></li>
                                                    <li><a href='#tabs-3'>Royce Hall</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="main-dark-button">
                                                    <a href="ticket-details.html">Purchase Tickets</a>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className='tabs-content'>
                                        <div id='tabs-1'>
                                            <div className="row">
                                                <div className="col-lg-9">
                                                    <div className="right-content">
                                                        <h4 >Personalized Training Programs</h4>
                                                       <h6 className='py-2'>Overview</h6>
                                                        <p className='py-2'>Our personalized training programs are crafted to suit your unique athletic goals, whether you're aiming to improve overall fitness, prepare for a specific competition, or enhance a particular aspect of your performance.</p>
                                                      <h6 className='py-2' >Features</h6>
                                                      <li className='py-2'>Initial assessment and goal setting</li>
                                                      <li className='py-2'>Customized workout plans</li>
                                                      <li className='py-2'>Regular progress evaluations</li>
                                                      <li className='py-2'>One-on-one coaching sessions</li>
                                                      <h6 className='py-2'>Benefits</h6>
                                                      <li className='py-2'>Tailored to your specific needs and goals</li>
                                                       <li className='py-2'>Flexibility to adjust as you progress</li>
                                                       <li className='py-2'>Expert guidance to maximize results</li>
                                                        {/* <ul className="list">
                                                            <li>Madison Square Garden</li>
                                                            <li>$2,840 per day</li>
                                                            <li>860 Guests</li>
                                                        </ul> */}
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div id="map">
                                                        <img src={coaching} className='img-fluid' alt="" />
                                                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7405.690436500271!2d-43.289281240686606!3d-23.00173786750551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd6d13e950037%3A0x2c49dc1b12837f3f!2sPedra%20da%20G%C3%A1vea!5e1!3m2!1sen!2sth!4v1630941277488!5m2!1sen!2sth" width="100%" height="240px" frameborder="0" ></iframe> */}
                                                        <h5>Any Question?</h5>
                                                        <p>Tumeric air affogato sare torial waistcoat denim stumber.</p>
                                                        <div className="text-button">
                                                            <a href="/">Need Direction? <i className="fa fa-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id='tabs-2'>
                                                <div className="row">
                                                    <div className="col-lg-9">
                                                        <div className="right-content">
                                                        <h4 className='mt-5' >Strength and Conditioning</h4>
                                                       <h6 className='py-2'>Overview</h6>
                                                        <p className='py-2'>Strength and conditioning are crucial components of athletic training. Our programs focus on building muscle strength, enhancing endurance, and improving overall physical conditioning to boost performance.</p>
                                                      <h6 className='py-2' >Features</h6>
                                                      <li className='py-2'>Weightlifting and resistance training</li>
                                                      <li className='py-2'>Plyometric exercises</li>
                                                      <li className='py-2'>Core strengthening routines</li>
                                                      <li className='py-2'>Functional fitness workouts</li>
                                                      <h6 className='py-2'>Benefits</h6>
                                                      <li className='py-2'>Increased muscle power and endurance</li>
                                                       <li className='py-2'>Enhanced athletic performance</li>
                                                       <li className='py-2'>Reduced risk of injury</li>
                                                       
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div id="map">
                                                            <img className='img-fluid' src={strength} alt="" />
                                                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14678.414668643849!2d-43.19038460753291!3d-22.96913839717705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd54579a5956b%3A0xa102deeaffcb3e3!2sCopacabana%20Beach!5e1!3m2!1sen!2sth!4v1630941170951!5m2!1sen!2sth" width="100%" height="240px" frameborder="0"></iframe> */}
                                                            <h5>Any Question?</h5>
                                                            <p>Tumeric air affogato sare torial waistcoat denim stumber.</p>
                                                            <div className="text-button">
                                                                <a href="/">Need Direction? <i className="fa fa-arrow-right"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id='tabs-3'>
                                                    <div className="row">
                                                        <div className="col-lg-9">
                                                            <div className="right-content">
                                                            <h4 className='mt-5' >Nutrition and Meal Planning</h4>
                                                       <h6 className='py-2'>Overview</h6>
                                                        <p className='py-2'>Nutrition plays a vital role in athletic performance. Our nutrition services provide personalized meal plans and dietary advice to fuel your body and enhance your training results.</p>
                                                      <h6 className='py-2' >Features</h6>
                                                      <li className='py-2'>Customized meal plans</li>
                                                      <li className='py-2'>Pre- and post-workout nutrition</li>
                                                      <li className='py-2'>Supplement recommendations</li>
                                                      <li className='py-2'>Hydration strategies</li>
                                                      <h6 className='py-2'>Benefits</h6>
                                                      <li className='py-2'>Optimized energy levels</li>
                                                       <li className='py-2'>Enhanced recovery and muscle growth</li>
                                                       <li className='py-2'>Improved overall health and performance</li>
                                                       
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div id="map">
                                                                <img className='img-fluid' src={meal} alt="" />
                                                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.724034173435!2d-43.27685374322357!3d-23.003403908758767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd6cbe74edde3%3A0x14e89f87adc702cc!2sMirante%20Ciclovia%20Sao%20Conrado!5e1!3m2!1sen!2sth!4v1630941324692!5m2!1sen!2sth" width="100%" height="240px" frameborder="0"></iframe> */}
                                                                <h5>Any Question?</h5>
                                                                <p>Tumeric air affogato sare torial waistcoat denim stumber.</p>
                                                                <div className="text-button">
                                                                    <a href="/">Need Direction? <i className="fa fa-arrow-right"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div id='tabs-2'>
                                                <div className="row">
                                                    <div className="col-lg-9">
                                                        <div className="right-content">
                                                        <h4 className='mt-5' >Mental Conditioning and Performance Coaching</h4>
                                                       <h6 className='py-2'>Overview</h6>
                                                        <p className='py-2'>Mental toughness is as important as physical strength in achieving athletic success. Our mental conditioning and performance coaching services focus on building mental resilience, improving focus, and developing a winning mindset.</p>
                                                      <h6 className='py-2' >Features</h6>
                                                      <li className='py-2'>Goal setting and motivation techniques</li>
                                                      <li className='py-2'>Stress management and relaxation exercises</li>
                                                      <li className='py-2'>Visualization and mental rehearsal</li>
                                                      <li className='py-2'>Performance psychology sessions</li>
                                                      <h6 className='py-2'>Benefits</h6>
                                                      <li className='py-2'>Improved focus and concentration</li>
                                                       <li className='py-2'>Enhanced mental resilience</li>
                                                       <li className='py-2'>Better performance under pressure</li>
                                                       
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div id="map">
                                                        <img src={mental} className='img-fluid' alt="" />
                                                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14678.414668643849!2d-43.19038460753291!3d-22.96913839717705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd54579a5956b%3A0xa102deeaffcb3e3!2sCopacabana%20Beach!5e1!3m2!1sen!2sth!4v1630941170951!5m2!1sen!2sth" width="100%" height="240px" frameborder="0"></iframe> */}
                                                            <h5>Any Question?</h5>
                                                            <p>Tumeric air affogato sare torial waistcoat denim stumber.</p>
                                                            <div className="text-button">
                                                                <a href="/">Need Direction? <i className="fa fa-arrow-right"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rent-venue-application">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-9">
                                        <div className="heading-text">
                                            <h4>Reservation Application</h4>
                                        </div>
                                        <div className="contact-form">
                                            <form id="contact" action="" method="post">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <fieldset>
                                                            <input name="name" type="text" id="name" placeholder="Your Name*" required="" />
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <fieldset>
                                                            <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email*" required="" />
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <fieldset>
                                                            <input name="phone-number" type="text" id="phone-number" placeholder="Phone Number*" required="" />
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <fieldset>
                                                            <input name="company-organization" type="text" id="company-organization" placeholder="Company / Organization*" required="" />
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <fieldset>
                                                            <input name="venue-requested" type="text" id="venue-requested" placeholder="Venue Requested*" required="" />
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <fieldset>
                                                            <input name="type-event" type="text" id="type-event" placeholder="Type Of Event*" required="" />
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <fieldset>
                                                            <input name="date-requested-first" type="text" id="date-requested-first" placeholder="Date Requested (Primary Date)*" required="" />
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <fieldset>
                                                            <input name="date-requested-second" type="text" id="date-requested-second" placeholder="Date Requested (Secondary Date)*" required="" />
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <fieldset>
                                                            <textarea name="about-event-hosting" rows="6" id="about-event-hosting" placeholder="About The Event You Are Hosting" required=""></textarea>
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <fieldset>
                                                            <button type="submit" id="form-submit" className="main-dark-button">Submit Request</button>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

                )
}

                export default Service
