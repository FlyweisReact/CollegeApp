import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import MobileLoanNavbar from "./MobileLoanNavabr";
import img from "../Images/c34.png";
import img2 from "../Images/c35.png";
import img3 from "../Images/c1.png";
import MyVerticallyCenteredModal from "./CouncilModal";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import img27 from "../Images/c59.png";

const TopPart2 = ()=>{
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
    };

    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow2(false);
    const handleShow = () => setShow2(true);
    const [showt, setShowt] = useState(false);
    function MyVerticallyCenteredModal2(props) {
      console.log("Hello");
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <>
              <div className="login1">
                <div className="login2">
                  <h4>Login</h4>
                  <div className="login3">
                    <div className="login4">
                      <div className="login8">
                        <div className="login6">
                          <p>+91</p>
                        </div>
                        <div className="login7">
                          <input
                            type="text"
                            placeholder="Enter your mobile number"
                          />
                        </div>
                      </div>
                      <div className="login9">
                        <button>Request OTP</button>
                      </div>
                    </div>
                    <div className="login5">
                      <img src={img27} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          </Modal.Body>
        </Modal>
      );
    }
  

    return (
        <div className="home1">
          <MyVerticallyCenteredModal
            show={show}
            onHide={() => show(false)}
            setShow = {setShow}
          />
          <MyVerticallyCenteredModal2 
      show={showt} onHide={() => setShowt(false)} />
        <Slider {...settings}>

          <div className="car1">
            <img src={img} alt=""/>
          </div>
          <div className="car1">
            <img src={img2} alt=""/>
          </div>
        </Slider>
        <div className="home2">
        <div className="home100">
          <i class="fa-solid fa-bars" onClick={handleShow}></i>
        </div>
          <div className=" sch1">
            <img src={img3} alt="" onClick={() => navigate("/")} />
            <div className="sch3">
              <p>Courses</p>
              <p>Colleges</p>
              <p>Style Guide</p>
              <p onClick={()=>navigate("/test2")}>Test</p>
              <p onClick={()=>setShow(true)}>Get Counselling</p>
            </div>
            <div className="sch4" onClick={()=>setShowt(true)}>
              <i class="fa-solid fa-user"></i>
              <p>Login</p>
            </div>
          </div>
          <div className="home4">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search for colleges, exams, Q & A, articles"
            />
          </div>
          <div className="home5 sch2">
            <h2>Getting Quality Education is Now More Easy...</h2>
          </div>
          <div className="home6">
            <button onClick={() => navigate("/screen2")}>
              Explore College & University
            </button>
          </div>
        </div>
        <Offcanvas show={show2} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <MobileLoanNavbar />
        </Offcanvas.Body>
      </Offcanvas>
      </div>
    )
}

export default TopPart2;