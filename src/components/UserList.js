import React from 'react';
import { connect } from 'react-redux';
import UserListItem from './UserListItem';
import { Table } from 'reactstrap';

export const UserList = (props) => (
  <Table striped responsive>
    <thead>
      <tr>
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>
    </thead>
    <tbody>
      {
        props.users.length === 0 ? (
          <p>No users</p>
        ) : (props.users.map((user) => {
              return <UserListItem key={user.id} {...user} />;
            }))
      }
    </tbody>
  </Table>
);

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(UserList);
