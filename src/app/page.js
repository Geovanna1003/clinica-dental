import Image from "next/image";
import estilos from "./page.module.css";
import Topo from "../componentes/Topo";
import SecaoApresentacao from "@/componentes/SecaoApresentacao";
import SecaoBeneficios from "@/componentes/SecaoBeneficios";
import CardDepoimento from "../componentes/CardDepoimento";
import Cliente01 from "../../public/cliente01.png";
import Cliente02 from "../../public/cliente02.png";
import Cliente03 from "../../public/cliente03.png";
import MolduraInformacoes from "@/componentes/MolduraInformacoes";
import Dentista01 from "../../public/dentista01.png";
import Dentista02 from "../../public/dentista02.png";
import SecaoLocalizacao from "@/componentes/SecaoLocalizacao";
import Rodape from "@/componentes/Rodape";




export default function Home() {
  return (
    
    <>
      <Topo />
      <SecaoApresentacao />
      <SecaoBeneficios />

      {/* Seção depoimentos */}
      <section className={estilos.secao_depoimento}>
        <h2>Veja o que nossos <span>clientes</span> estão falando...</h2>
        <div className={estilos.container_depoimentos}>
          <CardDepoimento
            imagem={Cliente01}
            nome={"Alberto"}
            descricao={"Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado."}

          />
          <CardDepoimento
            imagem={Cliente02}
            nome={"Eliana"}
            descricao={"Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado."}
          />
          <CardDepoimento
            imagem={Cliente03}
            nome={"Carla"}
            descricao={"Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado."}
          />
        </div>
      </section>

      {/* Seção Informações */}
      <section className={estilos.secao_informacoes}>
        <div className={estilos.container_info}>
          <MolduraInformacoes>
            <ul className={estilos.infor_horario}>
              <li>Segunda - 09:00 às 18:00</li>
              <li>Terça - 09:00 às 18:00</li>
              <li>Quarta - 09:00 às 18:00</li>
              <li>Quinta - 09:00 às 18:00</li>
              <li>Sexta - 09:00 às 17:00</li>
              <li>Sábado - 09:00 às 12:00</li>
            </ul>
          </MolduraInformacoes>

          <MolduraInformacoes>
            <div className={estilos.card}>
              <figure>
                <Image
                  className={estilos.imagem_aparelho}
                  src={Dentista01}
                  alt="Dr. Ana"
                  title="Dr. Ana"
                />
              </figure>
             <div>
                <p>Dra. Ana - Ortodontista</p>
                <p>Segundas e sextas</p>
              </div>
            </div>
            <div className={estilos.card}>
              <figure>
                <Image
                   className={estilos.imagem_aparelho}
                   src={Dentista02}
                   alt="Dr. Carlos"
                   title="Dr. Carlos"
                />
              </figure>
              <div>
                <p>Dr. Carlos - Endodontia</p>
                <p>Terças e quartas</p>
              </div>
            </div>
          </MolduraInformacoes>
          <MolduraInformacoes>
                <p>Ligue para agendar uma consulta:</p>
                <p>(21) 3699 - 9999</p>
                <p>(21) 97788 - 5566</p>
          </MolduraInformacoes>
        
        </div>
      </section>

      <SecaoLocalizacao />
      <Rodape />
  
    </>
  );
}
