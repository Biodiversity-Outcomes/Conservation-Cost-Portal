import HeroSection from "../components/HeroSection.jsx"
import "./Reporting.css"

function Reporting(){
    return (
        <>
            <HeroSection 
                title="Reporting on Cost Data"
                image="/assets/pictures/Sedona.webp"
            />

            <div className="reporting-content">
                    <p>
                    Reporting on cost data that have been used in analyses or reports needs to be thorough enough so that they can interpreted appropriately. These materials walk through standards for what information should be included when data are reported and provide a worksheet for providing "metadata" for cost data when it is included in published papers or reports.
                    ​</p>
                    <ul>
                        <li>
                            <a href="https://conbio.onlinelibrary.wiley.com/doi/abs/10.1111/cobi.13195"
                                target="_blank"
                                rel="noopener noreferrer">
                                Iacona et al 2018
                            </a>
                            : Cost Reporting Workbook for download under article's "Supporting Information"
                        </li>
                        <li>
                            <a href="https://conbio.onlinelibrary.wiley.com/doi/epdf/10.1111/csp2.70007"
                                target="_blank"
                                rel="noopener noreferrer">
                                ​Guerrero-Pineda et al 2025
                            </a>
                                : The article discusses the development of a data management system designed to enhance cost-efficiency in conservation projects by integrating cost data with intervention outcomes. It aids managers in making informed decisions on budget allocation by providing a structured approach to tracking and analyzing costs relative to conservation benefits, illustrated through a case study involving the red spiny lobster fishery in the Galápagos Marine Reserve.
                            <br></br>
                            <a href="https://306499c8-58fc-48ca-99b5-11d4d7e31a7b.filesusr.com/ugd/fa9b8c_6e8cf98e819640d09df6bf3822977603.docx?dn=csp270007-sup-0001-supinfo%20(2).docx"
                                target="_blank"
                                rel="noopener noreferrer">
                                Supporting Information
                            </a>
                        </li>
                    </ul>
            </div>
        </>
    )
}

export default Reporting;