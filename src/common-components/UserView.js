import React from 'react';
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import IPhone from '../images/app-iPhone.png';

const AboutUs = () => (
    <section className="section-steps user-view" id="userView" >
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}><h2 className="local-h2">User's View</h2></Col>
        </Row>
        <Row>
<Col sm="4" md={{ size: 3, offset: 1 }}>
<blockquote>
Tuition Jugaard is just awesome! I just registered in the web site and getting lots of calls from different Students.I am very happy by using this website.
<cite><img src="https://firebasestorage.googleapis.com/v0/b/tuition-jugard-1cba8.appspot.com/o/customer-1.jpg?alt=media&token=ac70e33e-483f-4492-a453-cdc453581423" alt="Customer 1 photo"></img>(Teacher)Rajesh Kumar</cite>
</blockquote>
</Col>
<Col  sm="4" md={{ size: 3, offset: 0 }}>
<blockquote>
    Tuition Jugaard simply helpfull. It helps both students and teachers to get their tuition easily.
<cite><img src="https://firebasestorage.googleapis.com/v0/b/tuition-jugard-1cba8.appspot.com/o/customer-2.jpg?alt=media&token=d92e1a28-8490-4cd6-8ac6-f5406dc4be12" alt="Customer 2 photo"></img>(Teacher)Ramya</cite>
</blockquote>
</Col>
<Col  sm="4" md={{ size: 3, offset: 0 }}>
<blockquote>
I was looking for home tutor in banglore. I tried a lot of other options. Then I found Tuition Jugaard. After registration in the website, I am getting lots of calls from heighly qulified teachers. Many thanks to tuition jugaard.
<cite><img src="https://firebasestorage.googleapis.com/v0/b/tuition-jugard-1cba8.appspot.com/o/customer-3.jpg?alt=media&token=f41ff03c-9e1d-4763-9254-b528c0bca9df" alt="Customer 3 photo"></img>(Student)Sanju Barma</cite>
</blockquote>
</Col>
        </Row>



    </section>
);

export default AboutUs;