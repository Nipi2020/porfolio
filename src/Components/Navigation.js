import {Container, Nav,Navbar} from "react-bootstrap"


const Navigation = () => {
    return (
        <div>
          <Navbar variant="dark">
            <Container>
                <Navbar.Brand>NIPI FILMS</Navbar.Brand>
                <Nav>
                    <Nav.Link>HOROR</Nav.Link>
                    <Nav.Link>HACKER</Nav.Link>
                </Nav>
            </Container>
          </Navbar>
        </div>
    )
}

export default Navigation;