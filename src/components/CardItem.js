import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, CardFooter, CardHeader } from 'reactstrap';
//import StarRating from 'react-star-rating';
import Rating from 'react-rating';
import AppRouter, { history } from '../routers/AppRouter';
import { NavLink } from 'react-router-dom';
import moment from 'moment';


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
    averageRating(){
        let averageRating = 0;
        if(this.props.user.ratingList != null && this.props.user.ratingList.length > 0){
            averageRating = this.props.user.ratingList.map(item => parseFloat(item.rating)).reduce((prev, next) => prev + next)/this.props.user.ratingList.length;
        }
        return averageRating;
    }
    render() {
        const pStyle = {
            width: "18rem"
        };
        const profile = this.props.user.profile;
        return (
            <div style={pStyle} className="my-card-style">
                <NavLink to={`/home/${this.props.user.id}`}>
                    <Card>
                        <CardHeader className="card-header">
                            <div className="card-header-child">
                                <i className="fa fa-circle fa-1x card-custom-fa-circle"><span className="card-logo-image">{this.props.user.userType == 't' ? "T" : "S"}</span></i>
                                <span className="card-header-name">{this.state.name.toUpperCase()}</span><br></br>
                                <Rating className="rating-class" emptySymbol="fa fa-star-o fa-1x" fullSymbol="fa fa-star fa-1x" fractions={2} initialRating={this.averageRating()} readonly />
                                <span className="rating-count-class">({this.props.user.ratingList ?this.props.user.ratingList.length: 0})</span>

                            </div>
                        </CardHeader>
                        <CardImg top  className="card-img-content" src={this.props.user.profilePictureUrl ? this.props.user.profilePictureUrl :"https://firebasestorage.googleapis.com/v0/b/tuition-jugard-1cba8.appspot.com/o/profile%2Fuser.jpg?alt=media&token=5bc1ee82-abca-42af-b5f8-9318d5f214ed"} />
                        <CardBody>
                            <div><span className="short-info-header">Updated Date : {" "}</span><span className="short-info-desc">{moment(profile.updatedDate).format('DD/MM/YYYY')}</span></div>
                            <div><span className="short-info-header">Classes: {" "}</span><span className="short-info-desc">{profile.classes}</span></div>
                            <div><span className="short-info-header">Subjests: {" "}</span><span className="short-info-desc">{profile.subjects}</span></div>
                            <div><span className="short-info-header" >Area: {" "}</span><span className="short-info-desc">{profile.locality}</span></div>
                        </CardBody>
                    </Card>
                </NavLink>
        </div>
        );
    }
};

export default CardItem;
