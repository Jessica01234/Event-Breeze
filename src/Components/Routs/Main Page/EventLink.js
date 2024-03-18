import React from "react";
import { useLocation } from "react-router-dom";

function EventLink() {
  const location = useLocation();
  const registrationLink = location.state.registrationLink;

  return (
    <nav className="container-fluid eventLinkMainContainer">
      <div className="row eventLinkContainer">
      <h3 className="mt-5 mb-5">Event Created Successfully</h3>
      <div className="linkDiv d-flex">{registrationLink}<p>copy Link</p></div>
      </div>
    </nav>
  );
}

export default EventLink;
