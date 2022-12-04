import React from "react";
import "./imageLinkForm.css";

function ImageLinkForm() {
  return (
    <div>
      <p className="f3">
        {
          "This Artificial Brain will detect faces from your picture. Give it a try."
        }
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input style={{border: 'none', outline: 'none'}} className="f4 pa2 w-70 center" type="text" />
          <button className="button w-30 center link pv2 ph3 dib white bg-light-purple grow f4 pointer">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
