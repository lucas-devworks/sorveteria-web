import estilos from './sabores.module.css';
import Image from 'next/image';
// imagens_sorvetes
import sorv_1 from '/public/sabor-oreo.png';
import sorv_2 from '/public/sabor-pistache.png';
import sorv_3 from '/public/sabor-cookies-avela.png';
import sorv_4 from '/public/sorbet-kiwi.png';
import sorv_5 from '/public/sorbet-morango.png';
import sorv_6 from '/public/sorbet-limao.png';


export default function Sabores() {
    return (
    <main className={estilos.main}>
        <section className={estilos.container_banner}>
            <div>
                <h1>NOSSOS SABORES</h1>
            </div>
        </section>

        <section className={estilos.secao_sorvetes}>
                <h2>SABORES DE SORVETE</h2>
            <div className={estilos.container_cards}>
                
                <div className={estilos.card}>
                    <div><Image src={sorv_1} /></div>
                    <h3>Sorvete de Oreo</h3>
                    <p>Delicioso sorvete sabor Oreo. Uma
                    explosão de sabor.
                    </p>
                </div>
                <div className={estilos.card}>
                    <div><Image src={sorv_2} /></div>
                    <h3>Sorvete Pistache</h3>
                    <p>Cremoso sorvete sabor pistache com
                    pedacinhos de semente.
                    </p>
                </div>
                <div className={estilos.card}>
                    <div><Image src={sorv_3} /></div>
                    <h3>Sorvete Cookies & Avelã</h3>
                    <p>O nosso melhor sorvete. Você vai
                    adorar o sabor.
                    </p>
                </div>
                <div className={estilos.card}>
                    <div><Image src={sorv_4} /></div>
                    <h3>Sorvete de Kiwi</h3>
                    <p>Delicioso e refrescante sorvete sabor
                    Kiwi. Rico em vitamina C.
                    </p>
                </div>
                <div className={estilos.card}>
                    <div><Image src={sorv_5} /></div>
                    <h3>Sorvete de Morango</h3>
                    <p>Sorvete de morango gourmet.
                    Tradicional e saboroso.
                    </p>
                </div>
                <div className={estilos.card}>
                    <div><Image src={sorv_6} /></div>
                    <h3>Sorvete de Limão Siciliano</h3>
                    <p>O incrivel sorvete gourmet de Limão
                    siciliano vai te encontar.
                    </p>
                </div>


            </div>
        </section>
</main>

    )
}