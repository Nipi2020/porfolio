import {Container,Col,Row, Button} from "react-bootstrap"
const Intro = () =>{
    return (

        <div className='intro'>
        <Container className="text-white d-flex text-center justify-content-center
         align-items-center">     
          <Row>
            <Col>
            <divx className="Gratis" >NONTON GRATIS</divx>
            <div  className="Gratis">HENTE MAKE DUIT</div>
            <div className="IntroButton mt-4 text-center">
                <Button variant="dark">Lihat Semua List</Button>
            </div>
            </Col>
          </Row>
        </Container>
        </div>
    )
}
export default Intro;