

import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './port.css'; 

const Portfolio = () => {
    useEffect(() => {
        var typed = new Typed(".changing", {
            strings: ["Coder", "Software Developer", "FrontEnd Developer"],
            typeSpeed: 140,
            backSpeed: 140,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <section id="border">
                <section className="first">
                    <div className="navbar">
                        <h1> MY Portfolio</h1>
                        <ul>
                            <li><a href="#h">Home</a></li>
                            <li><a href="#a">About</a></li>
                            <li><a href="#q">Education Details</a></li>
                            <li><a href="#s">Skills</a></li>
                            <i id="new" className="fas fa-bars"></i>
                        </ul>
                    </div>
                    <section className="home" id="h">
                        <div className="content">
                            <h2>Hey!</h2>
                            <h1>Hemalatha Royal</h1>
                            <h2>I am a <span className="changing">FrontEnd Developer</span></h2>
                            <p>I am a Computer Science student with a passion for technology and problem-solving. My journey began with a
                                fascination for computers and programming languages like Java, C++, HTML, CSS and JavaScript.</p>
 
                        </div>
                        <div className="image" id="newdiv">
                            <img id="newimg" src="profilepic.jpg" alt="profilepic" />
                        </div>
                    </section>
                </section>
                <section className="second" id="a">
                    <div className="image2">
                        <img src="profilepic.jpg" alt="Hemalatha" />
                    </div>
                    <div className="content2">
                        <h1 id="A">About me</h1>
                        <p>I am a dedicated and passionate web developer with a strong background in HTML, CSS, and JavaScript.
                            commitment to creating and user-friendly websites.
                        </p>
                        <p>Experienced in front-end frameworks like React, I also possess efficient knowledge in back-end development using Node.js and Express.
                        </p>
                        <p>I am motivated to continuously learn and stay up-to-date with the latest trends and technologies.</p>
                    </div>
                </section>
                <section className="Qua" id="q">
                    <h1>Education Details</h1>
                    <div className="qualification">
                        <div>
                            <h1 className="heading">School</h1>
                            <h2 className="clgname">Ushakiran High school</h2>
                            <h4>Vempalli</h4>
                            <h4>Kadapa</h4>
                        </div>
                        <div>
                            <h1 className="heading">Intermediate</h1>
                            <h2 className="clgname">Akshara junior College</h2>
                            <h4>(Maths,Physics,Chemistry)</h4>
                            <h4>Vempalli</h4>
                        </div>
                        <div>
                            <h1 className="heading">B.Tech</h1>
                            <h2 id="clg" className="clgname">Annamacharya Institute of Technology and Sciences</h2>
                            <h4>Computer Science & Engineering</h4>
                            <h4>Rajampeta</h4>
                        </div>
                    </div>
                </section>
             
                            <section className="forth C" id="s">
                    <h1 id="head">Skills</h1>
                    <section className="scroll-container ">
                        <section className="third">
                            <div>
                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://tse4.mm.bing.net/th?id=OIP.WeX8Uvgs4gxgeVRGvJR7aQHaDt&pid=Api&P=0&h=180.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://tse2.mm.bing.net/th?id=OIP.Cqt6j3TVGiYzPIwcrii1_gHaDt&pid=Api&P=0&h=180.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://tse4.mm.bing.net/th?id=OIP.S_9pgiKacbi3FxPKxDmusgHaFy&pid=Api&P=0&h=180.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </section>
                    </section>
                </section>
                        </section>
                    
            <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                13/1871,Vempalli
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                raguruhemalatha277@email.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">6309717159</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
        </div>
    );
};

export default Portfolio;