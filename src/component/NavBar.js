import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function MyNavBar({filterBySearch}) {
const[searchWord,setSearchWord] = useState('');
  const OnSearch=()=>{
    filterBySearch(searchWord);
    setSearchWord('')
  }


  return ( 
      <Navbar expand="lg" bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href="#">
            <div className='brand-color'>
            مطعم الحريري
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
            onChange={(e)=>{setSearchWord(e.target.value)}}
              type="text"
              placeholder="ابحث هنا.."
              className="mx-2 input-shadow"
              value={searchWord}

            />
            <Button className='btn-color' onClick={()=>OnSearch(searchWord)}>ابحث</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
