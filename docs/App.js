import Navbar from './Navbar';
import Home from './Home';
import Services from './Services';
import About from './About';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Training from './Training';
import ServicePage from './ServicePage';
import Contact from './Contact';
import ServiceSlideImage from './ServiceSlideImage';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar />
      
      <div className='content'>
      <Switch>
        <Route exact path="/">
          <Home/>
          <Services/>
          <Training/>
        </Route>
        <Route path="/services">
        <ServicePage/>
        <ServiceSlideImage/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
        <Contact/>
          <div className='ContactCont'></div>
        </Route>
        <Route path="/test">
          <ServiceSlideImage/>
        </Route>
      </Switch>
      


      </div>

      
     
    </div>
    </Router>
    
  );
}

export default App;
