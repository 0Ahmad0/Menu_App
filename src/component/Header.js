import { Col, Row } from "react-bootstrap";

function Header(){
    return(
        <Row >
            <Col sm='12' className="justify-content-center text-center">
                <div className="header-title">
                قائمة الطعام        
            </div>
            <div className="justify-content-center d-flex">
                <p className="under-line"></p>
            </div>
            </Col>
        </Row>
    )
}

export default Header;