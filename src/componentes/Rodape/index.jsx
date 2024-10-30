"use client"; // Adiciona essa linha para declarar o componente como cliente

import estilos from './rodape.module.css';
import Image from 'next/image';
import logo from '/public/logo.png';
import seta from  '/public/seta_home.png'
import { useScrollToTop } from './ScrollToTop'; // Importando o hook

export default function Rodape() {

    const scrollToTop = useScrollToTop();

    return (
        <footer className={estilos.footer}>
            {/* seta de retorno */}
         <Image id="scrollToTopBtn" onClick={scrollToTop} src={seta} className={estilos.seta} title='Voltar ao Topo' />
           
            <div className={estilos.container_rodape}>
                
                <div><Image src={logo} /></div>
                <div>
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernardino de Campos, 98 São Paulo, SP 12345-678</p>
                </div>
                <div>
                    <h3>CONTATO</h3>
                    <p>Info@meusite.com tel: (31) 9 9698-7487</p>
                </div>
                <div>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS 10:00 - 22:00</p>
                </div>
            </div>
            <p className={estilos.copy}>Gelateria. Orgulhosamente desenvolvido por <span>Lucas Teixeira Santos</span></p>
        </footer>     
    )
}