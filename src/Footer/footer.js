import "./footer.css";
import profileone from "../Profiles/Brenda.jpg";
import profiletwo from "../Profiles/Lavender.jpg";
import profilethree from "../Profiles/Valentine.jpg";
import profilefour from "../Profiles/Nakato.jpg";
import logos from "../Assets/subii main logo.jpg"
import facebook from "../Profiles/facebook.svg";
import twitter from "../Profiles/twitter.svg";
import google from "../Profiles/google.svg";


const Footer = () => {
  return (
    <div>
      <div className="Meetus">
        <h2 className="meetus">Meet Us</h2>
        <div className="meet">
        <img src={profilefour} alt="Nakato" className="images"/>
        <img src={profilethree} alt="Valentine" className="images"/>
        <img src={profiletwo} alt="Lavender" className="images"/>
        <img src={profileone} alt="Brenda" className="images"/>

          </div>
          <div className="meet-details">
          <div>
          
          <h4>Nakato Musana</h4>
          <p>Product Manager</p>
          
          
          {/* <img scr={profileone} alt="Brenda" className="images" /> */}
        </div>
        <div>
          
          <h4>Valentine Nkatha</h4>
          <p>Android Developer</p>
        </div>
        <div>
        
          <h4>Lavender Anyango</h4>
          <p>Software Developer</p>
          
        </div>
        <div>
        
          <h4>Brenda Khamali</h4>
          <p>Designer</p>
          
        </div>
        </div>
      </div>
      <footer>
      <img src={logos} alt="logos" className="logos"/>
        <div className="footer-section">
          
          <p>
            
            About Us
          </p>
          <p>
            Mission
          </p>
          <p>
            The Team
          </p>
        </div>
        <div className="footer-content">
          <p>Programs</p>
          <p className="link"> <a href="https://akirachix.com/programs/codeHive/">CodeHive</a></p>
          <p className="link"> <a href="https://akirachix.com/programs/codeHiveX/">CodeHiveX</a></p>
          <p className="link"><a href="https://akirachix.com/programs/#instructors">The Instructors</a></p>
          <p>Tech Allies</p>
        </div>
        <div className="footer-content">
          <p>Get In Touch</p>
          <p className="link"><a href="https://akirachix.com/">616 Korongo Road,off Ndege Road,Karen</a></p>
          <p className="link"><a href="https://akirachix.com/">info@akirachix.com</a></p>
          <div>
            <img src={facebook} alt="facebook" className="Icons"/>
            <img src={google} alt="google" className="Icons"/>
            <img src={twitter} alt="twitter" className="Icons"/>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
