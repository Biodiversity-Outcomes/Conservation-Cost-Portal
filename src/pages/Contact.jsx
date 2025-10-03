import "./Contact.css"
import HeroSection from "../components/HeroSection"

function Contact(){

    return (
        <>
            <HeroSection 
                title="Contact Us"
                image="/assets/pictures/GC.webp"
            />

            <div className="contact-content">
                <h1>Let's Connect!</h1>
                <h2>Email us at biodiversity@asu.edu</h2>
            </div>
        </>
    )
}

export default Contact;