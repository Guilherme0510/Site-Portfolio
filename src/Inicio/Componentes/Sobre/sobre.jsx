import React, { useEffect } from "react";
import './sobre.css';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Sobre() {

    const pdfurl = 'https://drive.google.com/file/d/1mIaVo5L5szaUd1viRvIa0RYerM-jKoOx/view?usp=sharing';

    useEffect(() => {
        AOS.init({
            duration: 2000, 
        });
    }, []);

    return (
        <section className="sobre" id="sobre">
            <div className="escurecer"></div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 col-12 align-self-center text-center" data-aos="fade-up">
                        <img src="../../../img/eu.png" alt="" className="img-sobre" />
                    </div>
                    <div className="col-md-6 col-12" data-aos="fade-left">
                        <h1>Quem sou?</h1>
                        <p>Olá! Sou Guilherme Silva, um entusiasta de desenvolvimento web focado em aprender e crescer na área de tecnologia. Tenho explorado o desenvolvimento frontend com React e estou animado em expandir meus conhecimentos para incluir o desenvolvimento backend. Estou em busca de oportunidades para adquirir experiência prática e dominar tecnologias como Java, Node.js e bancos de dados relacionais e não relacionais.
                            <br /><br />
                            Além do desenvolvimento web, tenho interesse em UX/UI design e em como a experiência do usuário pode ser aprimorada através de interfaces intuitivas e acessíveis. Minha abordagem para o desenvolvimento de software é centrada no usuário, buscando sempre entender suas necessidades e criar soluções que ofereçam valor real.
                            <br /><br />Estou constantemente explorando novas tecnologias e metodologias para melhorar minhas habilidades técnicas e criativas, e estou motivado a colaborar em projetos desafiadores que me permitam contribuir significativamente para a criação de produtos excepcionais.
                        </p>
                        <Link to={pdfurl} className="btn btn-primary"><i className="fa-solid fa-download"></i> Ver Currículo</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sobre;
