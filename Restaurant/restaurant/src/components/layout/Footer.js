import React from "react";

const Footer = () => {
  return (
    <footer className="footer font-small bg-primary mt-2" style={footerStyling}>
      <div className="footer-copyright text-center py-3">
        © 2017 Copyright:
        <span className="text-light">{' '}Restaurant</span>
      </div>
    </footer>
  );
};

const footerStyling = {
    position:  'absolute',
    bottom: 0,
    width: '100%',
    height: '50px',
}
export default Footer;
