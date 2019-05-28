import React, { Component } from 'react';
import logo from './77386.jpg';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>


        <br></br>
        <div className="app-left">
          <img src={logo} className="App-logo" alt="logo" />
          <br></br>
          <h1 className="textName">Suchanya Roekplian</h1>
          <br></br>
          <div class="row">
            <div className="app-left">
              <h3>Email    </h3>
              <h3>Address   </h3>
              <h3>Date of Birth   </h3>
              <h3>Phone      </h3>
            </div>
            <div className="app-right">
              <h3> suchanya.ro@gmail.com</h3>
              <h3>LadKrabang, Bangkok  </h3>
              <h3> 10 / 10 / 39 </h3>
              <h3> 096-7104026 </h3>
            </div>
          </div>
          <br></br>
          <div className="flex-container" >
            <a href="https://github.com/IceSuchanyaR" target="blank">
              <i class="fa fa-github socialIcon1"></i>
            </a>
            <a href="https://medium.com/@suchanya.roekplain" target="blank">
              <i class="fa fa-medium socialIcon1"></i>
            </a>
            <a href="https://www.facebook.com/icesuchanya.roekplain" target="blank">
              <i class="fa fa-facebook-square socialIcon1"></i>
            </a>
          </div>
          <br></br>
          <h1 class="title">TECHNICAL SKILLS</h1>
          <br></br>
          <div class="row" >
            <h3 class="col-lg-6">JAVA</h3>
            <div class="col-lg-6" >
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star-o fa-lg socialIcon" ></i>
            </div>
          </div>
          <div class="row" >
            <br></br>
            <h3 class="col-lg-6">HTML / CSS</h3>
            <div class="col-lg-6" >
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star-o fa-lg socialIcon" ></i>
            </div>
          </div>
          <div class="row" >
            <br></br>
            <h3 class="col-lg-6">BOOTSTRAP</h3>
            <div class="col-lg-6" >
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star-o fa-lg socialIcon" ></i>
            </div>
          </div>
          <div class="row" >
            <br></br>
            <h3 class="col-lg-6">JAVASCRIPT </h3>
            <div class="col-lg-6" >
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star-o fa-lg socialIcon" ></i>
              <i class="fa fa-star-o fa-lg socialIcon" ></i>
              <i class="fa fa-star-o fa-lg socialIcon" ></i>
            </div>
          </div>

          <div class="row" >
            <h3 class="col-lg-6">ORACLE</h3>
            <div class="col-lg-6" >
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star-o fa-lg socialIcon" ></i>
              <i class="fa fa-star-o fa-lg socialIcon" ></i>
              <i class="fa fa-star-o fa-lg socialIcon" ></i>
            </div>
          </div>
          <div class="row" >
            <h3 class="col-lg-6">MySQL</h3>
            <div class="col-lg-6" >
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star-o fa-lg socialIcon" ></i>
              <i class="fa fa-star-o fa-lg socialIcon" ></i>
            </div>
          </div>
          <br></br>
          <h1 class="title">LANGUAGE SKILLS</h1>
          <br></br>
          <div class="row" >
            <h3 class="col-lg-6">THAI (Native)</h3>
            <div class="col-lg-6" >
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star fa-lg socialIcon" ></i>
            </div>
          </div>
          <div class="row" >
            <h3 class="col-lg-6">ENGLISH</h3>
            <div class="col-lg-6" >
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star fa-lg socialIcon" ></i>
              <i class="fa fa-star-o fa-lg socialIcon" ></i>
              <i class="fa fa-star-o fa-lg socialIcon" ></i>
              <i class="fa fa-star-o fa-lg socialIcon" ></i>
            </div>
          </div>
        </div>
        <div className="app-right">
          <h1 class="title">PROFILE</h1>
          <br></br>
          <h3 className="text">"I study in Faculty of science in Applied Mathematics , King Mongkut's Institute of Technology Ladkrabang. I like to solve problem and learn new things.
 I'm happy when I develop and maintain some products that can solve real problem. I'm a enthusiatic and ready to work with people in the organization and be part of the team."</h3>
          <br></br>
          <h1 class="title">EXPERIENCE</h1>
          <br></br>
          <h3>INTERNSHIP</h3>
          <br></br>
          <h4 className="text">Internship Programmer in General Electronic Commerce Services Co. ltd </h4>
          <br></br>
          <ul >
          <li><h4 className="text">Learned about Java Spring Boot</h4></li>
          <li ><h4 className="text">Learned about AngularJs</h4></li>
          <li ><h4 className="text">Learned about MySQL</h4></li>
          </ul>
          <br></br>
          <h3>TUTOR</h3>
          <br></br>
          <ul >
          <li><h4 className="text">Teaching mathematical logic for primary students</h4></li>
          <li><h4 className="text">Teaching mathematical for university entrance</h4></li>
          </ul>
          <br></br>
          <h3>PART-TIME JOB</h3>
          <br></br>
          <ul >
          <li><h4 className="text">I had an experience working as part-time job at seven-eleven</h4></li>
          </ul>
          <br></br>
          <h1 class="title">COURSES ATTENDED</h1>
          <br></br>
          <ul >
          <li><h4 className="text">ReactJS By DevIncube</h4></li>
         
          </ul>
         
          <br></br>
          <h1 class="title">EDUCATION</h1>
          <br></br>
          <h4 className="text">Bachelor's Degree in in Applied Mathematics , King Mongkut's Institute of Technology Ladkrabang.  GPA: 3.19 </h4>
          <br></br>
          <h1 class="title">INTERESTS</h1>
          <br></br>
          <div className="flex-container" >
            <div>
              <i class="w3-container fa fa-camera socialIcon1"></i>
              <br></br>
              <h3> Photography  </h3>
            </div>
            <div>
              <i class="fa fa-plane socialIcon1"></i>
              <br></br>
              <h3>Travel </h3>
            </div>
            <div>
              <i class="fa fa-headphones socialIcon1" ></i>
              <br></br>
              <h3> Music</h3>
            </div>
            <div>
              <i class="fa fa-paint-brush socialIcon1" ></i>
              <br></br>
              <h3> Paint Design </h3>
            </div>
          </div>
          <br></br>
          {/* <div className="flex-container" >
            <img src={pig1} className="pig" alt="logo" />
            <img src={pig2} className="pig" alt="logo" />
            <img src={pig3} className="pig" alt="logo" />
          </div> */}
        </div>
        <br></br>
      </div>

    );
  }
}

export default App;