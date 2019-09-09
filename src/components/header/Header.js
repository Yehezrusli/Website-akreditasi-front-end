import React from 'react'
import "./header.css"
import { Container, Row, Col } from 'reactstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom'

import logo from '../../Picture/Logo-Informatika.png';

class Header extends React.Component {
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

    render() {
        return (
            <>
                <div className="header_div">
                    <Container>
                        <Row>
                            <Col>
                                <div className="text-center my-3">
                                    <Link to="/">
                                        <img src={logo} alt="Logo" width="50%" />
                                    </Link>
                                    <h1 className="text-white font-weight-light mt-3">Laporan Kinerja Program Studi</h1>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div>
                    <Navbar color="light" light expand="md">
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink tag={Link} to="/tataPamong">Tata Pamong</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </>
        )
    }
}

export default Header;
