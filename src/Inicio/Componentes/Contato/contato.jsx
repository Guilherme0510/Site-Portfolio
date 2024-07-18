import React, { useEffect, useState } from "react";
import './contato.css';
import Aos from "aos";
import emailjs from 'emailjs-com';
import 'aos/dist/aos.css';

function Contato() {
    useEffect(() => {
        Aos.init({
            duration: 2000, 
        });
    }, []);

    const [primeiroNome, setPrimeiroNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');

    function SendEmail(e) {
        e.preventDefault();
        if (primeiroNome === '' || sobrenome === '' || email === '' || assunto === '' || mensagem === '') {
            alert('Preencha todos os campos');
            return;
        }

        const TemplateParams = {
            primeiro_nome: primeiroNome,
            sobrenome: sobrenome,
            email: email,
            assunto: assunto,
            mensagem: mensagem
        };

        emailjs.send("service_m0y7jza", "template_p8m11kp", TemplateParams, "TVBz5jk-QgNT88Rxi")
            .then((response) => {
                console.log('E-mail enviado:', response.status, response.text);
                limparCampos();
                alert('E-mail enviado com sucesso!');
            }, (err) => {
                console.log('Erro ao enviar o e-mail:', err);
                alert('Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde.');
            });
    }

    function limparCampos() {
        setPrimeiroNome('');
        setSobrenome('');
        setEmail('');
        setAssunto('');
        setMensagem('');
    }

    return (
        <section className="container contato pt-3" id="contato">
            <div className="row" data-aos="fade-down-right">
                <div className="info-contato col-md-6 col-12">
                    <div>
                        <h2 className="pt-4 text-center">Informações de Contato</h2>
                    </div>
                    <div className="text-info-contato">
                        <div className="text-contato">
                            <h4>Nome</h4>
                            <p>Guilherme Silva</p>
                        </div>
                        <div className="text-contato">
                            <h4>Localização</h4>
                            <p>São Paulo - SP</p>
                        </div>
                        <div className="text-contato">
                            <h4>Telefone</h4>
                            <p>(11) 93291-1121</p>
                        </div>
                        <div className="text-contato">
                            <h4>E-mail</h4>
                            <p>guissilval005@gmail.com</p>
                        </div>
                    </div>
                </div>
                <form className="form col-md-6 col-12" onSubmit={SendEmail}>
                    <div className="title-form">
                        <h2>Entre em contato</h2>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="primeiroNome">Primeiro Nome</label>
                            <input
                                type="text"
                                id="primeiroNome"
                                className="form-control"
                                placeholder="Digite seu primeiro nome"
                                value={primeiroNome}
                                onChange={(e) => setPrimeiroNome(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sobrenome">Sobrenome</label>
                            <input
                                type="text"
                                id="sobrenome"
                                className="form-control"
                                placeholder="Digite seu sobrenome"
                                value={sobrenome}
                                onChange={(e) => setSobrenome(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="assunto">Assunto</label>
                        <input
                            type="text"
                            id="assunto"
                            className="form-control"
                            placeholder="Digite o assunto"
                            value={assunto}
                            onChange={(e) => setAssunto(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea
                            id="mensagem"
                            className="form-control"
                            placeholder="Digite sua mensagem"
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="form-group d-flex align-items-center justify-content-center">
                        <button type="submit" className="btn btn-form">Enviar</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contato;
