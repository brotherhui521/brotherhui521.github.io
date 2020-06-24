import React, { Component } from "react";

const PictureCarousel = (props) => {
  return (
    <div className="col">
      <div className="row">
        <div class="carousel slide" id="mycarousel" data-ride="carousel">
          <div class="carousel-inner" role="list-box">
            <div class="carousel-item active ">
              <img
                className="img-fluid d-block w-100"
                src="/images/sax.png"
                alt="uthappizza"
              />
              <div class="carousel-caption d-none d-md-block align-items-center">
                <h2 class="mt-0">
                  Father's Day Special Song <span class="badge badge-danger">NEW</span>
                  <span class="badge badge-pill badge-secondarys">Available on YouTube</span>
                </h2>
                <p class="d-none d-sm-block">
                  Check out this new video in the Interest Page.
                </p>
              </div>
            </div>
            <div class="carousel-item ">
              <img
                className="img-fluid d-block w-100"
                src="/images/Picture9.jpg"
                alt="buffet"
              />
              <div class="carousel-caption d-none d-md-block align-items-center">
                <h2 class="mt-2">
                  love travelling
                  <span class="badge badge-danger"></span>
                </h2>
                <p class="d-none d-sm-block">
                  
                </p>
              </div>
            </div>

            <div class="carousel-item ">
              <img
                className="img-fluid d-block w-100"
                src="/images/Picture4.jpg"
                alt="buffet"
              />
              <div class="carousel-caption d-none d-md-block align-items-center">
                <h2 class="mt-2">
                  "A Duck in Water" 
                  <span class="badge badge-danger">NEW</span>
                </h2>
                <p class="d-none d-sm-block">
                  Check out new pictures in Photographs Page.
                </p>
              </div>
            </div>

            <ol class="carousel-indicators">
              <li
                data-target="#mycarousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#mycarousel" data-slide-to="1"></li>
              <li data-target="#mycarousel" data-slide-to="2"></li>
            </ol>
          </div>

          <a
            role="button"
            class="carousel-control-prev"
            data-slide="prev"
            href="#mycarousel"
          >
            <span class="carousel-control-prev-icon "></span>
          </a>
          <a
            role="button"
            class="carousel-control-next"
            data-slide="next"
            href="#mycarousel"
          >
            <span class="carousel-control-next-icon "></span>
          </a>
        </div>
        <button
        class="btn-sm btn btn-danger "
        id="carousel-btn"
        onClick={props.handleButton}
        style={{ margin: "auto" }}
      >
        <span class="fa fa-pause"></span>
      </button>
      </div>
    </div>
  );
};

export default PictureCarousel;
