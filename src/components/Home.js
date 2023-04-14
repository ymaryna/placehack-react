import { React, useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import './Home.css'
import img0 from '../assets/img/fondo-cabecera_01.jpg'
import img1 from '../assets/img/fondo-cabecera_02.jpg'
import img2 from '../assets/img/fondo-cabecera_03.jpg'
import img3 from '../assets/img/fondo-cabecera_04.jpg'
import Filters from "./Filters";
import { Link } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>CHOOSE YOUR PREFERENCES</h4>
          <p>Choose only one of each category</p>
          <Filters />
        </Modal.Body>
      </Modal>
    );
  }  

const Home = () => {
    const [modalShow, setModalShow] = useState(false);
    const [bgImg, setBgImg] = useState()

    const backgroundImg = (max) => {
      const arr = [img0, img1, img2, img3]
      let rand = Math.random() * max
      rand = Math.floor(rand)
      return arr[rand];
    }

    useEffect(() => {
      setBgImg(backgroundImg(4))
    }, [])

    return (
          <div className="home" style={{backgroundImage: `linear-gradient(rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url(${bgImg})`}}>
              <h1>DISCOVER YOUR NEXT DESTINATION</h1>
              <hr className="divider" />
              <h4>What will be your next adventure?</h4>
              <div className="d-flex justify-content-around buttons">
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                  Get me a place
                  </Button>
                  <Link className="btn-primary btn btn-random" to="/search?random=true">Random</Link>
                  {/* <Link className="btn-primary btn btn-random" to="/search2?continent=europe">Random</Link> */}
              </div>

              <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
              />
          </div>
    )
}

export default Home