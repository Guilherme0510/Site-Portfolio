import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import './banner.css';
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import Aos from "aos";

function Banner() {

    useEffect(() => {
        const tiltElements = document.querySelectorAll("[data-tilt]");
        VanillaTilt.init(tiltElements, {
            max: 25,
            speed: 200,
            glare: false,
        });
        return () => {
            tiltElements.forEach(element => {
                element.vanillaTilt.destroy();
            });
        };
    }, []);

    useEffect(() => {
        Aos.init({
            duration: 1500, 
        });
    }, []);

    return (
        <section className="banner" id="inicio">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12 align-self-center text-banner text-center" data-aos="fade-up-right">
                        <h5>Oi, meu nome é</h5>
                        <h1>Guilherme Silva!</h1>
                        <h4>Desenvolvedor Front-End</h4>
                        <div className="btn-social">
                            <Link to={''} className="btn btn-linkedin">Linkedin</Link>
                            <Link to={''} className="btn btn-github">GitHub</Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 position-relative">
                        <div className="banner-image-wrapper" data-tilt data-aos="fade-left">
                            <img src="../img/img-banner.png" className="img-fluid custom-image-size" alt="Imagem do banner" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
