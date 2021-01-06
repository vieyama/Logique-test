import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Hamburguer from 'assets/images/Hamburguer.png'
import Categorias from 'assets/images/Categorias.png'
import Notification from 'assets/images/Notification.png'
import Play from 'assets/images/Play.png'
const Header = () => {
    return (
        <div className="header">
            <Container>
                <Row>
                    <Col lg="6" className="header-left">
                        <img src={Hamburguer} alt="" />
                    </Col>
                    <Col lg="6" className="header-right">
                        <img
                            src={Categorias}
                            className="header-categorias"
                            alt=""
                        />
                        <img
                            src={Notification}
                            className="header-notification"
                            alt=""
                        />
                    </Col>
                </Row>
                <Row>
                    <Col
                        lg={{ size: 6, offset: 3 }}
                        className="header-description"
                    >
                        <img src={Play} className="play-button" alt="" />
                        <h1 className="header-title">RINGS</h1>
                        <p>EVIL IS REBORN</p>
                        <p>
                            Paramount Pictures have just released the first
                            trailer for the upcoming Horror movie “Rings“.{' '}
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header
