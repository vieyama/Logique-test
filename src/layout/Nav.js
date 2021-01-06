import React, { useState } from 'react'
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
    DropdownItem,
    NavbarText,
} from 'reactstrap'

const NavPage = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <div>
            <Navbar expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/" active>
                                IN TEATERS
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">COMMING SOON</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">CHARTS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">TV SERIES</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">TRAILERS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">MORE</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavPage
