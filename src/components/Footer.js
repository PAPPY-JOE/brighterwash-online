import React from 'react';
import "../assets/Footer.css";
// import { HashLink } from 'react-router-hash-link';

function Footer() {
  let tempDate = new Date();
  let date = `${tempDate.getFullYear()} `;

  return (
    <div className='footer'>
    <div className='footer-block'>
      <div className='footer-col col-1'>
      <h3>About Us</h3>
          <p>
            Brighter Wash provides a highly personalized, convenient, on-demand
            dry-cleaning and laundry service. We have integrated quality and
            reliable service into every aspect of our operations which makes us
            cleaner, quicker and your garments fresher. Cheers!
          </p>
      </div>

      <div className='footer-col col-2'>
        <h3>Useful Links</h3>
            <ul>
              <li>
                {/* <HashLink> */}
                  <p>F.A.Q.</p>
                {/* </HashLink> */}
              </li>
              <li>
                {/* <HashLink> */}
                  <p>Prices</p>
                {/* </HashLink> */}
              </li>
              <li>
                {/* <HashLink> */}
                  <p>Customer Reviews</p>
                {/* </HashLink> */}
              </li>
              <li>
                {/* <HashLink> */}
                  <p>Coverage Areas</p>
                {/* </HashLink> */}
              </li>
          </ul>
      </div>

      <div className="footer-col col-3">
          <h3>Get in touch</h3>
          <li>
            {/* <HashLink> */}
              {" "}
              <p>+234912958129</p>
            {/* </HashLink> */}
          </li>
          <li>
            {/* <HashLink */}
            {/* //  onClick={this.makeCall} */}
            {/* > */}
              {" "}
              <p>+2348133179968</p>
            {/* </HashLink> */}
          </li>
          <li>
            {/* <HashLink> */}
              {" "}
              <p>+2348034823847</p>
            {/* </HashLink> */}
          </li>
      </div>

      <div className="footer-col col-4">
          <h3>Follow Us</h3>
          <ul>
            <li>
              {/* <HashLink> */}
                <p>Facebook</p>
              {/* </HashLink> */}
            </li>
            <li>
              {/* <HashLink> */}
                <p>Twitter</p>
              {/* </HashLink> */}
            </li>
            <li>
              {/* <HashLink> */}
                <p>Instagram</p>
              {/* </HashLink> */}
            </li>
            <li>
              {/* <HashLink> */}
                <p>Youtube</p>
              {/* </HashLink> */}
            </li>
          </ul>
      </div>
    </div> 

    <div className="copyright">Copyright © {date} - Brighter Wash</div>
    </div>
  )
}

export default Footer