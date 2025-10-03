import "./About.css"
import HeroSection from "../components/HeroSection"

function About(){

    // object to store all the content
    // update the content here
    const content = {
        title: "About",
        subtitles: [
            "Why track and report the cost of conservation interventions?",
            "Funding for this portal provided by the Arthur and Elaine Johnson Foundation."
        ],
        paragraphs: [
            "This website offers resources to help scientists and practitioners identify and report on conservation intervention cost data and enable cost-effective conservation practice.",
            "Understanding the economic costs of conservation is necessary for conservation decision support and to achieve the greatest conservation outcomes in a funding limited world. However, considering how to estimate these costs is often an afterthought. There has been a recent push to develop approaches to improve how conservation scientists and practitioners collect and use conservation cost data to enable best-practice conservation decision support methods such as prioritization or return-on-investment analyses. Yet, there is still difficulty in implementing these approaches. This portal aims to summarize cutting-edge approaches to collecting and reporting on the costs of conservation interventions and to provide a centralized repository of materials that can be used to help track and report the costs of conservation interventions."
        ]
    }

    return (
        <>
            <HeroSection 
                title="Conservation Intervention Cost Data Portal"
                image="/assets/pictures/Sedona.webp"
            />

            <div className="about-content">
                <h1>{content.title}</h1>
                    <p>{content.paragraphs[0]}</p>
                <h2>{content.subtitles[0]}</h2>
                    <p>{content.paragraphs[1]}</p>
                <h3>{content.subtitles[1]}</h3>
            </div>
        </>
    )
}

export default About;