import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Container, Row, Col, CardDeck, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import CardItem from './CardItem';
import { connect } from 'react-redux';
import selectUsers from '../selectors/users';


class CardList extends React.Component {

    constructor(props) {

        super(props);

        this.pageSize = 10;
        this.pagesCount = Math.ceil(this.props.users.length / this.pageSize);

        this.state = {
            currentPage: 0
        };

    };

    handleClick(e, index) {

        e.preventDefault();

        this.setState({
            currentPage: index
        });

    };

    render()  {
        const { currentPage } = this.state;
        this.pagesCount = Math.ceil(this.props.users.length / this.pageSize);
        return (
                <div>
            <CardDeck className="mx-3">
                {
                    this.props.users.length === 0 ?
                    (<p>No Students or Teachers found.</p>) :
                    (this.props.users.slice(currentPage * this.pageSize, (currentPage + 1) * this.pageSize).map((user, i) =>
                        <CardItem key={user.id} user={user} />))
                }
            </CardDeck>

            <div className="pagination-wrapper">
                <Pagination aria-label="Page navigation example">
                    <PaginationItem disabled={currentPage <= 0}>
                        <PaginationLink onClick={e => this.handleClick(e, currentPage - 1)} previous href="#" />
                    </PaginationItem>

                    {[...Array(this.pagesCount)].map((page, i) =>
                        <PaginationItem active={i === currentPage} key={i}>
                            <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    )}

                    <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
                        <PaginationLink onClick={e => this.handleClick(e, currentPage + 1)} next href="#" />
                    </PaginationItem>
                </Pagination>
            </div>
        </div>
        );
    };

}



const mapStateToProps = (state) => {
    return {
        users: selectUsers(state.users, state.filters)
    };
};


export default connect(mapStateToProps)(CardList);
