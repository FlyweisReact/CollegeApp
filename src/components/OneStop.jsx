import React from "react";
import TopPart2 from "./TopPart2";
import TopPart3 from "./TopPart3";
import Footer from "./Footer";

const OneStop = () => {

  return (
    <>
      <TopPart2 />
      <TopPart3 />
      <div className="one1">
        <div className="one2">
          <div className="one3">
            <label>TITLE</label>
            <select>
              <option value="">Select</option>
              <option value="">1</option>
              <option value="">1</option>
            </select>
          </div>
          <div className="one3">
            <label>First Name</label>
            <input type="text" />
          </div>
          <div className="one3">
            <label>Last Name</label>
            <input type="text" />
          </div>
          <div className="one3">
            <label>Gender</label>
            <select>
              <option value="">Select</option>
              <option value="">1</option>
              <option value="">2</option>
            </select>
          </div>
        </div>
        <div className="one2">
          <div className="one3">
            <label>Father's Name</label>
            <input type="text" />
          </div>
          <div className="one3">
            <label>Mother's Name</label>
            <input type="text" />
          </div>
          <div className="one3">
            <label>Category</label>
            <select>
              <option value="">Select</option>
              <option value="">1</option>
              <option value="">2</option>
            </select>
          </div>
        </div>
        <div className="one2">
          <div className="one3">
            <label>Nationality</label>
            <select>
              <option value="">Select</option>
              <option value="">1</option>
              <option value="">2</option>
            </select>
          </div>
          <div className="one3">
            <label>Contact No</label>
            <input type="text" />
          </div>
          <div className="one3">
            <label>Alternate Contact Number</label>
            <input type="text" />
          </div>
          <div className="one3">
            <label>Email</label>
            <input type="text" />
          </div>
        </div>
        <div className="one2">
          <div className="one3">
            <label>Aadhar No</label>
            <input type="text" />
          </div>
          <div className="one3">
            <label>Address</label>
            <input type="text" />
          </div>
          <div className="one3">
            <label>City</label>
            <input type="text" />
          </div>
        </div>
        <div className="one2">
          <div className="one3">
            <label>State</label>
            <input type="text" />
          </div>
          <div className="one3">
            <label>Pin Code</label>
            <input type="text" />
          </div>
          <div className="one3">
            <label>Country</label>
            <input type="text" />
          </div>
        </div>
        <div className="tst7">
          <h6>Highest Qualification </h6>
          <div class="radio-inline">
            <input type="radio" id="option1" name="radio-group" />
            <label for="option1">12th</label>

            <input type="radio" id="option2" name="radio-group" />
            <label for="option2">Diploma</label>

            <input type="radio" id="option3" name="radio-group" />
            <label for="option3">Graduation</label>
            <input type="radio" id="option3" name="radio-group" />
            <label for="option3">Other</label>
          </div>
        </div>
        <div className="one4">
          <h5>Remarks</h5>
          <textarea></textarea>
        </div>
        <button className="one5">Submit</button>
      </div>
      <Footer />
    </>
  );
};

export default OneStop;
