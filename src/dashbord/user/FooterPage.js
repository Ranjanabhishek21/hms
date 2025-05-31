import React, { Fragment, Link } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function FooterPage() {
  return (
    <Fragment>
      <footer className="section section-footer footer mt2">
        <div className="container">
          <h4 className="mb-4"><span>Hotels in India</span></h4>
          <div class="row align-items-start">
            <div class="col col-sm-6 col-md-6 col-lg-6">
              <h2 className="">Newsletter</h2>
              <h3 class="footer__title">Follow Us</h3>
              <ul className="">
                <li className="list-inline-item">Instagram</li>
                <li className="list-inline-item">Twitter</li>
                <li className="list-inline-item">Youtube</li>
                <li className="list-inline-item">Facebook</li>
                <li className="list-inline-item">Linkedin</li>
              </ul>
              <div className="text-formatted">
                <p>©2025 The Leela Palaces, Hotels and Resorts. All Rights Reserved.</p></div>
            </div>
            <div className="col col-sm-3 col-md-3 col-lg-3">
              <ul className="nav navbar-nav">
                <li className="list-item">About Us</li>
                <li className="list-item">Sustainability</li>
                <li className="list-item">Loyalty</li>
                <li className="list-item">Manage Reservations</li>
                <li className="list-item">Contact Us</li>
                <li className="list-item">Mahatma Mandir Convention and Exhibition Centre</li>
                <li className="list-item">Investors</li>
                <li className="list-item">- Schloss Bangalore Limited (Equity)</li>
                <li className="list-item">- Moonburg Power Private Limited (Debt)</li>
                <li className="list-item">- Tulsi Palace Resort Private Limited (Debt)</li>
                <li className="list-item">&#x00A0;</li>
                <li className="list-item">Privacy Policy&#x2002;Legal&#x2002;Terms &#x0026; Conditions</li>
              </ul>
            </div>
            <div class="col col-sm-3 col-md-3 col-lg-3">
              <ul className="nav navbar-nav">
                <li className="list-item">Gift Card</li>
                <li className="list-item">Awards and Accolades</li>
                <li className="list-item">Press Room</li>
                <li className="list-item">The Leela Magazine</li>
                <li className="list-item">Travel Diaries</li>
                <li className="list-item">Best Rate Guarantee</li>
                <li className="list-item">Careers</li>
                <li className="list-item">Connoisseur Club</li>
                <li className="list-item">Investor &#x0026; Grievance Queries</li>
                <li className="list-item">Security Alert: Beware of Fake, Fraudulent &#x0026; Unauthorised Websites</li>
                <li className="list-item">&#x00A0;</li>
                <li className="list-item">Change Cookie Preferences</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}

export default FooterPage
