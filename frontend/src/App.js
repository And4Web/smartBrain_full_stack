import React from 'react'
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import FaceRecognition from './components/faceRecognition/FaceRecognition'; 

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Logo/>
      {/* <ImageLinkForm/>
      <FaceRecognition/> */}
      
    </div>
  );
}

export default App;
