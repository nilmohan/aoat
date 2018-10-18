import React from 'react';
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';

export class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <footer>
          <Row>
              <Col sm={{ size: 5, offset: 1 }}>
                <ul className="footer-nav">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">iOS App</a></li>
                    <li><a href="#">Android App</a></li>
                </ul>
              </Col>
              <Col sm={{ size: 5, offset: 1 }}>
                <ul className="social-links">
                    <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus-square"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                </ul>
              </Col>
          </Row>
          <Row>
              <Col sm="12" md={{ size: 6, offset: 5 }}>Copyright &copy; 2015 by TuitionJugaard. All rights reserved.</Col>
          </Row>
      </footer>
    );
  }
}
export default Footer;






