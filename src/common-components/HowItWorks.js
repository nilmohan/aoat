import React from 'react';
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import IPhone from '../images/app-iPhone.png';

const HowItWorks = () => (
<section className="section-steps how-it-works" id="works">
    <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}><h2>How it works &mdash; Simple as 1, 2, 3</h2></Col>
    </Row>
<Row>
<Col xs="6">
    <div className="square">
    <span className="big-logo-image">TJ</span>
    </div>
    </Col>
<Col xs="6">
    <div className="works-step clearfix">
    <div>1</div>
    <p>Choose the subscription plan that best fits your needs and sign up today.</p>
</div>
<div className="works-step clearfix">
    <div>2</div>
    <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
</div>
<div className="works-step clearfix">
    <div>3</div>
    <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
</div>

    </Col>
</Row>

    </section>
);

export default HowItWorks;