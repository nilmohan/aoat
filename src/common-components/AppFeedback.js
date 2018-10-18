import React from 'react';
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import IPhone from '../images/app-iPhone.png';

const AppFeedback = () => (
<section className="section-form" id="works">
<Row>
<Col sm="12" md={{ size: 6, offset: 3 }}><h2>We're happy to hear from you</h2></Col>
</Row>
<Row>
<Col sm="6" md={{ size: 2, offset: 4 }}><Label>Name</Label></Col>
<Col sm="6" md={{ size: 3, offset: 0 }}><Input type="text" name="name" id="name" placeholder="Your name" required /></Col>
</Row>
<Row>
<Col sm="6" md={{ size: 2, offset: 4 }}><Label>Email</Label></Col>
<Col sm="6" md={{ size: 3, offset: 0 }}><Input type="email" name="email" id="email" placeholder="Your email" required /></Col>
</Row>
<Row>
<Col sm="6" md={{ size: 2, offset: 4 }}><Label>How did you find us?</Label></Col>
<Col sm="6" md={{ size: 3, offset: 0 }}>
<Input type="select" name="selectMulti" id="exampleSelectMulti">
    <option value="friends" selected>Friends</option>
<option value="search">Search engine</option>
<option value="ad">Advertisement</option>
    <option value="other">Other</option>
    </Input>
</Col>
</Row>
<Row>
<Col sm="6" md={{ size: 2, offset: 4 }}><Label>Newsletter?</Label></Col>
<Col sm="6" md={{ size: 3, offset: 0 }}><Input type="checkbox" name="news" id="news" checked /> Yes, please</Col>
</Row>
<Row>
<Col sm="6" md={{ size: 2, offset: 4 }}><Label>Drop us a line</Label></Col>
<Col sm="6" md={{ size: 3, offset: 0 }}><Input type="textarea" name="message" placeholder="Your message" /></Col>
</Row>
    <Row>
    <Col sm="6" md={{ size: 3, offset: 4 }}></Col>
<Col sm="6" md={{ size: 3, offset: 0 }}>
    <Button color="primary" size="sm" >Send it!</Button>
    </Col>
    </Row>

    </section>
);

export default AppFeedback;