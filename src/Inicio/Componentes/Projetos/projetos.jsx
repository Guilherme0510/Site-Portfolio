import React, { useEffect } from "react";
import './projetos.css'
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';


function Projetos() {

    useEffect(() => {
        Aos.init({
            duration: 2000, 
        });
    }, []);

    return (

        <section className="container" id="projetos">
            <div className="row projetos">
                <div className="text-center py-3 mb-3">
                    <h1>Meus Projetos</h1>
                </div>
            </div>

            <div className="row projetos" data-aos="fade-left">
                <div className="col-md-7 col-12 order-md-1 order-1 img-projeto">
                    <img src="/img/img-projeto1.png" alt="Projeto 1" className="img-fluid" />
                    <div className="borda"></div>
                </div>
                <div className="col-md-5 col-12 order-md-2 order-2 text-projeto" >
                    <h2>Ds Hair Espaço Mulher</h2>
                    <p>O projeto "Ds Hair Espaço Mulher" é um site desenvolvido com o objetivo principal de proporcionar maior visibilidade ao salão de beleza. Com um design elegante e funcional, o site oferece uma experiência única aos usuários, destacando os serviços exclusivos oferecidos pelo salão. Trabalhando de perto com o cliente para capturar a essência do seu negócio, criando uma plataforma online que não só informa, mas também cativa e inspira clientes em potencial.</p>
                    <Link to={'https://dshairespacomulher.netlify.app'} className="btn btn-projeto">Ver mais</Link>
                </div>
            </div>

            <div className="row projetos mt-5 pt-3" data-aos="fade-right">
                <div className="col-md-5 col-12 order-md-1 order-2 text-projeto">
                    <h2>Cobra Operante</h2>
                    <p>O projeto "Cobra Operante" é uma landing page desenvolvida para um projeto acadêmico, com o objetivo de apresentar de forma profissional uma empresa fictícia de vendas. A página detalha as operações e informações essenciais da empresa "Cobra Operante", proporcionando uma visão clara e atraente de seus serviços. Este projeto destaca a capacidade de criar uma interface web informativa e visualmente agradável.</p>
                    <Link to={'https://guilherme0510.github.io/Projeto-Cobra-Operante/'} className="btn btn-projeto">Ver mais</Link>
                </div>
                <div className="col-md-7 col-12 order-md-2 order-1 img-projeto">
                    <img src="/img/img-projeto2.png" alt="Projeto 2" className="img-fluid" />
                    <div className="borda"></div>
                </div>
            </div>

        </section >


    );
}

export default Projetos
