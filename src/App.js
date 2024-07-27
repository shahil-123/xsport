import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Homeall from "./Components/Homeall";
import Login from "./Components/Login";

import Footer from './Components/Footer';
import './App.css';
import "./Css/style.css";
import "./Css/argon-dashboard.css?v=2.0.4";
import About from "./Components/About";
import Service from "./Components/Service";
import Fitness_Trainer from "./Components/Fitness_Trainer";
import Health from "./Components/Health";


function App() {
  return (
    <>
    <Router>
      <div className="App">
      <Header />

        <main>
          <Routes>
            <Route path="/" element={< Homeall />} />
            <Route path="/profile" element={<Profile/>} />  
            {/* <Route path="/header" element={<Header/>} />   */}
            <Route path="/login" element={<Login />} />

            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
           <Route path="/service" element={<Service />} />
             <Route path="/trainer" element={<Fitness_Trainer />} />
           <Route path="/health" element={<Health />} />
             {/*   <Route path="/partner" element={<Partner />}/>
     
            <Route Path="/partner" element={<Mymodal/>}/>
            <Route path="/learning" element={<Learning/>} />
            <Route path="/employee_registration" element={<EmployeeRegister/>} />
            <Route Path="/home" element={<Faqs/>}/>
            <Route path="/faqs" element={<Home />}/> */}
        </Routes>
        </main>
       
     <Footer />
      </div>
    </Router>


  </>
    // <div className="App">
    //  <Header />
    //  <Home />
    //  <Profile />
    // </div>
  );
}

export default App;
