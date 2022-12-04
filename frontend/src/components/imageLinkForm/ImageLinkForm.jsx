import React, {useState} from "react";
import "./imageLinkForm.css";

function ImageLinkForm() {
  const [input, setInput] = useState();
  const onButtonSubmit = (e) => {
    setInput(e.target.value);
    console.log(input)
    console.log("clicked")
  }
  return (
    <div>
      <p className="f3">
        {
          "This Artificial Brain will detect faces from your picture. Give it a try."
        }        
      </p>
      {input}
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input style={{border: 'none', outline: 'none'}} className="f4 pa2 w-70 center" type="text" onChange={(e)=>setInput(e.target.value)} />
          <button className="button w-30 center link pv2 ph3 dib white bg-light-purple grow f4 pointer" onClick={onButtonSubmit}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
