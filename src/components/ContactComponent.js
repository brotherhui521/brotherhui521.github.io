import React, { Component } from "react";
import { Button, Label, Col, Row } from "reactstrap";
import { Control, Errors, Form } from "react-redux-form";
import {Image} from 'react-bootstrap';
const required = (val) => val && String(val).length;
const maxNumber = (len) => (val) => !val || String(val).length <= len;
const minNumber = (len) => (val) => val && String(val).length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Current input is" + JSON.stringify(values));
    alert("Current state is : " + JSON.stringify(values));

    //this.props.resetFeedbackForm();
  }

  render() {
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12" style={{margin: "30px 0px 30px 0px"}}>
            <h3>Feel free to reach out to me</h3>
          </div>
          <div  className="col-12 col-sm-4 offset-sm-1">
            <h5>My Address</h5>
            <address>
              Currently live in 
              <br />
              the beautiful desert
              <br />
              Arizona, US
              <br />
             
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mail to:brotherhui521@gmail.com">Send me an email</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1" >
            <img src="images/t.png" alt="Thank you!" style={{top:10}}/>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info" href="##">
                <i className="fa fa-weixin"></i> WeChat
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:brotherhui521@gmail.com"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        </div>

        
    );
  }
}

export default Contact;
