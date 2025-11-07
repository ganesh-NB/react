import logo from './logo.png';
import './App.css';
function Navbar() {  
    return (
        <nav className="navbar">
              
            <h3 className="name">Ganesh NB</h3>
            <button className="home-button">Home</button>
            <button className="skills-button">Skills</button>
            <button className="projects-button">Projects</button>
            <button className="resume-button">Resume</button>
            <button className="blog-button">Blog-section</button>
            <button className="contact-button">Contact</button>
            <hr />
            <img className="logo" src={logo} alt="Logo" />
            <hr />


        </nav>
    );
}
export default Navbar
