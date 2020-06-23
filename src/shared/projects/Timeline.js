import React from "react";
import "./TimelineCSS.scss";
import $ from "jquery";
import Fade from "react-reveal";

function Timeline() {
  return (
    <div>
      <div className="container">
        <h2>My Timeline</h2>
        <div className="timeline">
          <div className="timeline-item">
            <Fade left>
              <div className="timeline-img"></div>

              <div className="timeline-content timeline-card">
                <div className="timeline-img-header">
                  <img src="/images/css.png" alt="intel" height="200"></img>
                  <h3>Journey Begins</h3>
                </div>

                <div className="date">1 AUG 2018</div>
                <p>
                  First time learning web development in school. (HTML, CSS, and
                  Javascript) Hooray!
                </p>
                <a className="more" href="javascript:void(0)">
                  More
                </a>
              </div>
            </Fade>
          </div>

          <div className="timeline-item">
            <Fade right>
              <div className="timeline-img"></div>

              <div className="timeline-content timeline-card">
                <div className="timeline-img-header">
                  <img src="/images/intel.png" alt="intel" height="200"></img>
                  <h3>Intel Internship</h3>
                </div>
                <div className="date">25 MAR 2019</div>
                <p>
                  Started my internship at Intel Internet Of Things Group under
                  Vision, Markets, & Channels team. Working in a team which
                  deals with both cutting-edge technology and global customers
                  is really cool.
                </p>
                <a className="more " href="javascript:void(0)">
                  More
                </a>
              </div>
            </Fade>
          </div>

          <div className="timeline-item">
            <Fade left>
              <div className="timeline-img"></div>

              <div className="timeline-content timeline-card">
                <div className="timeline-img-header">
                  <img
                    src="/images/IntelNCS2.jpg"
                    alt="intel"
                    height="200"
                  ></img>
                  <h3>Intel IOTG Hackathon</h3>
                </div>
                <div className="date">15 JUL 2019</div>

                <p>
                  Researching on Intel® Distribution of OpenVINO™ toolkit and
                  neural networks. Successfully built an AI home security system
                  using OpenVINO™ and deployed with Intel Neural Compute Stick
                  II.
                </p>
                <a className="more " href="javascript:void(0)">
                  More
                </a>
              </div>
            </Fade>
          </div>

          <div className="timeline-item">
            <Fade right>
              <div className="timeline-img"></div>

              <div className="timeline-content timeline-card">
                <div className="timeline-img-header">
                  <img src="/images/intel.png" alt="intel" height="200"></img>
                  <h3>First Time using Angular and Typescript</h3>
                </div>

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
            </Fade>
          </div>

          <div className="timeline-item">
            <Fade right>
              <div className="timeline-img"></div>

              <div className="timeline-content timeline-card ">
                <div className="timeline-img-header">
                  <img
                    src="/images/IntelNCS2.jpg"
                    alt="intel"
                    height="200"
                  ></img>
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
            </Fade>
          </div>

          <div className="timeline-item">
            <Fade left>
              <div className="timeline-img"></div>

              <div className="timeline-content timeline-card ">
                <div className="timeline-img-header">
                  <img
                    src="/images/IntelNCS2.jpg"
                    alt="intel"
                    height="200"
                  ></img>
                  <h3>React Native with Redux</h3>
                </div>
                <div className="date">01 APR 2020</div>
                <p>Learning React Native with Redux to manage states</p>
                <a className="more " href="javascript:void(0)">
                  More
                </a>
              </div>
            </Fade>
          </div>

          <div className="timeline-item">
            <Fade right>
              <div className="timeline-img timeline-card"></div>

              <div className="timeline-content ">
                <div className="timeline-img-header">
                  <img
                    src="/images/IntelNCS2.jpg"
                    alt="intel"
                    height="200"
                  ></img>
                  <h3>Full Stack Development Project</h3>
                </div>
                <div className="date">1 MAY 2016</div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dicta explicabo debitis omnis dolor iste fugit totam quasi
                  inventore!
                </p>
              </div>
            </Fade>
          </div>

          <div className="timeline-item">
            <Fade left>
              <div className="timeline-img timeline-card"></div>

              <div className="timeline-content timeline-card ">
                <div className="timeline-img-header">
                  <img
                    src="/images/IntelNCS2.jpg"
                    alt="intel"
                    height="200"
                  ></img>
                  <h3>Graduate from ASU</h3>
                </div>
                <div className="date">07 MAY 2016</div>
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
            </Fade>
          </div>

          <div className="timeline-item">
            <Fade right>
              <div className="timeline-img timeline-card"></div>

              <div className="timeline-content ">
                <div className="timeline-img-header">
                  <img
                    src="/images/IntelNCS2.jpg"
                    alt="intel"
                    height="200"
                  ></img>
                  <h3>Leanring more on both front end and back end services</h3>
                </div>
                <div className="date">1 SEP 2016</div>

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
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
