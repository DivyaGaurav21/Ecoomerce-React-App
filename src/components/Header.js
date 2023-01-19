import React , {useState} from 'react'

//--------Importing BootStrap Nav Component-------------//
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// -----------Import Badge of Material UI-----------------//
import Badge from '@mui/material/Badge';
//-----------Import Model------------------------------//
import MyVerticallyCenteredModal from './Modals';



const Header = () => {
    const [modalShow, setModalShow] = useState(false);
  return (
      <>
          <Navbar bg="danger" variant="dark">
              <Container>
                  <Nav.Link to='/' className='text-light mx-4'>Meal Hub</Nav.Link>
                  <Nav className="me-auto">
                      <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
                  </Nav>
                  <Badge badgeContent={4} color="primary">
                      <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }} onClick={() => setModalShow(true)}></i>
                      <MyVerticallyCenteredModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                      />
                  </Badge>
              </Container>
          </Navbar>
      </>
  )
}

export default Header