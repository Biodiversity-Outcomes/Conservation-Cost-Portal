import HeroSection from "../components/HeroSection.jsx"
import "./Collecting.css"

function Collecting(){
    return (
        <>
            <HeroSection 
                title="Collecting Cost Data"
                image="/assets/pictures/Sedona.webp"
            />

            <div className="collecting-content">
                <h2>There are three general contexts for collecting cost data:</h2>

                <h3>1. Designing costing protocols for ongoing projects</h3>
                    <div className="indented-content">
                        <p>Projects that aim to estimate costs of ongoing conservation interventions have the flexibility to design data collection systems to meet their needs.</p>
                        <p>
                            One approach draws upon using/designing a data collection system within a project management system. 
                            This can include recording costs in relation to specified project result chains (detailing of actions needed to achieve an outcome). {" "}
                            <a href="https://conbio.onlinelibrary.wiley.com/doi/full/10.1111/csp2.70007"
                                target="_blank"
                                rel="noopener noreferrer">
                                Gurrero-Pineda et al., 2025 
                            </a>
                            {" "} provides an Excel based worksheet to support such a system.
                        </p>
                        <p> 
                            Miradi (and {" "}
                            <a href="https://www.miradishare.org/ux/home"
                                target="_blank"
                                rel="noopener noreferrer">
                                Miradi Share 2.0
                            </a>
                            ) software can also be used to design a project management system that can track the costs of implementing different actions and impact of those actions on the desired outcome. 
                            Bush Heritage Australia has been a leader in the approach (some of their projects can be viewed in {" "}
                            <a href="https://www.miradishare.org/ux/home"
                                target="_blank"
                                rel="noopener noreferrer">
                                Miradi Share
                            </a>
                            ).
                        </p>
                        <p>
                            Other fields, such as public health, also can provide insight into how to design interventions that can be considered in terms of both cost and effectiveness. {" "}
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0006320716305778"
                                target="_blank"
                                rel="noopener noreferrer">
                                Cook et al 2017
                            </a>
                            , calls for, and provides strategies for communicating return-on-investment of conservation initiatives using strategies drawn from the field of public health.
                        </p>
                    </div>

                <h3>2. Retroactively collecting cost data on completed projects</h3>
                    <div className="indented-content">
                        <p>
                            A more common situation is that the costs of an intervention need to be assessed retroactively. 
                            This can be difficult because available data are not at the appropriate resolution or scale to support the desired analysis. 
                            The following resources discuss costing frameworks that can tackle some of these difficulties and promote representative and comprehensive compilation of relevant data.
                        </p>

                        <ul>
                            <li>
                                <a href="https://link.springer.com/article/10.1007/s10530-017-1627-6"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                        Wenger et al 2017
                                </a>
                            {" "} — An accounting framework to estimate the costs of eradicating invasive species on islands including scaling with area and terrain and consideration of travel costs.
                            </li>
                            <li>
                                <a href="https://www.epa.gov/sites/default/files/2017-09/documents/ee-0568-08.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                        EPA Guidelines for Performing Economic Analyses: Chapter 8
                                </a>
                                {" "} — broad guidelines for how to assess the costs of activities.
                            </li>
                            <li>
                                <a href="https://onlinelibrary.wiley.com/doi/10.1111/rec.13515"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                        Bodin et al 2021
                                </a>
                                {" "} — TEER's standardized framework for collecting consistent cost and benefit data for ecosystem restoration.
                            </li>
                            <li>
                                <a href="https://conbio.onlinelibrary.wiley.com/doi/10.1111/cobi.13827"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                        Murphy et al 2021
                                </a>
                                {" "} — A decision support framework to assess the economic, social, and ecological costs and benefits of plastic pollution interventions, highlighting factors related to the distribution of costs across stakeholders.
                            </li>
                            <li>
                                <a href="https://conbio.onlinelibrary.wiley.com/doi/full/10.1111/csp2.12840"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                        White et al 2022
                                </a>
                                {" "} — A systematic approach to assess and record the economic implications of conservation efforts inspired by methodologies used in healthcare.
                            </li>
                        </ul>
                    </div>
                
                <h3>3. Predicting future costs</h3>
                    <div className="indented-content">
                        <p>Predicted costs of conservation interventions are often based on retroactive data, but can include different considerations (e.g. {" "}
                            <a href="https://nyaspubs.onlinelibrary.wiley.com/doi/abs/10.1111/nyas.12455"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Armsworth 2014
                            </a>
                            ).
                        </p>
                        <ul>
                            <li>
                                <a href="https://www.cnlm.org/par/#1530902718855-44de7204-0a71"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                        Center for Natural Lands Management
                                </a>
                                {" "} — tool to estimate management costs for protected areas
                            </li>
                            <li>
                                <a href="https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/1365-2664.14377"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                        Yong et al 2023
                                </a>
                                {" "} —  describes process of creating predictive cost models for 18 threat abatement strategies in Australia
                            </li>
                            <li>
                                <a href="https://esajournals.onlinelibrary.wiley.com/doi/full/10.1002/fee.2626"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                        Nolte et al 2023
                                </a>
                                {" "} — Analysts can estimate land protection costs using public land acquisition data and machine learning models, revealing urban proximity as the primary cost driver in the Colombian Andes and highlighting the need for systematic cost record collection to inform biodiversity protection decisions.
                            </li>
                            <li>
                                The Nature Conservancy's Conservation Gateway site offers a {" "}
                                <a href="https://www.researchgate.net/publication/317958556_Long-Term_Stewardship_Calculator_Accompanying_Handbook"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                        Long-Term Stewardship Calculator and Accompanying Handbook
                                </a>
                                {" "} offering resources for practitioners to calculate management costs over decades.
                            </li>
                        </ul>
                    </div>
            </div>
        </>
    )
}

export default Collecting;
