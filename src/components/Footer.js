import React from 'react';

export class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <footer>
        <div className="container">
        <div className="row">
          <div className="col">
          <ul className="footer-nav">
          <li><a href="#">About us</a></li>
      <li><a href="#">Blog</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">iOS App</a></li>
      <li><a href="#">Android App</a></li>
      </ul>
      </div>
      <div className="col">
          <ul className="social-links">
          <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
          <li><a href="#"><i className="fa fa-google-plus-square"></i></a></li>
          <li><a href="#"><i className="fa fa-instagram"></i></a></li>
          </ul>
          </div>
          </div>
              </div>
          <div className="row">
          <p>
          Copyright &copy; 2015 by Omnifood. All rights reserved.
      </p>
      </div>
      </footer>
    );
  }
}
export default Footer;






