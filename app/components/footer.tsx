import React from "react";

function Footer() {
  return (
    <footer className=" text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Kaleb. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
