// import React from 'react'
import React, { useState } from 'react'
// import { Chart2 } from 'react-charts'
// import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from 'react-apexcharts';
import ProgressBar from 'react-bootstrap/ProgressBar';

import "../Css/style.css";
import "../Css/argon-dashboard.css?v=2.0.4";



function Home() {
  const percentage = 66;
  // const value = 0.66;
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ['jan', 'feb', 'mar', 'apr', 'may','jun', 'jul','aug']
      }
    },
    series: [
      {
        name: "Fitness",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: "Tranning",
        data: [10, 50, 65, 40, 39, 30, 80, 78]
      }, {
        name: "Health",
        data: [15, 45, 55, 49, 42, 38, 55, 72]
      }
    ]

  }
    //   options: {},
    //   series: [44, 55, 41, 17, 15],
    //   labels: ['A', 'B', 'C', 'D', 'E']
    // }
    // )
    // const data = React.useMemo(
    //   () => [
    //     {
    //       label: 'Series 1',
    //       data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
    //     },
    //     {
    //       label: 'Series 2',
    //       data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
    //     }
    //   ],
    //   []
    // )
    // const axes = React.useMemo(
    //   () => [
    //     { primary: true, type: 'linear', position: 'bottom' },
    //     { type: 'linear', position: 'left' }
    //   ],
    //   []
  )
  return (
    <div>
      <div className="g-sidenav-show   bg-gray-100">
        <div className="min-height-300 bg-primary position-absolute w-100"></div>
        <div
          className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 "
          id="sidenav-main">
          <div className="sidenav-header">
            <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
              aria-hidden="true" id="iconSidenav"></i>
            <a className="navbar-brand m-0" href="void(0)"
              target="_blank">
              {/* <img src="./assets/img/logo-ct-dark.png" className="navbar-brand-img h-100" alt="main_logo" /> */}
              <span className="ms-1 font-weight-bold">Performance metrics</span>
            </a>
          </div>
          <hr className="horizontal dark mt-0" />
          <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  <div
                    className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>
                  </div>
                  <span className="nav-link-text ms-1">fitness levels</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">
                  <div
                    className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10"></i>
                  </div>
                  <span className="nav-link-text ms-1">injury history</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">
                  <div
                    className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="ni ni-credit-card text-success text-sm opacity-10"></i>
                  </div>
                  <span className="nav-link-text ms-1">Training plans </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">
                  <div
                    className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="ni ni-app text-info text-sm opacity-10"></i>

                  </div>
                  <span className="nav-link-text ms-1">Meal plans</span>
                </a>
              </li>

              <li className="nav-item mt-3">
                <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Account pages</h6>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">
                  <div
                    className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="ni ni-single-02 text-dark text-sm opacity-10"></i>
                  </div>
                  <span className="nav-link-text ms-1">Profile</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">
                  <div
                    className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="ni ni-single-copy-04 text-warning text-sm opacity-10"></i>
                  </div>
                  <span className="nav-link-text ms-1">Sign In</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">
                  <div
                    className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="ni ni-collection text-info text-sm opacity-10"></i>
                  </div>
                  <div className="nav-link-text ms-1">Sign Up</div>
                </a>
              </li>
            </ul>
          </div>
          <div className="sidenav-footer mx-3 ">
            <div className="card card-plain shadow-none" id="sidenavCard">
              <img className="w-50 mx-auto" src="./assets/img/illustrations/icon-documentation.svg" alt="" />
              <div className="card-body text-center p-3 w-100 pt-0">
                <div className="docs-info">
                  <h6 className="mb-0">Need help?</h6>
                  <p className="text-xs font-weight-bold mb-0">Please check our docs</p>
                </div>
              </div>
            </div>
            <a href="/" target="_blank" className="btn btn-dark btn-sm w-100 mb-3">Documentation</a>
            <a className="btn btn-primary btn-sm mb-0 w-100" href="/" type="button">Upgrade to pro</a>
          </div>
        </div>
        <div className="main-content position-relative border-radius-lg ">

          <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur"
            data-scroll="false">
            <div className="container-fluid py-1 px-3">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                  <li className="breadcrumb-item text-sm"><a className="opacity-5 text-white" href="void(0)">Pages</a></li>
                  <li className="breadcrumb-item text-sm text-white active" aria-current="page">Dashboard</li>
                </ol>
                <h6 className="font-weight-bolder text-white mb-0">Dashboard</h6>
              </nav>
              <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                  <div className="input-group">
                    <span className="input-group-text text-body"><i className="fas fa-search" aria-hidden="true"></i></span>
                    <input type="text" className="form-control" placeholder="Type here..." />
                  </div>
                </div>
                <ul className="navbar-nav  justify-content-end">
                  <li className="nav-item d-flex align-items-center">
                    <a href="void(0)" className="nav-link text-white font-weight-bold px-0">
                      <i className="fa fa-user me-sm-1"></i>
                      <span className="d-sm-inline d-none">Sign In</span>
                    </a>
                  </li>
                  <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                    <a href="void(0)" className="nav-link text-white p-0" id="iconNavbarSidenav">
                      <div className="sidenav-toggler-inner">
                        <i className="sidenav-toggler-line bg-white"></i>
                        <i className="sidenav-toggler-line bg-white"></i>
                        <i className="sidenav-toggler-line bg-white"></i>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item px-3 d-flex align-items-center">
                    <a href="void(0)" className="nav-link text-white p-0">
                      <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                    </a>
                  </li>
                  <li className="nav-item dropdown pe-2 d-flex align-items-center">
                    <a href="void(0)" className="nav-link text-white p-0" id="dropdownMenuButton" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <i className="fa fa-bell cursor-pointer"></i>
                    </a>
                    <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                      <li className="mb-2">
                        <a className="dropdown-item border-radius-md" href="void(0)">
                          <div className="d-flex py-1">
                            <div className="my-auto">
                              {/* <img src="./assets/img/team-2.jpg" className="avatar avatar-sm  me-3 " /> */}
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="text-sm font-weight-normal mb-1">
                                <span className="font-weight-bold">New message</span> from Laur
                              </h6>
                              <p className="text-xs text-secondary mb-0">
                                <i className="fa fa-clock me-1"></i>
                                13 minutes ago
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="mb-2">
                        <a className="dropdown-item border-radius-md" href="void(0)">
                          <div className="d-flex py-1">
                            <div className="my-auto">
                              {/* <img src="./assets/img/small-logos/logo-spotify.svg"
                                className="avatar avatar-sm bg-gradient-dark  me-3 " /> */}
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="text-sm font-weight-normal mb-1">
                                <span className="font-weight-bold">New album</span> by Travis Scott
                              </h6>
                              <p className="text-xs text-secondary mb-0">
                                <i className="fa fa-clock me-1"></i>
                                1 day
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item border-radius-md" href="void(0)">
                          <div className="d-flex py-1">
                            <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">

                              <title>credit-card</title>
                              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                  <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(453.000000, 454.000000)">
                                      <path className="color-background"
                                        d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                        opacity="0.593633743"></path>
                                      <path className="color-background"
                                        d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z">
                                      </path>
                                    </g>
                                  </g>
                                </g>
                              </g>

                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="text-sm font-weight-normal mb-1">
                                Payment successfully completed
                              </h6>
                              <p className="text-xs text-secondary mb-0">
                                <i className="fa fa-clock me-1"></i>
                                2 days
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="container-fluid py-4 offset-md-3 w-75">
        <div className="row">


          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-uppercase font-weight-bold">Fitness lavel</p>
                      <h5 className="font-weight-bolder">
                        87%
                      </h5>
                      <p className="mb-0 text-md">
                        <span className="text-success text-sm font-weight-bolder">+55%</span>
                     
                      </p>
                      <p className="mb-0 text-md text-info"> <b>last Month</b></p>
                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                      <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-uppercase font-weight-bold">stamina</p>
                      <h5 className="font-weight-bolder">
                       89%
                      </h5>
                      <p className="mb-0">
                        <span className="text-success text-sm font-weight-bolder">+3%</span>
                      </p>
                      <p className="mb-0 text-md text-info"> <b>last Month</b></p>
                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                      <i className="ni ni-world text-lg opacity-10" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-uppercase font-weight-bold">agility</p>
                      <h5 className="font-weight-bolder">
                      82%
                      </h5>
                      <p className="mb-0">
                        <span className="text-danger text-sm font-weight-bolder">-2%</span>
                        <p className="mb-0 text-md text-info"> <b>last Month</b></p>
                      </p>
                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                      <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-uppercase font-weight-bold">Challenges</p>
                      <h5 className="font-weight-bolder">
                        80%
                      </h5>
                      <p className="mb-0">
                        <span className="text-success text-sm font-weight-bolder">+5%</span>
                      </p>
                      <p className="mb-0 text-md text-info"> <b>last Month</b></p>
                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                      <i className="ni ni-atom text-lg opacity-10" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-7 mb-lg-0 mb-4">
            <div className="card z-index-2 h-100">
              <div className="card-header pb-0 pt-3 bg-transparent">
                <h6 className="text-capitalize">fitness routines </h6>
                <p className="text-sm mb-0">
                  <i className="fa fa-arrow-up text-success"></i>
                  <span className="font-weight-bold">4% more </span> in may 2024
                </p>
              </div>
              <div className="card-body p-3">
                <div className="chart">
                  {/* <canvas id="chart-line" className="chart-canvas" height="300"></canvas>
                  <canvas id="myChart" ></canvas> */}
                  {/* <div
                    style={{
                      width: '400px',
                      height: '300px'
                    }}
                  >
                    <Chart2 data={data} axes={axes} />
                  </div> */}
                  <Chart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    width="500"
                  />

                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-12 pt-5 mt-5  ">

            {/* <div className="donut">
              <Chart options={state.options} series={state.series} type="donut" width="380" />
            </div> */}
            {/* <div className="card card-carousel overflow-hidden h-100 p-0">
              <div id="carouselExampleCaptions" className="carousel slide h-100" data-bs-ride="carousel">
                <div className="carousel-inner border-radius-lg h-100">
                  <div className="carousel-item h-100 active carousal-img-backgroun" >
                    <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                      <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                        <i className="ni ni-camera-compact text-dark opacity-10"></i>
                      </div>
                      <h5 className="text-white mb-1">EEC Report of Each Student</h5>
                      <p>I really wanted to do in life that I wasn’t able to get good at.</p>
                    </div>
                  </div>
                  <div className="carousel-item h-100 carousal-backgrond-img" >
                    <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                      <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                        <i className="ni ni-bulb-61 text-dark opacity-10"></i>
                      </div>
                      <h5 className="text-white mb-1">Faster way to Growth With EEC</h5>
                      <p>That’s my skill. I’m not really specifically talented at anything except for the ability to
                        learn.</p>
                    </div>
                  </div>
                  <div className="carousel-item h-100" >
                    <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                      <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                        <i className="ni ni-trophy text-dark opacity-10"></i>
                      </div>
                      <h5 className="text-white mb-1">Share with us your tips!</h5>
                      <p>Don’t be afraid to be wrong because you can’t learn anything from a compliment.</p>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div> */}
            <Chart
              options={state.options}
              series={state.series}
              type="area"
              // types 1)
              // line
              // Radar
              // area
              // histogram
              // scatter
              // heatmap
              width="400"
            />
          </div>
        </div>
        {/* <div className="row">
        <div className="col-md-3 col-sm-12 my-2">
          select class
          <select className="form-control bg-gradient-success">
            <option>class 12ve</option>
            <option>class 11th</option>
            <option>class 10th</option>
            <option>class 9th</option>
            <option>class 8th</option>
            <option>class 7th</option>
            <option>class 6th</option>
            <option>class 5th</option>
            <option>class 4th</option>
          </select>
        </div>
        <div className="col-md-3 col-sm-12 my-2">
          select group
          <select className="form-control bg-gradient-warning">
          <option>Group A</option>
          <option>Group B</option>
          <option>Group C</option>
          <option>Group D</option>
        </select>
        </div>
        <div className="col-md-3 col-sm-12 my-2">
          select section
          <select className="form-control bg-gradient-info">
          <option>Sec A</option>
          <option>Sec A</option>
          <option>Sec A</option>
          <option>Sec A</option>
        </select>
        </div>
        <div className="col-md-3 col-sm-12 my-2">
          select month
          <select className="form-control bg-gradient-secondary">
          <option>January</option>
          <option>Februarry</option>
          <option>March</option>
          <option>April</option>
        </select>
        </div>

      </div> */}
        <div className="row my-4">
          <div className="col-lg-7 mb-lg-0 mb-4">
            <div className="card ">
              <div className="card-header pb-0 p-3">
                <div className="d-flex justify-content-between">
                  <h6 className="mb-2">Fitness and Performance Tracking</h6>

                </div>

              </div>
              <div className="table-responsive">
               <p className="text-md font-weight-bold my-3">  &nbsp;&nbsp;Injury Recoverd</p>
                <ProgressBar striped variant="info" now={80} />
                <p className="text-md font-weight-bold my-3">&nbsp;&nbsp;Tranning Followed</p>
                <ProgressBar striped variant="warning" now={50} />
                <p className="text-md font-weight-bold my-3">&nbsp;&nbsp;Meels Followed</p>
                <ProgressBar striped variant="Meals" now={30} />
                <p className="text-md font-weight-bold my-3">&nbsp;&nbsp;Tranning Followed</p>
                <ProgressBar striped variant="Warning" now={50} />
                <p className="text-md font-weight-bold my-3">&nbsp;&nbsp;sleeping Routine</p>
                <ProgressBar striped variant="success" now={90} />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="card">
              <div className="card-header pb-0 p-3">
                <h6 className="mb-0">Performence</h6>
              </div>
              <div className="card-body p-3 text-center m-auto">

                {/* <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={{
                    // Customize the root svg element
                    root: {},
                    // Customize the path, i.e. the "completed progress"
                    path: {
                      // Path color
                      stroke: `rgba(62, 152, 199, ${percentage / 100})`,
                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: 'butt',
                      // Customize transition animation
                      transition: 'stroke-dashoffset 0.5s ease 0s',
                      // Rotate the path
                      transform: 'rotate(0.25turn)',
                      transformOrigin: 'center center',
                    },
                    // Customize the circle behind the path, i.e. the "total progress"
                    trail: {
                      // Trail color
                      stroke: '#d6d6d6',
                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: 'butt',
                      // Rotate the trail
                      transform: 'rotate(0.25turn)',
                      transformOrigin: 'center center',
                    },
                    // Customize the text
                    text: {
                      // Text color
                      fill: '#f88',
                      // Text size
                      fontSize: '16px',
                    },
                    // Customize background - only used when the `background` prop is true
                    background: {
                      fill: '#3e98c7',
                    },
                  }}
                /> */}
                
                <div style={{ width: 200, height: 200 }}>
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                </div>
                {/* <ul className="list-group">
                  <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                        <i className="ni ni-mobile-button text-white opacity-10"></i>
                      </div>
                      <div className="d-flex flex-column">
                        <h6 className="mb-1 text-dark text-sm">Study Times</h6>
                        <span className="text-xs">250 Hours, <span className="font-weight-bold">46+ Last month</span></span>
                      </div>
                    </div>
                    <div className="d-flex">
                      <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i
                        className="ni ni-bold-right" aria-hidden="true"></i></button>
                    </div>
                  </li>
                  <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                        <i className="ni ni-tag text-white opacity-10"></i>
                      </div>
                      <div className="d-flex flex-column">
                        <h6 className="mb-1 text-dark text-sm">Apear on Tests</h6>
                        <span className="text-xs">12 Tests, <span className="font-weight-bold">3+ Last month</span></span>
                      </div>
                    </div>
                    <div className="d-flex">
                      <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i
                        className="ni ni-bold-right" aria-hidden="true"></i></button>
                    </div>
                  </li>
                  <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                        <i className="ni ni-box-2 text-white opacity-10"></i>
                      </div>
                      <div className="d-flex flex-column">
                        <h6 className="mb-1 text-dark text-sm">Home Works</h6>
                        <span className="text-xs">84% done <span className="font-weight-bold">16% Incompleted</span></span>
                      </div>
                    </div>
                    <div className="d-flex">
                      <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i
                        className="ni ni-bold-right" aria-hidden="true"></i></button>
                    </div>
                  </li>
                  <li className="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                        <i className="ni ni-satisfied text-white opacity-10"></i>
                      </div>
                      <div className="d-flex flex-column">
                        <h6 className="mb-1 text-dark text-sm">Attend Live Classes</h6>
                        <span className="text-xs font-weight-bold">90 %</span>
                      </div>
                    </div>
                    <div className="d-flex">
                      <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i
                        className="ni ni-bold-right" aria-hidden="true"></i></button>
                    </div>
                  </li>
                  <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                        <i className="ni  ni-calendar-grid-58 text-white opacity-10"></i>
                      </div>
                      <div className="d-flex flex-column">
                        <h6 className="mb-1 text-dark text-sm">Performence By Date </h6>
                        <span className="text-xs"><span className="font-weight-bold">
                          <input type="date" /></span></span>
                      </div>
                    </div>
                    <div className="d-flex">
                      <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i
                        className="ni ni-bold-right" aria-hidden="true"></i></button>
                    </div>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}

export default Home
