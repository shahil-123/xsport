import React from 'react'
import sportmate from '../images/sport-mate.png';
import cup from '../images/img-03_003.jpg';
import cyling from '../images/cyling.jpg';
import runn from '../images/bg1.jpg';
import graph from '../images/graph1.jpg';
function Homeall() {
    

    return (
        <div>
            <div>
                <div>
                    <div className="main-banner">
                        {/* <div className="counter-content">
                        <ul>
                            <li>Days<span id="days"></span></li>
                            <li>Hours<span id="hours"></span></li>
                            <li>Minutes<span id="minutes"></span></li>
                            <li>Seconds<span id="seconds"></span></li>
                        </ul>
                    </div> */}

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="main-content">
                                        <div className="next-show">
                                            <i className="fa fa-arrow-up"></i>
                                            <span>Next Show</span>
                                        </div>
                                        <h6>Opening on Thursday, March 31st</h6>
                                        <h2>Welcome to xSport!</h2>
                                        <div className="main-white-button">
                                            <a href="/">Analyse your strength</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="amazing-venues">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="left-content">
                                    <h4>Training Plans</h4>
                                   <p>Welcome to Peak Performance, your ultimate destination for optimizing athletic training and nutrition. Our goal is to help athletes of all levels achieve their best by providing tailored training programs, expert nutrition advice, and cutting-edge fitness tracking tools.</p>
                                    <br />
                                    <h4>Why xsport ?</h4>
                                    <p>At xsport, we understand that every athlete is unique. Our personalized approach ensures that you receive the training and nutrition guidance that’s right for you. Whether you’re a beginner looking to get started or a seasoned pro aiming to break records, we have the resources and expertise to help you succeed.</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="right-content">
                                    <h5><i className="fa fa-map-marker"></i> Visit Us</h5>
                                    <div>5 College St NW, <br />Norcross, GA 30071<br />United States</div>
                                    <div className="text-button"><a href="/">Need Directions? <i className="fa fa-arrow-right"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
   
                <div className="container">
                    <div className="row">
                   
                        <div className="col-md-8 col-sm-12">
                            <h5>Tactical analysis </h5>
                            <p>is built on the basis of appropriate preparation in order to win a game. A coach and team will set up a plan before a competition to ensure the best use of the individual players and of the team’s strengths and minimizing any weaknesses. For rugby this would be the decisions you make according to the positions you are on the pitch and how you play the game. </p>
                       <h5>Technical analysis</h5>
                       <p> the individual’s technique in the game, analysis here will be used to look at an individual’s skills and how they can improve and work on this. You would be looking at the passes, tackles, line outs won and scrums won.</p>
                     
                     <h5>Physiological analysis</h5>   
                     <p>would be the way in which your body operates. Rugby for example has a very high demand of physiological needs, requiring great strength, power and stability in order to play the game and complete basic skills and requirements. </p>
                     </div>
                     <div className="col-md-4 col-sm-12">
                            <img src={graph} className='img-fluid' alt="" />
                        </div>
                    </div>
                    </div>
                    <img className="img-fluid" src={sportmate} alt="" />
                    <div className="venue-tickets">
                        <div className="container-fluid">
                            <div className="row pb-5">
                                <div className="col-lg-12">
                                    <div className="section-heading">
                                        <h2>Tailored Training Programs</h2>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="venue-item">
                                        <div className="thumb">
                                            <img src={cup} className='img-fluid' alt="" />
                                        </div>
                                        <div className="down-content">
                                            <div className="left-content">
                                                <div className="main-white-button">
                                                    <a href="/service">Get Started Today</a>
                                                </div>
                                            </div>
                                            <div className="right-content">
                                                <h4>Events and Meetups</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur vinzi iscing elit, sed doers kontra.</p>
                                                {/* <ul>
                                                    <li><i className="fa fa-sitemap"></i>250</li>
                                                    <li><i className="fa fa-user"></i>500</li>
                                                </ul> */}
                                                <div className="price">
                                                    <span>join now<br />from <em>$15</em></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="venue-item">
                                        <div className="thumb">
                                            <img src={cyling} className='img-fluid' alt="" />
                                        </div>
                                        <div className="down-content">
                                            <div className="left-content">
                                                <div className="main-white-button">
                                                    <a href="/service">Get Started Today</a>
                                                </div>
                                            </div>
                                            <div className="right-content">
                                                <h4>Athlete Forums</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur vinzi iscing elit, sed doers kontra.</p>
                                                {/* <ul>
                                                    <li><i className="fa fa-sitemap"></i>450</li>
                                                    <li><i className="fa fa-user"></i>650</li>
                                                </ul> */}
                                                <div className="price">
                                                    <span>join now<br />from <em>$15</em></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="venue-item">
                                        <div className="thumb">
                                            <img src={runn} className="img-fluid" alt="" />
                                        </div>
                                        <div className="down-content">
                                            <div className="left-content">
                                                <div className="main-white-button">
                                                    <a href="/service">Get Started Today</a>
                                                </div>
                                            </div>
                                            <div className="right-content">
                                                <h4>Athletic performance</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur vinzi iscing elit, sed doers kontra.</p>
                                                {/* <ul>
                                                    <li><i className="fa fa-sitemap"></i>450</li>
                                                    <li><i className="fa fa-user"></i>750</li>
                                                </ul> */}
                                                <div className="price">
                                                    <span>join now<br />from <em>$15</em></span>
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
  )
}

export default Homeall
