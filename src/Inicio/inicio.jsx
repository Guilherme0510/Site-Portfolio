import React from "react";
import Navbar from "./Componentes/Navbar/navbar";
import Banner from "./Componentes/Banner/banner";
import Sobre from "./Componentes/Sobre/sobre";
import Habilidades from "./Componentes/Habilidades/habilidades";
import Projetos from "./Componentes/Projetos/projetos";
import Contato from "./Componentes/Contato/contato";
import Footer from "./Componentes/Footer/footer";


function Site() {

    return (
        <div>
            <Navbar />
            <Banner />
            <Sobre />
            <Habilidades />
            <Projetos />
            <Contato />
            <Footer />
        </div>

    )
}

export default Site;