import HeroSection from "../components/HeroSection.jsx"
import "./Studies_Data.css"

function Studies_Data(){
    return (
        <>
            <HeroSection 
                title="Cost Studies and Data in the Literature"
                image="/assets/pictures/GC.webp"
            />

            <div className="studies_data-content">
                <p>
                    We are compiling published literature (and eventually aim to include grey literature) that includes conservation intervention cost data.  
                    The goal of this compilation is to provide examples of how costs have been used and reported, and also to track the extent of the literature.
                </p>
                <p>
                    This viewable {" "}
                    <a href="https://docs.google.com/spreadsheets/d/1oEjnBPJamU0iGZ5TUoRiiRNQCbbbAvmp8PHJWi7Xyb8/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer">
                        google document
                    </a>
                    {" "} details research studies we have come across that contain cost information.  
                </p>
                <p>
                    If you would like to add a case study please use this {" "}
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfschXiXH9hAdfZFtoiHFb6h1nSiDTN9lAQmf4MHHIBG5_Ikw/viewform?usp=sf_link"
                        target="_blank"
                        rel="noopener noreferrer">
                        google form
                    </a>
                    {" "} or email {" "}
                    <a href="mailto:Gwen.Iacona@asu.edu">
                        Dr. Gwen Iacona
                    </a>
                    {" "} with copies of papers or reports that would be useful to the community.
                </p>
                <h2>Cost Datasets</h2>
                <p>
                Cost datasets relevant to conservation efforts:
                </p>
                <ul>
                    <li>
                        The {" "}
                        <a href="https://tescost.el.erdc.dren.mil/Default.aspx"
                            target="_blank"
                            rel="noopener noreferrer">
                            Army Corps of Engineering
                        </a>
                        {" "} has been tracking expenditures on {" "}
                        <a href="https://link.springer.com/article/10.1007/s00267-005-0298-8"
                            target="_blank"
                            rel="noopener noreferrer">
                            ESA listed species
                        </a>
                        {" "} compliance and recovery actions.
                    </li>
                    <li>
                        <a href="https://invacost.fr/en/accueil/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Frank Courchamp and team
                        </a>
                        {" "} have been developing a database on the costs of invasion.
                    </li>
                    <li>
                        <a href="https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/1365-2664.14377"
                            target="_blank"
                            rel="noopener noreferrer">
                            Yong et al 2023
                        </a>
                        {" "} — Costs for threat abatement strategies across Australia show significant variation, ranging from $24 to $879,985 per square kilometer ($0.24–$8880 per hectare). 
                        The costs encompass various components, including labor, consumables, travel, and equipment.
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Studies_Data;