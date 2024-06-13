


import Navigation from './Components/Navigation';
import './Style/landingPage.css'
import Intro from './Components/Intro';
import Hacker from './Components/Hacker';
import Horor from './Components/Horor';


function App() {
  return (
    <div>
      {/* INTOR SECTION */}
  <div className='myBG'>
        <Navigation/>
        <Intro/>
  </div>
  {/* OF INTRO */}
  {/* HOROR */}
  <div className='Horor'>
    <Horor/>
  </div>
  {/* of HOROR */}
  <div className='hackerBg'>
    <Hacker/>
  </div>
    </div>
  );
}

export default App;
