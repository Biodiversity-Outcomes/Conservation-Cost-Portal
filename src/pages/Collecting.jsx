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
                    <p>Projects that aim to estimate costs of ongoing conservation interventions have the flexibility to design data collection systems to meet their needs.</p>
                    <p>
                        One approach draws upon using/designing a data collection system within a project management system. 
                        This can include recording costs in relation to specified project result chains (actions to achieve an outcome). 
                        Miradi (and {" "}
                        <a href="https://www.miradishare.org/ux/home"
                            target="_blank"
                            rel="noopener noreferrer">
                            Miradi Share 2.0
                        </a>
                        ) is software that enables users to design a project management system that can track the costs of implementing different actions and impact of those actions in relation to the desired outcome. 
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
                        , calls for, and provides strategies for communicating return-on-invesment of conservation initiatives.
                    </p>

                <h3>2. Retroactively collecting cost data on completed projects</h3>
                    <p>
                        A more common situation is that the costs of an intervention need to be assessed retroactively. 
                        This can often be difficult because available data are not at the appropriate resolution or scale to support the desired analysis. 
                        These resources discuss the development and application of costing approaches and frameworks that can tackle some of these difficulties and promote representative and comprehensive compilation of relevant data.
                    </p>

                    <ul>
                        <li>
                            <a href="https://link.springer.com/article/10.1007/s10530-017-1627-6"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Wenger et al 2017
                            </a>
                        {" "} — Collaboration with island managers to develop eradication protocols for invasive species and created an accounting framework to estimate costs accurately, revealing scaling with area and terrain influence, offering guidance for strategic environmental management decisions.
                        </li>
                        <li>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0006320716305778"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Cook et al 2017
                            </a>
                            {" "} — Standardizing cost data collection and reporting in conservation, inspired by health care economic evaluations, could enhance evidence-informed decision-making, facilitating the identification of cost-effective interventions and supporting greater integration of science into management decisions.
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
                            {" "} — TEER's standardized framework addresses the finance gap in ecosystem restoration by providing consistent cost and benefit data, improving budgeting and access to finance while enhancing project success.
                        </li>
                        <li>
                            <a href="https://conbio.onlinelibrary.wiley.com/doi/10.1111/cobi.13827"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Murphy et al 2021
                            </a>
                            {" "} — A decision support framework was developed to assess the economic, social, and ecological costs and benefits of plastic pollution interventions, highlighting factors influencing costs and distribution across stakeholders, offering a method to estimate and compare intervention costs across different contexts.
                        </li>
                        <li>
                            <a href="https://conbio.onlinelibrary.wiley.com/doi/full/10.1111/csp2.12840"
                                target="_blank"
                                rel="noopener noreferrer">
                                    White et al 2022
                            </a>
                            {" "} — The article outlines a systematic approach to assess and record the economic implications of conservation efforts, enhancing decision-making through a detailed framework inspired by methodologies used in healthcare.
                        </li>
                    </ul>
                
                <h3>3. Predicting future costs</h3>
                    <p>In some cases, predicted costs of intervention are needed. These often are based on retroactive data, but there can be different considerations (e.g. Armsworth 2014).</p>
                    <ul>
                        <li>
                            <a href="https://www.cnlm.org/par/#1530902718855-44de7204-0a71"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Center for Natural Lands Management
                            </a>
                            {" "} — estimates management costs for protected areas.
                        </li>
                        <li>
                            <a href="https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/1365-2664.14377"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Yong et al 2023
                            </a>
                            {" "} —  Created cost models for 18 Threat Abatement Strategies in Australia, offering consistent budgeting for biodiversity management and informing conservation planning processes and target setting.
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
                            <a href="Long-Term Stewardship Calculator and Accompanying Handbook"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Long-Term Stewardship Calculator and Accompanying Handbook
                            </a>
                            {" "} offering resources for practitioners to calculate management costs over decades.
                        </li>
                    </ul>
            </div>
        </>
    )
}

export default Collecting;
