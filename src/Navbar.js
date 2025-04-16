import imagepath from "./image/logo.png";



const Navbar
 = () => {

    return ( 


        <nav className="navbar">
        <div className="links">
        <img src={imagepath} alt="Guardify logo"></img>
        
            <a href="/">HOME</a>
            <a href="/about">ABOUT</a>
            <a href="/contact">CONTACT</a>
            <a href="/services">SERVICES</a>
       
        
        </div>
        </nav>



     );
}
 
export default Navbar;
    

