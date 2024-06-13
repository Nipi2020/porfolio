import { Card, Col, Container, Row, Image } from "react-bootstrap"
import vinaImage from "../asset/images/Horor/vina.jpeg"
import badarawuhi from "../asset/images/Horor/badarawuhi.jpeg"
import zombie from "../asset/images/Horor/zombie.png"
import Suster_ngesot from "../asset/images/Horor/Suster_Ngesot.jpg"
import Sundel_bolong from "../asset/images/Horor/Sundel_Bolong.jpg"
import lampir from "../asset/images/Horor/film-lampir.jpeg"
const Horor = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">MOVIES HOROR</h1>s
                <br/>
                <Row>
                    <Col md = {4} className="movieWrapper">
                        <Card className="moveimage">
                            <Image src={vinaImage} alt="vinaImage" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-2 text-center text-white">
                                <Card.Title className="text-center text-white">VINA</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider atural lead-in
                                    to additional content. This co
                                </Card.Text>
                                <Card.Text className="text-left" >Last updated 3 mins ago </Card.Text>
                                </div>
                            </div>
                        </Card>

                    </Col>

                    <Col md={4} className="movieWrapper">
                        <Card className="moveimage">
                            <Image src={badarawuhi} alt="vinaImage" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-2 text-center text-white">

                                <Card.Title className="text-center text-white">BADRAWIH </Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider atural lead-in
                                    to additional content. This co
                                </Card.Text>
                                <Card.Text className="text-left" >Last updated 3 mins ago </Card.Text>
                                </div>
                            </div>
                        </Card>

                    </Col>
                    <Col md = {4} className="movieWrapper">
                        <Card className="moveimage">
                            <Image src={zombie} alt="vinaImage" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-2 text-white text-center">

                                <Card.Title className="text-center text-white">ZOMBIE</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider atural lead-in
                                    to additional content. This co
                                </Card.Text>
                                <Card.Text className="text-left" >Last updated 3 mins ago </Card.Text>
                                </div>
                            </div>
                        </Card>

                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="moveimage">
                            <Image src={Suster_ngesot} alt="vinaImage" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-2 text-white text-center">

                                <Card.Title className="text-center text-white">SUSTER NGESOT</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider atural lead-in
                                    to additional content. This co
                                </Card.Text>
                                <Card.Text className="text-left" >Last updated 3 mins ago </Card.Text>
                                </div>
                            </div>
                        </Card>

                    </Col>
                    <Col md={4}className="movieWrapper">
                        <Card className="moveimage">
                            <Image src={Sundel_bolong} alt="vinaImage" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-2  text-white text-center">

                                <Card.Title className="text-center text-white   ">SUNDELBOLONG</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider atural lead-in
                                    to additional content. This co
                                </Card.Text>
                                <Card.Text className="text-left" >Last updated 3 mins ago </Card.Text>
                                </div>
                            </div>
                        </Card>

                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="moveimage">
                            <Image src={lampir} alt="vinaImage" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-2 text-white text-center">

                                <Card.Title className="text-center text-white">LAMPIR</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider atural lead-in
                                    to additional content. This co
                                </Card.Text>
                                <Card.Text className="text-left" >Last updated 3 mins ago </Card.Text>
                                </div>
                            </div>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Horor;