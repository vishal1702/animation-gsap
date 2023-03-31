import React from "react";

const DisplaySection = ({ triggerPreview }) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Brilliant.</p>
      <span className="description">Lorem ipsum dolor sit amet</span>
      <button className="button" onClick={triggerPreview}>
        Try me!
      </button>
      <button className="back-button" onClick={handleScrollToTop}>
        Top
      </button>
    </div>
  );
};

export default DisplaySection;
