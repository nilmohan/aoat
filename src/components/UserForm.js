import React from 'react';
import { startEditUser, startAddUser } from '../actions/users';
import { connect } from 'react-redux';
import AppRouter, { history } from '../routers/AppRouter';
export class UserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.user ? props.user.name : '',
            mobileNo: props.user ? props.user.mobileNo : '',
            calendarFocused: false,
            error: ''
        };
    }
    onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
};
onMobileNoChange = (e) => {
    const mobileNo = e.target.value;
    this.setState(() => ({ mobileNo }));
};
//onAmountChange = (e) => {
//    const amount = e.target.value;
//
//    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
//        this.setState(() => ({ amount }));
//    }
//};
//onDateChange = (createdAt) => {
//    if (createdAt) {
//        this.setState(() => ({ createdAt }));
//    }
//};
//onFocusChange = ({ focused }) => {
//    this.setState(() => ({ calendarFocused: focused }));
//};
//onSubmit = (e) => {
//    e.preventDefault();
//
//    if (!this.state.description || !this.state.amount) {
//        this.setState(() => ({ error: 'Please provide description and amount.' }));
//    } else {
//        this.setState(() => ({ error: '' }));
//        this.props.onSubmit({
//            description: this.state.description,
//            amount: parseFloat(this.state.amount, 10) * 100,
//            createdAt: this.state.createdAt.valueOf(),
//            note: this.state.note
//        });
//    }
//};


onSubmit = (e) => {
    e.preventDefault();

    if(this.props.operationType === 'edit'){

            this.props.startEditUser(this.props.user.id, {
                name: this.state.name,
                mobileNo: this.state.mobileNo })

    }else{
        this.props.startAddUser({
            name: this.state.name,
            mobileNo: this.state.mobileNo });
    }

        history.push('/dashboard');
};
render() {
    return (
        <div>
        {this.state.error && <p>{this.state.error}</p>}
<form onSubmit={this.onSubmit}>
<input
    type="text"
    placeholder="Name"
    autoFocus
    value={this.state.name}
    onChange={this.onNameChange}
/>
<input
    type="text"
    placeholder="mobileNo"
    value={this.state.mobileNo}
    onChange={this.onMobileNoChange}
/>
    <button>`${this.props.operationType}`</button>
    </form>
    </div>
)
}
}

const mapDispatchToProps = (dispatch) => ({
    startAddUser: (user) => dispatch(startAddUser(user)),
    startEditUser: (id,user) => dispatch(startEditUser(id,user))
});

export default connect(undefined, mapDispatchToProps)(UserForm);
