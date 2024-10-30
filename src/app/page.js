import estilos from "./page.module.css";
import Image from "next/image";
// Importação da imagens
import img1 from '/public/banner-sabores.jpg';
import img2 from '/public/eventos-image.jpg';
import img3 from '/public/sobre-image.jpg';

export default function Home() {
  return (
    <main className={estilos.main}>
      <section className={estilos.container_banner}>
        <div>
          <h1>SORVETERIA ARTESANAL</h1>
        </div>
      </section>

        {/* container com as 6 divs */}
      <section className={estilos.container_6_elementos}> 

     <div className={estilos.extra}>   
        <div><Image src={img1} /></div>
        <div className={estilos.card_texto}>
            <h2>NOSSOS SABORES</h2>
            <span>Novos e deliciosos!</span>
            <p>Sorvete é aquele feito com os melhores ingredientes! Aqui na
              gelateria todos os nossos produtos são naturais, à base de frutas e sem
              nenhum conservante! Também temos opções sem lactose e sem açúcar.
              Venha conhecer e perceber que tem como o sorvete ser delicioso e
              saudável ao mesmo tempo!</p>
        </div>
      </div>

      <div className={estilos.extra}>  
        <div className={estilos.card_texto}>
            <h2>NOSSOS EVENTOS</h2>
            <span>Delicias com sorvete!</span>
            <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos Aqui
              prontinhos para te atender e oferecer os melhores eventos com os
              melhores sorvete da sua vida! Venha nos conhecer e passar um tempo
              aqui com a gente.
            </p>
        </div>
        <div><Image src={img2} /></div>
      </div>
      
      <div className={estilos.extra}>  
        <div><Image src={img3} /></div>
        <div className={estilos.card_texto}>
            <h2>SOBRE NÓS</h2>
            <span>Alegria em cada casquinha!</span>
            <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos
              há anos no mercado produzindo o que tem de melhor para o nosso
              cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e
              aproveite o melhor atendimento e o melhor sorvete da cidade.
            </p>
        </div>
      </div>
      </section>

    </main>
  );
}
