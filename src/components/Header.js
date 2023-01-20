import React , {useState} from 'react'

//--------Importing BootStrap Nav Component-------------//
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// -----------Import Badge of Material UI-----------------//
import Badge from '@mui/material/Badge';
//-----------Import Model------------------------------//
import MyVerticallyCenteredModal from './Modals';

// -------get cart item from store---------------------//




const Header = () => {
    const [modalShow, setModalShow] = useState(false);
  return (
      <>
          <Navbar style={{ background: '#f44336' }} variant="dark" className='fixed-top'>
              <Container>
                  <Nav.Link to='/' className='text-light mx-4 fw-bold fs-3 fst-italic'>Meal Hub</Nav.Link>
                  <Nav className="me-auto">
                      <Nav.Link href="/" className='text-light fw-bolder'>Home</Nav.Link>
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