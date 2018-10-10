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
            return (<NavItem>
                <span onClick={this.props.startLogout}>LogOut</span>
            </NavItem>);
        }else{
            return (<NavItem>
                <span onClick={this.props.startLogin}>LogIn</span>
            </NavItem>);
        }
    }
  render() {
    return (
        <div>
            <Navbar  light expand="md" className="sticky-top nab-bar-style">
                <NavbarBrand href="/">
                    <i className="fa fa-circle fa-4x custom-fa-circle"><span className="logo-image">TJ</span></i><div className="app-header-name">q</div>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />

                <Collapse isOpen={this.state.isOpen} navbar className="ml-auto">
                  <form className="form-inline search-form-panel">
                      <FormGroup>
                            <Input type="text" name="search" id="searchinfo" placeholder="Search" className="search-box"/>
                            <Button>Search</Button>
                      </FormGroup>

                  </form>
                  <Nav className="ml-auto" navbar>
      <NavItem>
      <NavLink to="/home" activeClassName="is-active" exact={true}>Home</NavLink>
      </NavItem>
                      <NavItem>
          <NavLink to="/Profile" activeClassName="is-active" exact={true}>About Us</NavLink>

                      </NavItem>

                        {this.getLogInOrOutField()}
                  </Nav>
                </Collapse>
            </Navbar>

      <img className="mb-2 mt-2 header-profile-image" src={this.props.loginUser.profilePictureUrl}/>

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








