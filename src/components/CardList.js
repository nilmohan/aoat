import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Container, Row, Col, CardDeck } from 'reactstrap';
import CardItem from './CardItem';
import { connect } from 'react-redux';


const CardList = (props) => {
    return (
        <CardDeck className="mx-3">
            {
                props.users.length === 0 ?
                (<p>No users</p>) : (props.users.map((user) => {
                    return <CardItem key={user.id} user={user} />;
                }))
            }
        </CardDeck>
    );
};

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps)(CardList);
