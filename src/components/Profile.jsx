import React, {useState} from "react";
import LoanNavbar from "./LoanNavbar";
import MobileLoanNavbar from "./MobileLoanNavabr";
import Footer from "./Footer";
import Sidebar2 from "./Sidebar2"
import Offcanvas from 'react-bootstrap/Offcanvas';

const Profile = () => {
    const [show2, setShow2] = useState(false);
    const handleClose = () => setShow2(false);
    const handleShow = () => setShow2(true);
  return (
    <>
      <LoanNavbar />
      <div className="home100">
          <i class="fa-solid fa-bars" onClick={handleShow}></i>
        </div>
      <div className="profile1">
        <div className="profile2">
            <Sidebar2 />
        </div>
        <div className="profile3">
          <div className="profile4">
            <h4>Basic Details</h4>
            <div className="profile5">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Full Name" />
            </div>
          </div>
          <div className="profile4">
            <h4>Contact Details</h4>
            <div className="profile5">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Full Name" />
            </div>
          </div>
          <div className="profile4">
            <h4>Educational Details</h4>
            <h6>Class X</h6>
            <div className="profile5">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Full Name" />
            </div>
            <h6>Class XII</h6>
            <div className="profile5">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Full Name" />
            </div>
            <h6>Graduation</h6>
            <div className="profile5">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Full Name" />
            </div>
          </div>
          <div className="profile6">
            <h6>Exam Details</h6>
            <p>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum
                , ac aliquet odio mattis.</p>
          </div>
          <div className="profile4">
            <h4>Preferences</h4>
            <div className="profile5">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Full Name" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Offcanvas show={show2} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <MobileLoanNavbar />
            <Sidebar2 />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Profile;
