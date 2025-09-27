import estilos from "./SecaoApresentacao.module.css";
import Dente from "../../../public/dente.png";
import Image from "next/image";

export default function SecaoApresentacao(){
    return (
        <section className={estilos.secao_apresentacao}>
            <div className={estilos.texto_apresentacao}>
                <h1>Os melhores <span>aparelhos dentários</span>!</h1>
                 <p>
                    Confira abaixo todas as especialidades odontológicas que temos à sua
                     disposição!
                </p>
            </div>
            <ul className={estilos.lista_servicos}>
                <li>
                    <Image src={Dente} alt="logo" title="logo"/>
                    <p>Pré-avaliação</p>
                </li>
                <li>
                    <Image src={Dente} alt="logo" title="logo"/>
                    <p>Aparelhos Dentários</p>
                </li>
                <li>
                    <Image src={Dente} alt="logo" title="logo"/>
                    <p>Raio-X digital</p>
                </li>
                <li>
                    <Image src={Dente} alt="logo" title="logo"/>
                    <p>Clareamento dental</p>
                </li>
            </ul>
        </section>
    );
}