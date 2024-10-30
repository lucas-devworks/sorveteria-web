import estilos from './sobre.module.css';
import Image from 'next/image';
// imagens importadas
import img_1 from '/public/sobre-image.jpg';
import img_2 from '/public/sorveteria.jpg';

export default function Sobre() {
    
    return (
    <main className={estilos.main}>
        <section className={estilos.container_banner}>
        <div>
            <h1>A GELATERIA</h1>
        </div>
        </section>

        <section className={estilos.container_texto}>
            <h2>Sobre Nós</h2>
            <span>Nós simplesmente amamos sorvete!</span>
            
            <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido.
            Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios.
            Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete.
            Vendemos tanto para varejo como para atacado.</p>
            <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família.
            Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais.
            Para contratar os nossos serviços, basta entrar em contato conosco.
            Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
        </section>

        <section className={estilos.secao_imagens}>
            <div className={estilos.container_imagens}>
                <div><Image src={img_1} /></div>
                <div><Image src={img_2} /></div>
            </div>
        </section>



    </main>
    )
}