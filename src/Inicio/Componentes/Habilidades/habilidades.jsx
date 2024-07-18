import React, { useEffect } from "react";
import './habilidades.css';
import Aos from "aos";
import 'aos/dist/aos.css';

function Habilidades() {

    useEffect(() => {
        Aos.init({
            duration: 2000, 
        });
    }, []);

    return (
        <section className="container" id="habilidades">
            <div className="row d-flex">
                <div className="col-md-4 col-12 align-self-center order-md-2 order-1 img-skill" data-aos="fade-up">
                    <h3><u>Dê uma Olhada</u></h3>
                    <img src="/img/img-skills.png" alt="" className="img-fluid " />
                </div>

                <div className="col-md-8 col-12 text-skill order-md-1 order-2" data-aos="fade-down">
                    <h1>Minhas Habilidades</h1>
                    <p>Com minha experiência no desenvolvimento de projetos acadêmicos e habilidades em design de interfaces web, sou capaz de criar soluções inovadoras e visualmente atraentes para diversos tipos de projetos.</p>

                    <div className="row skills">
                        <div className="col-md-5 col-12 box-skill">
                            <div className="box-icon">
                                <div className="cor-hover position-absolute start-0 top-0 bottom-0"></div>
                                <img src="/img/icon-html.png" alt="" className="img-fluid" />
                                <h2 className="mb-0">HTML5</h2>
                                <label className="text-end d-flex justify-content-end">91%</label>
                                <progress value={91} max={100} className="w-100 mb-5"></progress>
                            </div>
                        </div>
                        <div className="col-md-5 col-12 box-skill">
                            <div className="box-icon">
                                <div className="cor-hover position-absolute start-0 top-0 bottom-0"></div>
                                <img src="/img/icon-css.png" alt="" className="img-fluid" />
                                <h2 className="mb-0">CSS3</h2>
                                <label className="text-end d-flex justify-content-end">91%</label>
                                <progress value={91} max={100} className="w-100 mb-5"></progress>
                            </div>
                        </div>
                        <div className="col-md-5 col-12 box-skill">
                            <div className="box-icon">
                                <div className="cor-hover position-absolute start-0 top-0 bottom-0"></div>
                                <img src="/img/icon-bootstrap.png" alt="" className="img-fluid" />
                                <h2 className="mb-0">Bootstrap</h2>
                                <label className="text-end d-flex justify-content-end">91%</label>
                                <progress value={91} max={100} className="w-100 mb-5"></progress>
                            </div>
                        </div>
                        <div className="col-md-5 col-12 box-skill">
                            <div className="box-icon">
                                <div className="cor-hover position-absolute start-0 top-0 bottom-0"></div>
                                <img src="/img/icon-javacript.png" alt="" className="img-fluid" />
                                <h2 className="mb-0">JavaScript</h2>
                                <label className="text-end d-flex justify-content-end">91%</label>
                                <progress value={91} max={100} className="w-100 mb-5"></progress>
                            </div>
                        </div>
                        <div className="col-md-5 col-12 box-skill">
                            <div className="box-icon">
                                <div className="cor-hover position-absolute start-0 top-0 bottom-0"></div>
                                <img src="/img/icon-reactjs.png" alt="" className="img-fluid" />
                                <h2 className="mb-0">React.js</h2>
                                <label className="text-end d-flex justify-content-end">91%</label>
                                <progress value={91} max={100} className="w-100 mb-5"></progress>
                            </div>
                        </div>
                        <div className="col-md-5 col-12 box-skill">
                            <div className="box-icon">
                                <div className="cor-hover position-absolute start-0 top-0 bottom-0"></div>
                                <img src="/img/icon-mysql.png" alt="" className="img-fluid" />
                                <h2 className="mb-0">MySQL</h2>
                                <label className="text-end d-flex justify-content-end">91%</label>
                                <progress value={91} max={100} className="w-100 mb-5"></progress>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Habilidades;
