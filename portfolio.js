// Portfolio.js
import aits from './aits.jpg';


import React from 'react';
import './style.css'; // Assuming style.css is in the same directory

const Portfolio = () => {
  return (
    <div className="bi1.jpg">
      <nav>
        <ul>
          <li><a href="#home" className="logo">Rupa Royal.</a></li>
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutme">About me</a></li>
          <li><a href="#Education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div id="home" className="main">
        <div className="text">
          <h2>HEY!</h2>
          <h1 style={{ margin: '5px' }}>I am <span className="Special">Rupa.</span></h1>
          <pre >Someone call me --<span className="Special"><b> Royal
            </b></span></pre>
          <p><b>I'm currently a student at Annmacharaya Institution.</b></p>
          <br /><a href="resume.pdf" download>Download Resume</a>
        </div>
        <div className="textcol">
          <img src="profilepic.jpg" alt="profilepic"  class="square-image"/>
        </div>
      </div>
      <section id="aboutme" className="aboutme">
        <h1>About Me</h1>
        <p style={{ textAlign: 'justify' }}>I'm Rupa pursuing Bachelor of Technology in <span className="special">Annmacharaya Institution of Technology and Sciences</span> in the stream of <span className="Special">&nbsp;Computer Science and Engineering.</span> I am passionate about knowing new things in the world and Coding. Self-motivated, highly passionate, and hardworking fresh mind looking for an opportunity to work in a challenging organization to utilize and enhance my skills and knowledge to work for the growth of the organization.</p>
        <ul>
          <li>From - Vempalli, India</li>
          <li>Lives in - Vempalli, India</li>
          <li>Gender - Female</li>
        </ul>
      </section>
      <section id="Education" className="edu">
        <h1>Education</h1>
        <div className="time">
          <div className="con lef">
            <img src="aj.jpg" alt="School Education" />
            <div className="text-box">
              <h2><span className="Special">School Education</span></h2>
              <small>2018-2019</small>
              <p>I Completed my School Education at Usha Kiran High School,Vempalli,Kadapa</p>
              <p>I got 9.8 CGPA in my School Education.</p>
              <span className="lef-arr"></span>
            </div>
          </div>
          <div className="con rig">
            <img src="aj.jpg" alt="Intermediate Education" />
            <div className="text-box">
              <h2><span className="special">Intermediate MPC (Maths, Physics, Chemistry)</span></h2>
              <small>2019-2021</small>
              <p>I Completed my Intermediate Education at Akshara Junior College, Vempalli.</p>
              <p>I got 95.36 CGPA in my Intermediate Education.</p>
              <span className="rig-arr"></span>
            </div>
          </div>
          <div className="con lef">
            <img src="aits.jpg" alt="Bachelor's Education" />
            <div className="text-box">
              <h2><span className="special">B.Tech (Computer Science and Engineering)</span></h2>
              <small>2021-2025</small>
              <p>I am pursuing my Bachelor's Education at ANNMACHARAYA INSTITUTION OF TECHNOLOGY AND SCIENCES, RAJAMPETA.</p>
              <p>I got 8.95 CGPA in my Bachelor's Education.</p>
              <span className="lef-arr"></span>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="skills">
        <h1>My Skills</h1>
        <div className="skillcon">
    
            <div class="skillcon">
                <div class="skillbox">
                    <div class="skilltit">
                        <div class="skillimg">
                            <img src="c.jpg" class="skill-icon"/>
                        </div>
                        <h3>C Language</h3>
                        <p>I possess a strong foundation. Explore my C programming projects on GitHub.</p>
                    </div>

                </div>
                <div class="skillbox">
                    <div class="skilltit">
                        <div class="skillimg">
                            <img src="python.jpg" class="skill-icon"/>
                        </div>
                        <h3>Python programming</h3>
                        <p> Notable projects , web applications, and automation scripts. Explore my Python projects on GitHub</p>
                    </div>
                </div>
                <div class="skillbox">
                    <div class="skilltit">
                        <div class="skillimg">
                            <img src="java.png" class="skill-icon"/>
                        </div>
                        <h3>Java programming</h3>
                        <p>Android app development, data structures, and Java-based web applications. Explore my 
                        Java projects on GitHub</p>
                    </div>
                </div>
                <div class="skillbox">
                    <div class="skilltit">
                        <div class="skillimg">
                            <img src="c++.png" class="skill-icon"/>
                        </div>
                        <h3>C++ Language</h3>
                        <p>data manipulation, and system-level programming. Explore my C++ projects on GitHub.</p>
                    </div>

                </div>
                <div class="skillbox">
                    <div class="skilltit">
                        <div class="skillimg">
                            <img src="html.png" class="skill-icon"/>
                        </div>
                        <h3>HTML & CSS</h3>
                        <p>I am skilled in web development. I've created responsive.
                        Check out my web development projects on GitHub.</p>
                    </div>
 
                </div>
                <div class="skillbox">
                    <div class="skilltit">
                        <div class="skillimg">
                            <img src="javascrpit.jpg" class="skill-icon"/>
                        </div>
                        <h3>JavaScript Language</h3>
                        <p>I am skilled in JavaScript. I've created responsive, user-friendly web interfaces and interactive features.</p>
                    </div>

                </div>
            </div>
        
        </div>
      </section>
      <footer id="contact">
        <h1><span className="special">Get In Touch</span></h1>
        <address>
          <div className="add">
            <div className="contact">
              <h2><span className="special">Search to find me</span></h2><hr />
              <p>Address: 13/1871,<br /> Vempalli,<br /> Vempalli(M),<br /> Kadapa(D),<br /> Andhra Pradesh state.</p>
            </div>
            <div className="contact">
              <h2><span className="special">Contact me</span></h2><hr />
              <p><b>Email:</b> <a href="mailto:rupa7@gmail.com">rupa7@gmail.com</a></p>
              <p><b>Phone:</b> <a href="tel:+916309717159">6309717159</a></p>
            </div>
          </div>
          <p><b>&copy; My portfolio 2024</b></p>
        </address>
      </footer>
    </div>
  );
}

export default Portfolio;