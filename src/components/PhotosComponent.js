import React, { Component, useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function Photos() {
  const [currentImage, setCurrentImage] = useState(0);

  const openLink = (event, { photo, index }) => {
    setCurrentImage(index);

    console.log(photo.src.split("Picture")[1].split(".")[0]);
    window.location = `/photos/${photo.src.split("Picture")[1].split(".")[0]}`;
  };

  const photos = [
    {
      src: "/images/Picture1.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "/images/Picture2.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "/images/Picture3.jpg",
      width: 1,
      height: 1,
    },
    { src: "/images/Picture4.jpg", width: 4, height: 3 },
    { src: "/images/Picture5.jpg", width: 4, height: 3 },
    { src: "/images/Picture6.jpg", width: 3, height: 4 },
    { src: "/images/Picture7.jpg", width: 3, height: 4 },
    { src: "/images/Picture8.jpg", width: 3, height: 4 },
    { src: "/images/Picture9.jpg", width: 4, height: 3 },
    { src: "/images/Picture10.jpg", width: 4, height: 3 },
    { src: "/images/Picture11.jpg", width: 3, height: 4 },
    { src: "/images/Picture12.jpg", width: 4, height: 3 },
    { src: "/images/Picture13.jpg", width: 3, height: 4 },
    { src: "/images/Picture14.jpg", width: 3, height: 4 },
    { src: "/images/Picture15.jpg", width: 3, height: 4 },
    { src: "/images/Picture16.jpg", width: 4, height: 3 },
    { src: "/images/Picture17.jpg", width: 3, height: 4 },
    { src: "/images/Picture18.jpg", width: 4, height: 3 },
    { src: "/images/Picture20.jpg", width: 3, height: 4 },
    { src: "/images/Picture19.jpg", width: 3, height: 4 },
  ];
  return (
    <div >
      <div className="container">
        <div className="row">
          <BreadcrumbItem style={{ marginLeft: 14 }}>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Photos</BreadcrumbItem>
        </div>
        <Gallery photos={photos} onClick={openLink} />
      </div>
    </div>
  );
}

export default Photos;
