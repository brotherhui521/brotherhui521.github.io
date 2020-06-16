import React, { Component } from "react";
import $ from "jquery";
import { Button } from "reactstrap";

class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  url =
    "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

  getQuote(data) {
    $("#quote").text(data.quoteText);

    if (data.quoteAuthor === "") {
      data.quoteAuthor = "Unknown";
    }
    $("#author").text("- " + data.quoteAuthor);
  }

  onClickRefresh = () => {
    $.getJSON(this.url, this.getQuote, "jsonp");
  };

  componentDidMount() {
    $.getJSON(this.url, this.getQuote, "jsonp");
  }

  render() {
    return (
      <div className="container" >
        <div className="row" >
          <div style={{margin: 'auto'}}>
            <h2>Quote for the day</h2>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="quote_box center-block">
              <div className="quote">
                <h2>
                  <span>
                    <sup>
                      <span
                        className="fa fa-quote-left"
                        aria-hidden="true"
                      ></span>
                    </sup>
                  </span>
                  <p id="quote"></p>{" "}
                </h2>
              </div>
              <div className="author">
                <span>
                  <h3>
                    <p id="author"></p>
                  </h3>
                </span>
              </div>
              <ul className="social-bar">
                <li>
                  <button
                    id="tweetThis"
                    className="btn btn-default btn-sm"
                    title="Tweet this quote"
                  >
                    <a className="twitter-share-link">
                      <span
                        id="twitter-share"
                        className="fa fa-twitter fa-lg"
                      ></span>
                    </a>
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-default btn-sm"
                    title="Post this quote (not implemented)"
                  >
                    <a href="#">
                      <span className="fa fa-facebook fa-lg"></span>
                    </a>
                  </button>
                </li>
                <li>
                <Button
                  id="getQuote"
                  outline
                  color="success"
                  size="sm"
                  title="New Quote"
                  onClick={this.onClickRefresh}
                >
                  <span className="fa fa-refresh"></span>
                </Button>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteMachine;
