import "./About.css"
import HeroSection from "../components/HeroSection"

function About(){
    return (
        <>
            <HeroSection 
                title="Conservation Intervention Cost Data Portal"
                image="/assets/pictures/Sedona.webp"
            />

            <div className="about-content">
                <h1>About</h1>
                    <p>This website offers resources to help scientists and practitioners identify and report on conservation intervention cost data and enable cost-effective conservation practice.</p>
                <h2>Why track and report the cost of conservation interventions?</h2>
                    <p>Understanding the economic costs of conservation is necessary for conservation decision support and to achieve the greatest conservation outcomes in a funding limited world. However, considering how to estimate these costs is often an afterthought. There has been a recent push to develop approaches to improve how conservation scientists and practitioners collect and use conservation cost data to enable best-practice conservation decision support methods such as prioritization or return-on-investment analyses. Yet, there is still difficulty in implementing these approaches. This portal aims to summarize cutting-edge approaches to collecting and reporting on the costs of conservation interventions and to provide a centralized repository of materials that can be used to help track and report the costs of conservation interventions.</p>
                <h3>Funding for this portal provided by the Arthur and Elaine Johnson Foundation.</h3>

                <a id="cbo-logo-horizontal" href="https://globalfutures.asu.edu/center-for-biodiversity-outcomes/" target="_blank">
                    <img src="/assets/icons/Horizontal_CBO_Logo.png" alt="CBO Logo" />
                </a>
            </div>
        </>
    )
}

export default About;