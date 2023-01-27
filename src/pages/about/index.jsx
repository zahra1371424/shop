import { Container } from "react-bootstrap";
import './about.style.scss';

const About = () =>
{
  return <>
     <Container>
     <div class="about-section">
        <div class="inner-container">
            <h1>About Us</h1>
            <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
            </p>
            <div class="skills">
            <span>Fashion Style</span>
            <span>Brand Clothing</span>
            <span>Shipping worldwide</span>
            </div>
        </div>
    </div>
     </Container>
   </>
}

export default About;