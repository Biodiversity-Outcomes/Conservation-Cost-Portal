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
                <div className="video-gallery">

                        <div className="video-item">
                            <div className="video-container">
                                <iframe
                                src="https://www.youtube.com/embed/4raaF9xVf8A?si=v7-2ed39HhdG9Hik"
                                title="Module 1: Why Collect Cost Data and What Constitutes Good Cost Data?"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                ></iframe>
                            </div>
                            <p className="video-title">Module 1: Why Collect Cost Data and What Constitutes Good Cost Data?</p>
                        </div>

                        <div className="video-item">
                            <div className="video-container">
                                <iframe
                                src="https://www.youtube.com/embed/L41wk3TYoqM?si=ygpS8t80-jyy156l"
                                title="ICCB Costing Workshop - Module 2: How to Report on Cost Data"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                ></iframe>
                            </div>
                            <p className="video-title">Module 2: How to Report on Cost Data</p>
                        </div>

                        <div className="video-item">
                            <div className="video-container">
                                <iframe
                                src="https://www.youtube.com/embed/cbd4PTUMN18?si=MTDIfjSxUQXLIBd-"
                                title="ICCB Costing Workshop - Module 1: Why Collect Cost Data and What Constitutes Good Cost Data?"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                ></iframe>
                            </div>
                            <p className="video-title">Module 1: Why Collect Cost Data and What Constitutes Good Cost Data?</p>
                        </div>
                    </div>
                
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
                                src="https://www.youtube.com/embed/zr5Y50DrDu4?si=hg7Jt2nPwj0i3YSw"
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
                    <div className="video-gallery">

                        <div className="video-item">
                            <div className="video-container">
                                <iframe
                                src="https://www.youtube.com/embed/dZCvO9X0L2o?si=6Diz7_75qviCrKSM"
                                title="ICCB Workshop - Introducción"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                ></iframe>
                            </div>
                            <p className="video-title">Introducción</p>
                        </div>

                        <div className="video-item">
                            <div className="video-container">
                                <iframe
                                src="https://www.youtube.com/embed/fjsKlJeUs1o?si=78kGbTx7JRrAOqxx"
                                title="ICCB Workshop - Contexto"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                ></iframe>
                            </div>
                            <p className="video-title">Contexto</p>
                        </div>

                        <div className="video-item">
                            <div className="video-container">
                                <iframe
                                src="https://www.youtube.com/embed/JIEZ-YZRoBg?si=9ekXwbP-sQObVOFK"
                                title="ICCB Workshop - Ingreso Datos"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                ></iframe>
                            </div>
                            <p className="video-title">Ingreso Datos</p>
                        </div>

                        <div className="video-item">
                            <div className="video-container">
                                <iframe
                                src="https://www.youtube.com/embed/Bj9eiXvGv0I?si=Cr9CpKv_RjxpIx6I"
                                title="ICCB Workshop - Resumen"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                ></iframe>
                            </div>
                            <p className="video-title">Resumen</p>
                        </div>

                        <div className="video-item">
                            <div className="video-container">
                                <iframe
                                src="https://www.youtube.com/embed/4mWYe75JSQM?si=emo5rBq0CNGZ4lYD"
                                title="ICCB Workshop - Conclusión"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                ></iframe>
                            </div>
                            <p className="video-title">Conclusión</p>
                        </div>

                    </div>


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