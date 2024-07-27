import React from 'react'
import "../Css/style.css";
import mental from "../images/mental.jpg";
import cut from "../images/cut.jpg";
import nut from "../images/nut.jpg";
function About() {
    return (
        <div>
            <div className="page-heading-about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Expert Tips and Advice</h2>
                            <span>Stay informed with our comprehensive articles written by sports scientists, coaches, and nutritionists. From training techniques to recovery strategies, our experts share valuable insights to help you optimize your athletic performance.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-item">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="left-image">
                                {/* <img src="assets/images/about-image.jpg" alt="party time" /> */}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="right-content">
                                <div className="about-map-image">
                                    {/* <img src="assets/images/about-map-image.jpg" alt="party location" /> */}
                                </div>
                                <div className="down-content">
                                    <h4>Community and Support</h4>
                                    <ul>
                                        <li>Join our community of  like-minded athletes who are all working towards their peak performance. </li>

                                        <li> </li>
                                        <li> </li>
                                        <li>09:30 AM - 07:00 PM</li>
                                    </ul>
                                    <div className="main-dark-button">
                                        <a href="/service">Join Here </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-upcoming-shows">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <h2>Mission and Vision</h2>
                            <p>At xsport, our mission is to empower athletes to reach their full potential. We are dedicated to providing the best training resources, nutrition advice, and community support to help you achieve your goals.</p>
                            <h4>Items That Are Restricted</h4>
                            <ul>
                                <li>* Success Stories</li>
                                <li>* Nutrition</li>
                                <li>* Fitness Tracking</li>
                            </ul>
                            <h4>Meet the Team</h4>
                            <p>Our team of experts includes certified trainers, sports nutritionists, and experienced coaches who are passionate about helping you succeed. Get to know the people behind x Sport and learn about their backgrounds and expertise. </p>
                            <div className="text-button">
                                {/* <a href="event-details.html">Need Directions? <i className="fa fa-arrow-right"></i></a> */}
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="next-shows">
                                <h4>Tailored Training Programs</h4>
                                <ul>
                                    <li>
                                        <h5>Endurance Training</h5>
                                        <span>Sep 24 Fri<br />08:30 AM - 11:00 PM</span>
                                        <div className="icon-button">
                                            <a href="void(0)">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Personalized Training Programs</h5>
                                        <span>Sep 22 Wed<br />11:00 AM - 09:00 PM</span>
                                        <div className="icon-button">
                                            <a href="void(0)">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Strength and Conditioning</h5>
                                        <span>July 18 Friday<br />10:00 AM - 11:00 PM</span>
                                        <div className="icon-button">
                                            <a href="void(0)">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="also-like">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className=''>You Might Also Like...</h2>
                        </div>
                        <div className="col-lg-4">
                            <div className="like-item">
                                <div className="thumb">
                                    <a href="/"><img className="img-fluid" src={nut} alt="" /></a>
                                    <div className="icons">
                                        <ul>
                                            <li><a href="void(0)"><i className="fa fa-arrow-right"></i></a></li>
                                            <li><a href="void(0)"><i className="fa fa-ticket"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="down-content">
                                    <a href="/"><h4 className='py-3'>Expert Nutrition Advice</h4></a>
                                    <span>Our team of nutrition experts provides personalized meal plans, recipes, and dietary tips to fuel your body for optimal performance. </span>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="like-item">
                                <div className="thumb">
                                    <a href="void(0)"><img className="img-fluid" src={cut} alt="" /></a>
                                    <div className="icons">
                                        <ul>
                                            <li><a href="void(0)"><i className="fa fa-arrow-right"></i></a></li>
                                            <li><a href="void(0)"><i className="fa fa-ticket"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="down-content">
                                    <a href="event-details.html"><h4 className='py-3'>Cutting-Edge Fitness Tracking</h4></a>
                                    <span>Stay ahead of the game with our state-of-the-art fitness tracking tools  to help you make informed decisions about your training and recovery.</span>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="like-item">
                                <div className="thumb">
                                    <a href="/"><img className="img-fluid" src={mental} alt="" /></a>
                                    <div className="icons">
                                        <ul>
                                            <li><a href="void(0)"><i className="fa fa-arrow-right"></i></a></li>
                                            <li><a href="void(0)"><i className="fa fa-ticket"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="down-content">
                                    <a href="/"><h4 className='py-3'>Mental Training</h4></a>
                                    <span>Mental resilience and focus are essential. Methods include visualization, meditation, and sports psychology techniques.</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default About
