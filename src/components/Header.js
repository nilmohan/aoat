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
    DropdownItem, FormGroup, Input, Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import PreviewPicture from './PreviewPicture';


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
            return (<Button color="link" onClick={this.props.startLogout}>LogOut</Button>);
        }else{
            return (<Button color="link" onClick={this.props.startLogin}>LogIn</Button>);
        }
    }
    render() {
        return (
<div>
            <Navbar  className="navbar sticky-top navbar-dark navbar-expand-sm bg-dark">

            <NavbarBrand href="/">
                <i className="fa fa-circle fa-3x custom-fa-circle">
                    <span className="logo-image">TJ</span>
                </i>
                <div className="app-header-name">Tuition Jugard</div>
            </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />

                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="navbar-nav ml-auto">
                            <NavLink to="/home" className="nav-link" exact={true}>Home</NavLink>
                        </NavItem>

                        <NavItem className="navbar-nav ml-auto">
                            <NavLink to="/about" className="nav-link" exact={true}>About Us</NavLink>
                        </NavItem>
                        <NavItem className="navbar-nav ml-auto">
                            <NavLink to="/home" className="nav-link" exact={true}>Home</NavLink>
                        </NavItem>

                        <NavItem className="navbar-nav ml-auto">
                            <NavLink to="/about" className="nav-link" exact={true}>About Us</NavLink>
                        </NavItem>

        <NavItem className="navbar-nav ml-auto">
            <NavLink to="/home" className="nav-link" exact={true}>Home</NavLink>
            </NavItem>

            <NavItem className="navbar-nav ml-auto">
            <NavLink to="/about" className="nav-link" exact={true}>About Us</NavLink>
        </NavItem>
        <NavItem className="navbar-nav ml-auto">
            <NavLink to="/home" className="nav-link" exact={true}>Home</NavLink>
            </NavItem>

            <NavItem className="navbar-nav ml-auto">
            <NavLink to="/about" className="nav-link" exact={true}>About Us</NavLink>
        </NavItem>
                    </Nav>

                    <form className="form-inline ml-auto">
                        <input type="text" className="form-control mr-2" placeholder="Search"/>
                        <button className="btn btn-outline-success">Search</button>
                    </form>
                    <div className="ml-auto" >
            {this.getLogInOrOutField()}
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
        loginUser: state.loginUser
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);








