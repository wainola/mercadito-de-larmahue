import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

export default class Navegacion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }
    // On click shows the menu on mobile
    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    
    // toggle the burger menu
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    
    render() {
        return (
            <Router>
                <Navbar color="#d0d6e2 mdb-color lighten-5" dark expand="md" scrolling className="font-weigth-bold">
                    <NavbarBrand href="/">
                        <strong>Navbar</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <ul className="navbar-nav d-flex ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="">Opción 1</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Opción 2</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Opción 3</a>
                            </li>
                        </ul>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}
