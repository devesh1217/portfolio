import React from 'react';
import './StyleSheet/welcome.css'
import Typed from 'react-typed'

function Welcome() {
  return (
    <div id="welcome">
        <span id='welcome-text'><Typed strings={['नमस्ते','सुस्वागतम्...']} typeSpeed={150} loopCount={1}/></span>
    </div>
  )
}
export default Welcome