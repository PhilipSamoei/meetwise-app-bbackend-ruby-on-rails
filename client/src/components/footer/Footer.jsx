import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuestionCircle, FaEnvelope, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => (
  <footer className="page-footer font-small blue pt-4" style={{ backgroundColor: '#0EF6CC' }}>
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-capitalize" style={{ fontSize: 30, fontWeight: 'bold' }}>
          Meet<span style={{color: '#B38B59',fontSize: '20px'}}>wise</span>
          </h5>
          <p style={{ fontSize: 24 }}>𝓜𝓪𝓴𝓲𝓷𝓰 𝓜𝓮𝓶𝓸𝓻𝓲𝓮𝓼, 𝓞𝓷𝓮 𝓔𝓿𝓮𝓷𝓽 𝓐𝓽 𝓐 𝓣𝓲𝓶𝓮</p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-capitalize">𝐔𝐬𝐞 Meetwise</h5>
          <ul className="list-unstyled">
            <li>
              <Link to="/events/create">
                <FaQuestionCircle /> 𝐂𝐫𝐞𝐚𝐭𝐞 𝐄𝐯𝐞𝐧𝐭𝐬
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaQuestionCircle /> 𝐇𝐨𝐦𝐞
              </Link>
            </li>
            <li>
              <Link to="/faqs">
                <FaQuestionCircle /> 𝐅𝐀𝐐𝐬
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-capitalize">𝐋𝐢𝐧𝐤𝐬</h5>
          <ul className="list-unstyled">
            <li>
              <a href="">
                <FaEnvelope />
              </a>
            </li>
            <li></li>
            <li>
              <a href="https://www.twitter.com/">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://web.facebook.com/">
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="text-center py-3" style={{ color: 'white', backgroundColor: 'black' }}>
      © 2023 Meetwise. All rights reserved.
      <a href="https://mdbootstrap.com/" className="text-white"></a>
    </div>
  </footer>
);

export default Footer;
