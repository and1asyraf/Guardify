import TextSliderApp from './TextSliderApp';
import SubTextSliderApp from './SubTextSliderApp';
import BoxSlider from './BoxSlider';
import logo from './image/logo.png';
import bg from './image/BG-01-01.png';

const Home = () => {

     
    
    return ( 

       
        <div className="home">
            <div className='BackgroundHome'>
                <img src={bg} alt='bgimg'></img>
            </div>
            {/*<h2>Homepage</h2>*/}
           {/*<BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>*/}
           <div className='WelcomeText'>
           <img src ={logo} alt='logoimage'></img>
           {/*<p className='slide-in-text'>WELCOME TO GUARDIFY SDN BHD</p>*/}

            </div>

            <div className='AnimatedSlide'>
      <TextSliderApp/>
      <SubTextSliderApp/>
      <BoxSlider/>
      </div>
            
        </div>
        
     );
}
 
export default Home;