import estilos from "./Topo.module.css";
import Image from "next/image";
import Dente from "../../../public/dente.png";

export default function Topo(){
    return (

        <header className={estilos.topo}>
            <div className={estilos.container_logo}>
                <Image src={Dente} 
                alt="logo dentes saudáveis" 
                title="logo dentes saudáveis"
                />
                <p>Dentes Saudáveis</p>
            </div>
        </header>
    );
}