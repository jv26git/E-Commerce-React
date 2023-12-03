import { NavLink } from 'react-router-dom';
import CartWidget from './Cartwidget';
import { Navbar, Nav, Container } from "react-bootstrap";

export const NavBar = () => {
    return (
        <Navbar>
            <Container>
                <NavLink to="/" className="nav-musashi store">Musashi Store</NavLink>
                <Nav className="me-auto">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/category/anime" className="nav-link">Anime</NavLink>
                    <NavLink to="/category/starwars" className="nav-link">Star Wars</NavLink>
                    <NavLink to="/category/mix" className="nav-link">Mix</NavLink>
                </Nav>
                <div className="nav-link">
                    <CartWidget />
                </div>
            </Container>
        </Navbar>
    );
};