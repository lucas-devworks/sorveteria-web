import Image from "next/image";
import logo from '/public/logo.png';
import Link from "next/link";
import estilos from './topo.module.css';

export default function Topo() {
    
    return (

    <header className={estilos.cabecalho}>
        <div className={estilos.container}>

            <div>
                <Image src={logo} className={estilos.logo} alt="Gelateria" title="Gelateria"/>
            </div>
            <nav className={estilos.container_links}>
                <Link href='/'>Home</Link>
                <Link href='/Sabores'>Sabores</Link>
                <Link href='/Sobre'>Sobre</Link>
            </nav>

        </div>
    </header>

    );
}