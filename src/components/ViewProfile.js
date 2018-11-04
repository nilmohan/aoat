import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Button, Form, FormGroup, Label, Input, FormText, Col, Container, Row, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import Rating from 'react-rating';
import { editExpense } from '../actions/users';
import AddFeedback from './AddFeedback';
import RatingItem from './RatingItem';


export class ViewProfile extends React.Component {

    constructor(props) {
        super(props);
    }

    averageRating(){
        let averageRating = 0;
        if(this.props.user.ratingList != null && this.props.user.ratingList.length > 0){
            averageRating = this.props.user.ratingList.map(item => parseFloat(item.rating)).reduce((prev, next) => prev + next)/this.props.user.ratingList.length;
        }
        return averageRating;
    }

    render()
    {
        const address = this.props.user.address;
        const profile = this.props.user.profile;
        return (
            <Container className="view-profile">
                <Row>
                    <Col xs="3">
                        <img className="img-fluid mb-2 mt-2" src={this.props.user.profilePictureUrl ? this.props.user.profilePictureUrl :"https://firebasestorage.googleapis.com/v0/b/tuition-jugard-1cba8.appspot.com/o/profile%2Fuser.jpg?alt=media&token=5bc1ee82-abca-42af-b5f8-9318d5f214ed"}/>

                        <div className="text-center">
                            <div> {this.props.user.name}</div>
                            <div> {this.props.user.userType == 't' ? "(Teacher)" : "(Student)"}</div>
                            <Rating emptySymbol="fa fa-star-o fa-1x"
                                fullSymbol="fa fa-star fa-1x"
                                fractions={2} className="rating-color"
                                initialRating= {this.averageRating()} readonly/>
                                ({this.props.user.ratingList != null ? this.props.user.ratingList.length: 0})
                        </div>
                        <FormGroup hidden={!this.props.isAuthenticated}>
                            <Label>Email</Label> {' :  '}
                            <Label><p>{this.props.user.email}</p></Label>
                        </FormGroup>
                        <FormGroup hidden={!this.props.isAuthenticated}>
                            <Label>Moblie</Label> {' :  '}
                            <Label><p>{this.props.user.mobileNo}</p></Label>
                        </FormGroup>
                        <FormGroup hidden={!this.props.isAuthenticated}>
                            <Label>Address</Label> {' :  '}
                            <Label><p>{address.address1} {address.address2} {address.district} {address.state} {address.zip}</p></Label>
                        </FormGroup>
                    </Col>
                    <Col xs="9">
                        <h4>About </h4>
                        <ListGroup flush>
                            <ListGroupItem>
                                <ListGroupItemHeading>Subjects</ListGroupItemHeading>
                                <ListGroupItemText>
                                    {profile.subjects}
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem >
                                <ListGroupItemHeading>Prefered Classes</ListGroupItemHeading>
                                <ListGroupItemText>
                                    {profile.classes}
                                </ListGroupItemText>
                            </ListGroupItem>

                            <ListGroupItem hidden={this.props.user.userType == '' | this.props.user.userType == 's'}>
                                <ListGroupItemHeading>Experience</ListGroupItemHeading>
                                <ListGroupItemText>
                                    {profile.experience}
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem >
                                <ListGroupItemHeading>Preferred Tuition Type </ListGroupItemHeading>
                                <ListGroupItemText >
                                {profile.tuitionType === 'both'?'I preferred both individual and group tuition.':
                                    profile.tuitionType === 'individual'?'I preferred only individual tuition.':
                                        profile.tuitionType === 'group'?'I preferred only group tuition.': ''}
                                </ListGroupItemText>
                            </ListGroupItem>

                            <ListGroupItem >
                                <ListGroupItemHeading>Communication and Contact </ListGroupItemHeading>
                                <ListGroupItemText>
                                {profile.contactType ==='both'?'Anyone can contact me by both email and mobile.':
                                    profile.contactType ==='email'?'Anyone can contact me by only email.':
                                    profile.contactType ==='mobile'?'Anyone can contact me by only mobile.':''}
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem hidden={this.props.user.userType == '' | this.props.user.userType == 's'}>
                                <ListGroupItemHeading>Prefered Payment Info </ListGroupItemHeading>
                                <ListGroupItemText>
                                {profile.paymentInfo}
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem >
                                <ListGroupItemHeading>Others</ListGroupItemHeading>
                                <ListGroupItemText>
                                    {profile.otherInfo}
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem >
                                <ListGroupItemText>

    <div>{this.props.user.userType =='t' && profile.availableFordemo?'I am available for demo classes':''}</div>
                                </ListGroupItemText>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col><hr className="my-2" /></Col>
                </Row>
                <Row>
                    <Col><h4>Ratings </h4> <hr className="my-2" /></Col>
                </Row>
                <Row>
                    <Col>
                        {
                        (this.props.user.ratingList === undefined || this.props.user.ratingList === 0) ? (<p>No rating..</p>) :
                            (this.props.user.ratingList.map((rating, index) => {return <RatingItem key={index} {...rating} />}))
                        }
                    </Col>
                </Row>
                <Row>
                    <Col>{(this.props.isAuthenticated && this.props.loginUser.id !== this.props.user.id)? <AddFeedback user = {this.props.user}/> : '' }</Col>
                </Row>
            </Container>
    );
    }
}

const mapStateToProps = (state, props) => ({
        user: state.users.find((user) => user.id === props.match.params.id),
        isAuthenticated: !!state.auth.uid,
        loginUser: state.loginUser
});


export default connect(mapStateToProps)(ViewProfile);

