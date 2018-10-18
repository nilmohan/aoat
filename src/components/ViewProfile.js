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
        return (
            <Container className="view-profile">
                <Row>
                    <Col xs="3" className="text-center">
                        <img className="img-fluid mb-2 mt-2" src={this.props.user.profilePictureUrl ? this.props.user.profilePictureUrl :"https://firebasestorage.googleapis.com/v0/b/tuition-jugard-1cba8.appspot.com/o/profile%2Fuser.jpg?alt=media&token=5bc1ee82-abca-42af-b5f8-9318d5f214ed"}/>
                        <div> {this.props.user.name}</div>
                        <div> {this.props.user.userType === 't' ? "(Teacher)" : "(Student)"}</div>
                        <Rating emptySymbol="fa fa-star-o fa-1x"
                            fullSymbol="fa fa-star fa-1x"
                            fractions={2} className="rating-color"
                            initialRating= {this.averageRating()} readonly/>
                        <div> Address : #20 Flat No101, Marathali Banglore Karnataka</div>
                    </Col>
                    <Col xs="9">
                        <h4>About </h4>
                        <ListGroup flush>
                            <ListGroupItem>
                                <ListGroupItemHeading>Subjects</ListGroupItemHeading>
                                <ListGroupItemText>
                                    Math, Science
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem >
                                <ListGroupItemHeading>Prefered Classes</ListGroupItemHeading>
                                <ListGroupItemText>
                                    10th, 12th
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem >
                                <ListGroupItemHeading>Experience</ListGroupItemHeading>
                                <ListGroupItemText>
                                    10 years of experience
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem >
                                <ListGroupItemHeading>Others</ListGroupItemHeading>
                                <ListGroupItemText>
                                    Other information
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem >
                                <ListGroupItemText>
                                    <div>I prefered to do group or indivisual classes </div>
                                    <div>I am available for demo classes </div>
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem >
                                <ListGroupItemText>
                                    <div>I am charging of 1000 rupees per course </div>
                                    <div>Price is slightly negotiable</div>
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
                            this.props.user.ratingList === 0 ? (<p>No rating..</p>) :
                            (this.props.user.ratingList.map((rating, index) => {return <RatingItem key={index} {...rating} />}))
                        }
                    </Col>
                </Row>
                <Row>
                    <Col>{this.props.isAuthenticated ? <AddFeedback user = {this.props.user}/> : '' }</Col>
                </Row>
            </Container>
    );
    }
}

const mapStateToProps = (state, props) => ({
        user: state.users.find((user) => user.id === props.match.params.id),
        isAuthenticated: !!state.auth.uid
});


export default connect(mapStateToProps)(ViewProfile);

