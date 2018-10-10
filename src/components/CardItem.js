import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, CardFooter, CardHeader } from 'reactstrap';
//import StarRating from 'react-star-rating';
import Rating from 'react-rating';
import AppRouter, { history } from '../routers/AppRouter';
import { NavLink } from 'react-router-dom';


export class CardItem extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            id: props.id ? props.user.id : '',
            name: props.user ? props.user.name : '',
            mobileNo: props.user ? props.user.mobileNo : '',
            calendarFocused: false,
            error: ''
        };
    }

    render() {
        const pStyle = {
            width: "18rem"
        };
        return (
            <div style={pStyle} className="my-card-style">
                <NavLink to={`/home/${this.props.user.id}`} activeClassName="is-active" user = {this.props.user}>
                    <Card>
                        <CardHeader className="card-header">
                            <i className="fa fa-circle fa-1x card-custom-fa-circle"><span className="card-logo-image">T</span></i>
                            <span className="card-header-name">{this.state.name.toUpperCase()}</span><br></br>
                            <Rating className="rating-class" emptySymbol="fa fa-star-o fa-1x" fullSymbol="fa fa-star fa-1x" fractions={2} initialRating={2.5} readonly />
                        </CardHeader>
                        <CardImg top  className="card-img-content" src={this.props.user.profilePictureUrl ? this.props.user.profilePictureUrl :"https://firebasestorage.googleapis.com/v0/b/tuition-jugard-1cba8.appspot.com/o/profile%2Fuser.jpg?alt=media&token=5bc1ee82-abca-42af-b5f8-9318d5f214ed"} />
                        <CardBody>
                            <div>Banglore</div>
                            <div>10th, 12th</div>
                            <div>Math, Science</div>
                        </CardBody>
                    </Card>
                </NavLink>
        </div>
        );
    }
};

export default CardItem;
