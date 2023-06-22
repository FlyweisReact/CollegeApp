import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";
import TopPart2 from "./TopPart2";
import img4 from "../Images/c36.png";
import img5 from "../Images/c37.png";
import img6 from "../Images/c38.png";

const Scholarship = () => {
  const navigate = useNavigate();
  const [slideShow2, setSlideShow2] = useState(8);
  useEffect(()=>{
      if(window.innerWidth < 800){

          setSlideShow2(3);
      }
      else if(window.innerWidth > 800 && window.innerWidth < 1100){
          setSlideShow2(3);
      }
      else setSlideShow2(4);
  })
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const settings3 = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: slideShow2,
    slidesToScroll: 1,
    autoplay: true,
  };



  return (
    <>
      <TopPart2 />
      <div className="home25" style={{ marginTop: "60px" }}>
        <div className="home26">
          <Slider {...settings3}>
            <div className="home29">
              <button className="home27">City Name</button>
            </div>
            <div className="home29">
              <button className="home28">MBA/PGDM</button>
            </div>
            <div className="home29">
              <button className="home28">B.sc</button>
            </div>
            <div className="home29">
              <button className="home28">B.Com</button>
            </div>
            <div className="home29">
              <button className="home28">BA</button>
            </div>
            <div className="home29">
              <button className="home28">BE/B.Tech</button>
            </div>
            <div className="home29">
              <button className="home28">BEA/BBM</button>
            </div>
            <div className="home29">
              <button className="home28">M.sc</button>
            </div>
            <div className="home29">
              <button className="home28">M.A</button>
            </div>
            <div className="home29">
              <button className="home28">B.F.A</button>
            </div>
            <div className="home29">
              <button className="home28">M.F.A</button>
            </div>
            <div className="home29">
              <button className="home28">B.Design</button>
            </div>
            <div className="home29">
              <button className="home28">M.Design</button>
            </div>
          </Slider>
        </div>
      </div>
      <div className="sch5">
        <div className="sch6">
          <div className="sch14">
            <div className="sch15">
              <h6>Shree Ram College-Delhi University</h6>
              <hr className="sch16" />
              <div className="sch17">
                <ul>
                  <li>International student eligible : yes</li>
                  <li>Amount : Variable Amount</li>
                  <li>Type : Full-Ride-Scholarship</li>
                  <li>Level of Study : Bachelor</li>
                  <li>No. of Scholarships : 20</li>
                </ul>
                <p onClick={()=>navigate("/read-more")}>Read More</p>
              </div>
              <div className="sch18">
                <button className="sch19">Apply Now</button>
                <button className="sch20">Get Alert</button>
              </div>
            </div>
            <div className="sch15">
              <h6>Shree Ram College-Delhi University</h6>
              <hr className="sch16" />
              <div className="sch17">
                <ul>
                  <li>International student eligible : yes</li>
                  <li>Amount : Variable Amount</li>
                  <li>Type : Full-Ride-Scholarship</li>
                  <li>Level of Study : Bachelor</li>
                  <li>No. of Scholarships : 20</li>
                </ul>
                <p>Read More</p>
              </div>
              <div className="sch18">
                <button className="sch19">Apply Now</button>
                <button className="sch20">Get Alert</button>
              </div>
            </div>
            <div className="sch15">
              <h6>Shree Ram College-Delhi University</h6>
              <hr className="sch16" />
              <div className="sch17">
                <ul>
                  <li>International student eligible : yes</li>
                  <li>Amount : Variable Amount</li>
                  <li>Type : Full-Ride-Scholarship</li>
                  <li>Level of Study : Bachelor</li>
                  <li>No. of Scholarships : 20</li>
                </ul>
                <p>Read More</p>
              </div>
              <div className="sch18">
                <button className="sch19">Apply Now</button>
                <button className="sch20">Get Alert</button>
              </div>
            </div>
            <div className="sch15">
              <h6>Shree Ram College-Delhi University</h6>
              <hr className="sch16" />
              <div className="sch17">
                <ul>
                  <li>International student eligible : yes</li>
                  <li>Amount : Variable Amount</li>
                  <li>Type : Full-Ride-Scholarship</li>
                  <li>Level of Study : Bachelor</li>
                  <li>No. of Scholarships : 20</li>
                </ul>
                <p>Read More</p>
              </div>
              <div className="sch18">
                <button className="sch19">Apply Now</button>
                <button className="sch20">Get Alert</button>
              </div>
            </div>
            <div className="sch15">
              <h6>Shree Ram College-Delhi University</h6>
              <hr className="sch16" />
              <div className="sch17">
                <ul>
                  <li>International student eligible : yes</li>
                  <li>Amount : Variable Amount</li>
                  <li>Type : Full-Ride-Scholarship</li>
                  <li>Level of Study : Bachelor</li>
                  <li>No. of Scholarships : 20</li>
                </ul>
                <p>Read More</p>
              </div>
              <div className="sch18">
                <button className="sch19">Apply Now</button>
                <button className="sch20">Get Alert</button>
              </div>
            </div>
            <div className="sch15">
              <h6>Shree Ram College-Delhi University</h6>
              <hr className="sch16" />
              <div className="sch17">
                <ul>
                  <li>International student eligible : yes</li>
                  <li>Amount : Variable Amount</li>
                  <li>Type : Full-Ride-Scholarship</li>
                  <li>Level of Study : Bachelor</li>
                  <li>No. of Scholarships : 20</li>
                </ul>
                <p>Read More</p>
              </div>
              <div className="sch18">
                <button className="sch19">Apply Now</button>
                <button className="sch20">Get Alert</button>
              </div>
            </div>
          </div>
        </div>
        <div className="sch7">
          <div className="sch8">
            <h4>Application for Admission are Open</h4>
            <hr className="sch9" />
            <div className="sch10">
              <div className="sch11">
                <img src={img4} alt="" />
                <div className="sch12">
                  <h6>Lorem Ipsum</h6>
                  <p>Dorem Ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="sch13">
                <button>Apply Now</button>
              </div>
            </div>
            <hr className="sch9" />
            <div className="sch10">
              <div className="sch11">
                <img src={img4} alt="" />
                <div className="sch12">
                  <h6>Lorem Ipsum</h6>
                  <p>Dorem Ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="sch13">
                <button>Apply Now</button>
              </div>
            </div>
            <hr className="sch9" />
            <div className="sch10">
              <div className="sch11">
                <img src={img4} alt="" />
                <div className="sch12">
                  <h6>Lorem Ipsum</h6>
                  <p>Dorem Ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="sch13">
                <button>Apply Now</button>
              </div>
            </div>
            <hr className="sch9" />
            <div className="sch10">
              <div className="sch11">
                <img src={img4} alt="" />
                <div className="sch12">
                  <h6>Lorem Ipsum</h6>
                  <p>Dorem Ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="sch13">
                <button>Apply Now</button>
              </div>
            </div>
            <hr className="sch9" />
            <div className="sch10">
              <div className="sch11">
                <img src={img4} alt="" />
                <div className="sch12">
                  <h6>Lorem Ipsum</h6>
                  <p>Dorem Ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="sch13">
                <button>Apply Now</button>
              </div>
            </div>
            <hr className="sch9" />
            <div className="sch10">
              <div className="sch11">
                <img src={img4} alt="" />
                <div className="sch12">
                  <h6>Lorem Ipsum</h6>
                  <p>Dorem Ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="sch13">
                <button>Apply Now</button>
              </div>
            </div>
            <hr className="sch9" />
          </div>
        </div>
      </div>
      <div className="sch21">
        <div className="sch22">
          <h6>Top Rated Scholarship</h6>
          <hr className="sch23" />
          <div className="sch24">
            <h5>Ontario Graduate Scholarship</h5>
            <p>Amount: $10,847, Deadline: June 2023</p>
          </div>
          <hr className="sch25" />
          <div className="sch24">
            <h5>Ontario Graduate Scholarship</h5>
            <p>Amount: $10,847, Deadline: June 2023</p>
          </div>
          <hr className="sch25" />
          <div className="sch24">
            <h5>Ontario Graduate Scholarship</h5>
            <p>Amount: $10,847, Deadline: June 2023</p>
          </div>
          <hr className="sch25" />
          <div className="sch24">
            <h5>Ontario Graduate Scholarship</h5>
            <p>Amount: $10,847, Deadline: June 2023</p>
          </div>
        </div>
        <div className="sch26">
          <img src={img5} alt="" />
        </div>
        <div className="sch27">
          <h6>Scholarship Helpline Number</h6>
          <div className="sch28">
            <p>Helpline Number 2230220230</p>
          </div>
          <div className="sch29">
            <p>Most Popular Links</p>
          </div>
          <div className="sch30">
            <p>Study in Delhi College</p>
          </div>
          <div className="sch30">
            <p>Study in Chandigarh College</p>
          </div>
          <div className="sch30">
            <p>Study in Mumbai College</p>
          </div>
          <div className="sch30">
            <p>Study in Pune College</p>
          </div>
          <div className="sch30">
            <p>Study in Bangalore College</p>
          </div>
          <div className="sch30">
            <p>Study in Jaipur College</p>
          </div>
          <div className="sch30">
            <p>Study in Noida College</p>
          </div>
          <div className="sch30">
            <p>Study in Amity College</p>
          </div>
          <div className="sch30">
            <p>Study in Ontario College</p>
          </div>
        </div>
      </div>
      <div className="sch31">
        <img src={img6} alt="" />
      </div>
      <Footer />
    </>
  );
};

export default Scholarship;
