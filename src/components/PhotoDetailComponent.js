import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardSubtitle,
  Button,
  CardTitle,
  BreadcrumbItem,
  
  
  
} from "reactstrap";
import Carousel, {Modal, ModalGateway} from 'react-images';
import Image from 'react-bootstrap/Image'

import { Link } from "react-router-dom";

function RenderPhoto(props) {
  
  return (
    <div className="container">
      <div className="row">
        <BreadcrumbItem style={{ marginLeft: 14 }}>
          <Link to="/photos">Photos</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Photo Detail</BreadcrumbItem>
      </div>
      <div className="row">
        <div className="col col-12 col-md-6 col-lg-5">
          <Card style={{ marginTop: "10px", marginBottom: "10px" }}>
            <CardImg
              top
              width="100%"
              src={props.photo.image}
              alt="Photo here"
              onClick={props.toggleModal}
            />
            <CardBody>
              <CardTitle>{props.photo.name}</CardTitle>
              <CardSubtitle>Location needed</CardSubtitle>
              <CardText>add photo. description</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
      </div>
        <ModalGateway>
          {props.isModalOpen?(
            <Modal onClose={props.toggleModal}>
            <Carousel views={props.image}></Carousel>

            
          </Modal>
          ):null}
        </ModalGateway>
          
       
    </div>
  );
}

class PhotoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      image:[{src:props.photo.image}]
    };
   
    this.toggleModal=this.toggleModal.bind(this);
  }

  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };
  
  render() {
    
    return (
      <div>
        <RenderPhoto
          photo={this.props.photo}
          toggleModal={this.toggleModal}
          isModalOpen={this.state.isModalOpen}
          image={this.state.image}

        ></RenderPhoto>
      </div>
    );
  }
}

export default PhotoDetail;
