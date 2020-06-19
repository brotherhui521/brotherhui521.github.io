import React from "react";
import "./TimelineCSS.scss";
import $ from "jquery";
import Fade from "react-reveal/Fade";


function Timeline() {
  return (
    <div>
      
      <h2>My Timeline</h2>
      <div className="timeline">
        <div className="container">
        
          <Fade left>
            <div className="timeline-item">
              <div className="timeline-img"></div>

              <div className="timeline-content ">
                <h3>Journey Begins</h3>
                <div className="date">1 AUG 2018</div>
                <p>
                  My first time learning about web development in school. I
                  start from HTML, CSS, and Javascript, the fundamentals, and
                  try to integrate them. It finally ran on my localserver.
                  Hooray!
                </p>
                <a className="more" href="javascript:void(0)">
                  More
                </a>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="timeline-item">
              <div className="timeline-img"></div>

              <div className="timeline-content timeline-card js--fadeInRight">
                <div className="timeline-img-header">
                  <h3>Intel Internship</h3>
                </div>
                <div className="date">25 MAR 2019</div>
                <p>
                  Intel Internet Of Things Group hired me as an intern under
                  Vision, Markets, & Channels team. I was really honored to be
                  able to work with all the professionals in different fields,
                  and learn experiences which benefit both my career and life.
                  Working in a team which deals with both cutting-edge
                  technology and business customers all over the globe is really
                  fantastic and I enjoyed learning every day.
                </p>
                <a className="more " href="javascript:void(0)">
                  More
                </a>
              </div>
            </div>
          </Fade>

          <Fade left>
            <div className="timeline-item">
              <div className="timeline-img"></div>

              <div className="timeline-content ">
                <div className="date">15 JUL 2019</div>
                <h3>Intel IOTG Hackathon</h3>
                <p>
                  Spending a lot of time after work on the Hackathon is
                  challenging. After a month of researching on Intel®
                  Distribution of OpenVINO™ toolkit and neural networks. I
                  successfully built an AI security system using OpenVINO™ and
                  deployed on Intel Neural Compute Stick II.
                </p>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="timeline-item">
              <div className="timeline-img"></div>

              <div className="timeline-content js--fadeInRight">
                <h3>First Time using Angular and Typescript</h3>
                <div className="date">1 JAN 2020</div>
                <p>
                  In my ASU Capstone Project, we used Angular as front end
                  framework, and Node.js for backend development. We created an
                  app for the client company to create advertisement sessions,
                  surveys, and online chats for their employees to improve work
                  efficiency from different areas.
                </p>
                <a className="more " href="javascript:void(0)">
                  More
                </a>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="timeline-item">
              <div className="timeline-img"></div>

              <div className="timeline-content timeline-card ">
                <div className="timeline-img-header">
                  <h3>Learning React</h3>
                </div>
                <div className="date">1 FEB 2020</div>
                <p>
                  After experimenting with Angular, I decided to learn React
                  systematically since React was more popular. Through online
                  courses, I undestand the structure and components of React,
                  and successfully set up Redux and configured store for the web
                  application.
                </p>
                <a className="more " href="javascript:void(0)">
                  More
                </a>
              </div>
            </div>
          </Fade>

          <Fade left>
            <div className="timeline-item">
              <div className="timeline-img"></div>

              <div className="timeline-content timeline-card js--fadeInRight">
                <div className="timeline-img-header">
                  <h3>Card Title</h3>
                </div>
                <div className="date">30 JULY 2016</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maxime ipsa ratione omnis alias cupiditate saepe atque totam
                  aperiam sed nulla voluptatem recusandae dolor, nostrum
                  excepturi amet in dolores. Alias, ullam.
                </p>
                <a className="more " href="javascript:void(0)">
                  More
                </a>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="timeline-item">
              <div className="timeline-img"></div>

              <div className="timeline-content ">
                <div className="date">5 AUG 2016</div>
                <h3>Quote</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dicta explicabo debitis omnis dolor iste fugit totam quasi
                  inventore!
                </p>
              </div>
            </div>
          </Fade>

          <Fade left>
            <div className="timeline-item">
              <div className="timeline-img"></div>

              <div className="timeline-content timeline-card js--fadeInRight">
                <div className="timeline-img-header">
                  <h3>Card Title</h3>
                </div>
                <div className="date">19 AUG 2016</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maxime ipsa ratione omnis alias cupiditate saepe atque totam
                  aperiam sed nulla voluptatem recusandae dolor, nostrum
                  excepturi amet in dolores. Alias, ullam.
                </p>
                <a className="more " href="javascript:void(0)">
                  More
                </a>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="timeline-item">
              <div className="timeline-img"></div>

              <div className="timeline-content ">
                <div className="date">1 SEP 2016</div>
                <h3>Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maxime ipsa ratione omnis alias cupiditate saepe atque totam
                  aperiam sed nulla voluptatem recusandae dolor, nostrum
                  excepturi amet in dolores. Alias, ullam.
                </p>
                <a className="more " href="javascript:void(0)">
                  More
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
