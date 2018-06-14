import React from "react";
import {Card, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler, Button, Container} from "reactstrap";

export class Badges extends React.Component {
    render() {
        return (
            <div className="Badges">
                <p><b>Badges</b></p>
                <hr />
                <Card>
                <div className="card-body">
                    <p>List badges here.</p>
                </div>
                </Card>
            </div>);
    }
}
