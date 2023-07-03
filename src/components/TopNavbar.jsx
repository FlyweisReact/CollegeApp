import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img28 from "../Images/c1.png";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import img27 from "../Images/c59.png";

const TopNavbar = (props) => {
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowNavbar(false);
        setShowNavbar2(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function NavMenu() {
    return (
      <>
        <div className="menu1">
          <h3>Top Exams</h3>
          <div className="menu2">
            <div className="menu3">
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="menu4"></div>
            <div className="menu3">
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="menu4"></div>
            <div className="menu3">
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="menu4"></div>
            <div className="menu3">
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="menu4"></div>
          </div>
        </div>
      </>
    );
  }

  const [showNavbar2, setShowNavbar2] = useState(false);
  function NavMenu2() {
    return (
      <>
        <div className="menu1">
          <h3>Top Universities</h3>
          <div className="menu2">
            <div className="menu3">
              <h6>Delhi</h6>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="menu4"></div>
            <div className="menu3">
              <h6>Mumbai</h6>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="menu4"></div>
            <div className="menu3">
              <h6>Chennai</h6>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="menu4"></div>
            <div className="menu3">
              <h6>Bangalore</h6>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="menu4"></div>
          </div>
        </div>
      </>
    );
  }

  const handleClick = () => {
    setShowNavbar((prev) => !prev);
  };

  const handleClick2 = () => {
    setShowNavbar2((prev) => !prev);
  };
  const moreMenu = [
    {
      name: "Institute",
      link: "/screen2",
    },
    {
      name: "Q&A  ",
    },
    {
      name: "Test and Services  ",
      link: "/test",
    },
    {
      name: "Practice Questions",
    },

    {
      name: "Loan",
      link: "/loan",
    },

    {
      name: "Reviews",
    },

    {
      name: "Counsellor Connect",
      link: "/council-connect",
    },
    {
      name: "Become a partner",
      link: "/become-partner",
    },
    {
      name: "One Stop Solution",
      link: "/one-stop",
    },
    {
      name: "Profile",
      link: "/profile",
    },
  ];

  const [show, setShow] = useState(false);

  function MyVerticallyCenteredModal(props) {
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


  const data = [
    "Top Universities " , "Top Courses"
  ]

  return (
    <>
      <div className="home3">
        <img
          src={img28}
          alt=""
          onClick={() => navigate("/")}
          className="logoimg"
        />
        <>
          <div className="drop3">
            {/* <div ref={dropdownRef}>
              <p onClick={() => setShowNavbar(!showNavbar)} >Top Universities</p>
              {showNavbar &&   
                <NavMenu2 />
              }
            </div>
            <div ref={dropdownRef}>
              <p onClick={() => setShowNavbar(!showNavbar)} >Top Courses</p>
              {showNavbar &&   
                <NavMenu2 />
              }
            </div> */}

            {data.map((i , index) => (
                  <div ref={dropdownRef}>
                    <p onClick={() => setShowNavbar(true)} style={{color:props.color}}> {i} </p>
                  </div> 
            ))}

            <p
              onClick={() => navigate("/scholarships")}
              style={{ color: props.color }}
            >
              Scholarship
            </p>
            <div ref={dropdownRef}>
                <p onClick={() => setShowNavbar2(true)} style={{color:props.color}}> Exams </p>
              </div> 
            <p
              onClick={() => navigate("/common-applications")}
              style={{ color: props.color }}
            >
              Common Application
            </p>
            <p onClick={() => navigate("/loan")} style={{ color: props.color }}>
              Loan
            </p>
            <p onClick={handleClick} style={{ color: props.color }}>
              Admission 2023
            </p>
            {/*Records?.map((ele, i) =>
                  ele?.item ? (
                    <Dropdown key={i}>
                      <Dropdown.Toggle variant="none" id="dropdown-basic">
                        {ele?.name}
                      </Dropdown.Toggle>
                      <div className="drop1">
                        <Dropdown.Menu style={{ display: "flex" }}>
                          {ele?.item?.map((element) => (
                            <Dropdown.Item>
                              <div className="drop2">
                                {element?.name}
                                {element?.subItems?.map((ele, i) => (
                                  <>
                                    <p>{ele}</p>
                                  </>
                                ))}
                              </div>
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </div>
                    </Dropdown>
                  ) : (
                      <p
                        onClick={() => navigate(ele?.link)}
                      >
                        {ele?.name}
                      </p>
                  )
                )*/}
          </div>
        </>
        <p style={{ paddingTop: "5px" }} className="navp">
          <Dropdown>
            <Dropdown.Toggle
              variant="none"
              id="dropdown-basic"
              style={{ color: props.color }}
              className="navp"
            >
              More
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {moreMenu?.map((ele, i) => (
                <Dropdown.Item href={ele?.link}>{ele?.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </p>
        <div className="login10" style={{ marginTop: "-31px" }}>
          <i class="fa-solid fa-user" style={{ color: props.color }}></i>
          <p onClick={() => setShow(true)} style={{ color: props.color }}>
            Login
          </p>
        </div>
      </div>
      {showNavbar ? <NavMenu2 /> : ""}
      {showNavbar2 ? <NavMenu /> : ""}
      <MyVerticallyCenteredModal show={show} onHide={() => setShow(false)} />
    </>
  );
};

export default TopNavbar;
