import HeroSection from "../components/HeroSection.jsx"
import "./Tutorials.css"

function Tutorials(){
    return (
        <>
            <HeroSection 
                title="Tutorial Videos"
                image="/assets/pictures/GC.webp"
            />

            <div className="tutorials-content">
                <h2>Costing Workshop</h2>
                
                <h2>Costing Worksheet</h2>
                <h3 className="header-subtitle">Designing a data management system for cost data</h3>
                {/* NOTE: when adding or updating video links, make sure to insert embed/ after .com/ */}
                    <h3>English:</h3>

                    <div className="video-gallery">

                        <div className="video-item">
                            <div className="video-container">
                                <iframe
                                src="https://www.youtube.com/embed/watch?v=mENQ4xJi-gg&list=PLkFQW5ziN6oZ7kBRZflZzYBzlflcZFiwJ&index=1"
                                title="ICCB Workshop - Module 4: 1.Introduction"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                ></iframe>
                            </div>
                            <p className="video-title">Introduction</p>
                        </div>

                        <div className="video-item">
                            <div className="video-container">
                                <iframe
                                src="https://www.youtube.com/embed/watch?v=zr5Y50DrDu4&list=PLkFQW5ziN6oZ7kBRZflZzYBzlflcZFiwJ&index=3"
                                title="ICCB Workshop - Module 4: 2.Context"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                ></iframe>
                            </div>
                            <p className="video-title">Context</p>
                        </div>

                        <div className="video-item">
                            <div className="video-container">
                                <iframe
                                src="https://www.youtube.com/embed/watch?v=rslB0Le1QBk&list=PLkFQW5ziN6oZ7kBRZflZzYBzlflcZFiwJ&index=3"
                                title="ICCB Workshop - Module 4: 3.Data Input"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                ></iframe>
                            </div>
                            <p className="video-title">Data Input</p>
                        </div>

                        <div className="video-item">
                            <div className="video-container">
                                <iframe
                                src="https://www.youtube.com/embed/watch?v=GRh4-A6kymc&list=PLkFQW5ziN6oZ7kBRZflZzYBzlflcZFiwJ&index=4"
                                title="ICCB Workshop - Module 4: 4.Summary"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                ></iframe>
                            </div>
                            <p className="video-title">Summary</p>
                        </div>

                    </div>
                    <h3>Español:</h3>

                <h2>Podcast: Cost Accounting</h2>
                <div className="video-gallery">
                    <div className="video-item">
                        <div className="video-container">
                            <iframe
                            src="https://www.youtube.com/embed/R6HqeGr8wY8?si=pUJivQ9oyMbvxKJT"
                            title="Cost Accounting of Interventions"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            ></iframe>
                        </div>
                        <p className="video-title">Cost Accounting of Interventions</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tutorials;