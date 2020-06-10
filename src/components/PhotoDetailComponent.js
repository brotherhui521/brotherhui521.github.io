import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardSubtitle,
  Button,
  CardTitle,
  BreadcrumbItem
} from "reactstrap";

import {Link} from 'react-router-dom';

function RenderPhoto({ photo }) {
  return (
    <div className="container">
    <div className="row">
    <BreadcrumbItem style={{ marginLeft: 14 }}>
            <Link to="/photos">Photos</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Photo Detail</BreadcrumbItem>
    </div>
    <div className="row" >
      <div className="col col-12 col-md-6 col-lg-5">
        <Card style={{ marginTop: "10px" ,marginBottom:"10px" }}>
          <CardImg top width="100%" src={photo.image} alt="Photo here" />
          <CardBody>
            <CardTitle>{photo.name}</CardTitle>
            <CardSubtitle>Location needed</CardSubtitle>
            <CardText>add photo. description</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    </div>
    </div>
  );
}

class PhotoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <RenderPhoto photo={this.props.photo}></RenderPhoto>;
  }
}

export default PhotoDetail;
