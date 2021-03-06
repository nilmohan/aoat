import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startLogout } from '../actions/auth';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, FormGroup, Input, Button, Row, Col, Label } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import PreviewPicture from './PreviewPicture';
import AppRouter, { history } from '../routers/TjAppRouter';


export class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    getLogInOrOutField(){
        if(this.props.isPrivate == true){
            return (<Button color="link" onClick={this.props.startLogout} className="login-logout-link">LogOut</Button>);
        }else{
            return (<Button color="link" onClick={this.props.startLogin} className="login-logout-link">LogIn</Button>);
        }
    }
    myProfile = (e) =>{
    e.preventDefault();
    history.push('/profile');
    }
    render() {
        return (
<div>
            <Navbar  className="navbar sticky-top navbar-dark navbar-expand-sm bg-dark">

            <NavbarBrand href="/">
                <i className="fa fa-circle fa-3x custom-fa-circle">
                    <span className="logo-image">TJ</span>
                </i>
                <div className="app-header-name">Tuition Jugaard</div>
            </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />

                <Collapse isOpen={this.state.isOpen} className="navbar-class" navbar>
                    <Nav className="mr-auto common-width" navbar>
                        <NavItem className="navbar-nav ml-auto nav-fill" >
                            <NavLink to="/home" className="nav-link" exact={true}>Home</NavLink>
                        </NavItem>
                        <NavItem className="navbar-nav ml-auto">
                            <NavLink to="#goal" className="nav-link" exact={true}>Our Goal</NavLink>
                        </NavItem>
                        <NavItem className="navbar-nav ml-auto">
                            <NavLink to="/about" className="nav-link">How To Use</NavLink>
                        </NavItem>
                        <NavItem className="navbar-nav ml-auto">
                            <NavLink to="/about" className="nav-link" exact={true}>About Us</NavLink>
                        </NavItem>
                        <NavItem className="navbar-nav ml-auto">
                        <NavLink to="#works" className="nav-link" exact={true}>Contact Us</NavLink>
                        </NavItem>

                    </Nav>

                    <div className="header-user-info">
                        <div className="small-profile-view">
                            <NavLink to="/profile" hidden={!this.props.isAuthenticated}>
                            <img src={(this.props.isPrivate && this.props.loginUser.profilePictureUrl) ? this.props.loginUser.profilePictureUrl :"https://firebasestorage.googleapis.com/v0/b/tuition-jugard-1cba8.appspot.com/o/profile%2Fuser.jpg?alt=media&token=5bc1ee82-abca-42af-b5f8-9318d5f214ed"} />
                            </NavLink>
                        </div>
                        <div className="ml-auto" >
                            <Button color="link" className="login-logout-link" onClick={this.myProfile} hidden={!this.props.isAuthenticated}>My Profile</Button>
                            {this.getLogInOrOutField()}
                        </div>
                    </div>
                </Collapse>

            </Navbar>
                </div>
    );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),
    startLogin: () => dispatch(startLogin())
});

const mapStateToProps = (state) => {
    return {
        loginUser: state.loginUser,
        isAuthenticated: !!state.auth.uid
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);








