import { signOut } from 'firebase/auth';
import { Button, NavDropdown, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Form, Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from './fr2.png'
import './Header.css'


function Header() {
  const [user]=useAuthState(auth);
  const handleSignOut = ()=>{
    signOut(auth);
  }
  return (
    <>
    <header>
      <div className='container'>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              <Nav.Link className="navbar-brand logo" as={Link} to="/">              
                <img src="images/logo.png" className="img-fluid" alt="bookworms"/>                 
              </Nav.Link> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll"  >
              <Nav className="me-auto my-2 my-lg-0"  style={{ maxHeight: '100px' }} navbarScroll>
              </Nav>

              <div>
                <Nav className="d-flex me-auto my-2 my-lg-0 menu">
                  <Nav.Link as={Link} to='/' className='nav_link'>Home</Nav.Link>
                  <Nav.Link as={Link} to='/shop' className='nav_link'>Shop</Nav.Link>
                
                  {
                    user && <>
                    <Nav.Link as={Link} to='/addproduct' className='nav_link'>AddBooks</Nav.Link>
                    <Nav.Link as={Link} to='/manageproduct' className='nav_link'>ManageBooks</Nav.Link>
                    </>
                  }

                  <Nav.Link as={Link} to='/contact' className='nav_link'>Contact</Nav.Link>
                  <Nav.Link as={Link} to='/about' className='nav_link'>About</Nav.Link>
                  {
                    user ?
                    <Nav.Link className='login_btn c_btn' onClick={handleSignOut} as={Link} to='/login'>SignOut</Nav.Link>
                    :
                    <Nav.Link as={Link} to='/login' className='login_btn c_btn'>Login</Nav.Link>
                  }
                          
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
    
    </>
  );
}

export default Header;