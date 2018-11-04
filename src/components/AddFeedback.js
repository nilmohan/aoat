import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import Rating from 'react-rating';

import { startUpdateForUser } from '../actions/users';
import AppRouter, { history } from '../routers/AppRouter';


export class AddFeedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            rating: 0
        };
    }

    onRatingChange = (e) => {
        const rating = e;
        this.setState(() => ({ rating }));
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        let updatedRatingList = this.props.user.ratingList ? this.props.user.ratingList : [];
            updatedRatingList = [...updatedRatingList,
                {rating: this.state.rating, description: this.state.description,
                    ratedBy: this.props.loginUser.name, addedOn: new Date() } ];
        let updatedUser = {
            ...this.props.user,ratingList : updatedRatingList
        }
        this.props.startUpdateForUser(this.props.user.id, updatedUser);

        //Reset the entered data
        this.setState(() => ({ rating : 0, description : ''}));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <FormGroup row>
                        <Label  sm={2} size="lg">Give your rating here</Label>
                        <Col sm={10}>
                            <Rating emptySymbol="fa fa-star-o fa-1x"
                                    fullSymbol="fa fa-star fa-1x"
                                    fractions={2}
                                    onChange={this.onRatingChange}
                                    initialRating={this.state.rating} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="description" sm={2} size="lg">Description</Label>
                        <Col sm={10}>
                            <Input type="textarea"
                                name="text" id="description"
                                value={this.state.description} onChange={this.onDescriptionChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={12}>
                            <Button>Submit</Button>
                        </Col>
                    </FormGroup>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startUpdateForUser: (id,user) => dispatch(startUpdateForUser(id,user))
});

const mapStateToProps = (state) => {
    return {
        loginUser: state.loginUser
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFeedback);

