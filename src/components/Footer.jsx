import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content  mx-auto">
      <div className="footer sm:footer-horizontal p-8 max-w-[90%] mx-auto">
        <div>
          <h6 className="footer-title">CS — Ticket System</h6>
          <p>
            Lorem Ipsum is simply dummy text of the <br /> printing and
            typesetting industry. Lorem Ipsum has been <br /> the industry's
            standard dummy text ever since the <br /> 1500s, when an unknown
            printer took a galley <br /> of type and scrambled it to make a type
            specimen book.
          </p>
        </div>
        <div>
          <h6 className="footer-title">Company</h6>
          <a>About us</a>
          <a>Our Mission</a>
          <a>Contact Sales</a>
        </div>
        <div>
          <h6 className="footer-title">Services</h6>
          <a>Products & Services</a>
          <a>Customer Stories</a>
          <a>Download Apps</a>
        </div>
        <div>
          <h6 className="footer-title">Information</h6>
          <a>Privacy Policy </a>
          <a>Terms & Conditions</a>
          <a>Join Us</a>
         </div>
         <div>
          <h6 className="footer-title">Social Links</h6>
          <div className="grid grid-rows-3 gap-4">
            <a className="flex "> <span className="text-4xl -mt-3"> ⓕ</span> @CS — Ticket System</a>
            <a className="flex "> <span className="text-2xl -mt-2"> ▶️</span>  @CS — Ticket System</a>
            <a className="flex "> <span className="text-2xl -mt-2"> ✉</span> @CS — Ticket System</a>
          </div>
        </div>
      </div>
       <hr />
      <div className="  text-center text-xs py-4">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
