import React from 'react';
import { connect } from 'react-redux';
import UserForm from './UserForm';
import { startEditUser, startRemoveUser } from '../actions/users';

export class EditUser extends React.Component {

  onRemove = () => {
    this.props.startRemoveUser({ id: this.props.user.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <UserForm
          user={this.props.user}
          operationType="edit"
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  user: state.users.find((user) => user.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editUser: (id, user) => dispatch(editUser(id, user)),
    startRemoveUser: (data) => dispatch(startRemoveUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
