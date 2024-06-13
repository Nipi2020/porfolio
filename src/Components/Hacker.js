import { Container, Row, Col, Card, Image } from "react-bootstrap"
import hackerBg from "../asset/images/Hacker/hacker1.jpeg"
import Crime from "../asset/images/Hacker/Crime.jpg"
import black from "../asset/images/Hacker/BLACK.jpg"
import pentes from "../asset/images/Hacker/PENTES.jpeg"
import head from "../asset/images/Hacker/HEAD.jpg"
import hacker6 from "../asset/images/Hacker/hacker6.jpeg"

const Hacker = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">MOVIES HACKER</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper">
                        <Card className="moveimage">
                            <Image src={hackerBg} alt="vinaImage" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-2 text-white text-center">
                                    <Card.Title className="text-center text-white">MATRIX</Card.Title>
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
                            <Image src={Crime} alt="vinaImage" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-2  text-white text-center">
                                    <Card.Title className="text-center text-white">HACKER CRIME </Card.Title>
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
                            <Image src={black} alt="vinaImage" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-2  text-white text-center">
                                    <Card.Title className="text-center text-white">BLACKHAT</Card.Title>
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
                            <Image src={pentes} alt="vinaImage" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-2 text-white text-center">
                                    <Card.Title className="text-center text-white">HACKER</Card.Title>
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
                            <Image src={head} alt="vinaImage" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-2 text-white text-center">
                                    <Card.Title className="text-center text-white">HACKING SENCE</Card.Title>
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
                            <Image src={hacker6} alt="vinaImage" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-2 text-white text-center">
                                    <Card.Title className="text-center text-white">HACKER WHOAMI</Card.Title>
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
export default Hacker