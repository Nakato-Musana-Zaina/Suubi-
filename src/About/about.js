import  './about.css'
import aboutus from '../image/aboutus.jpg'
import quality from '../image/quality.jpeg'
import qualitys from '../image/qualitys.png'
import trusts from '../image/trusts.png'

function About(){
    return(
        <div>
             <h2> About Us</h2>
        <div className='about'>
            
            <div>
              <img src={aboutus} alt='About' className='aboutimage'></img>
            </div>
            <div>
                <p className='abouttext'>We have member tools which will enable<br/> your Sacco Member to save, borrow and <br/> repay through their mobile phones. </p>
                <br/>
                <h3> Our Core Values Are:</h3>
                <div className='values'>
                <p> <img src={trusts} alt=" trust" className='trust'/>  Trust </p>
                <p> <img src={quality} alt=" Quality" className='quality'/> Quality </p>
                <p> <img src={qualitys} alt=" Efficiency" className='efficiency'/> Efficiency </p>
                </div>
                
            </div>
        </div>
        </div>
       
    );
};
export default About