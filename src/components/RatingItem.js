import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import moment from 'moment';

const RatingItem = ({rating, description, ratedBy, addedOn }) => (
    <div>
        <Rating emptySymbol="fa fa-star-o fa-1x"
                fullSymbol="fa fa-star fa-1x"
                fractions={2} className="rating-color"
                initialRating={parseFloat(rating)} readonly/>
        <p> By <span className="rated-by"> {ratedBy } </span> On {addedOn ? moment(addedOn).format('Do MMMM  YYYY') : ''} </p>
        <p> {description } </p>
        <hr className = "my-2" />
    </div>
);

export default RatingItem;
