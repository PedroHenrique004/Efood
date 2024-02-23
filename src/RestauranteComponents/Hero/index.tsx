import { useParams } from "react-router-dom";
import { OpcoesDoDia } from '../../HomeComponents/Card/opcoes'
import { Container, ImagemFundo, NatContainer, NomeContainer, Overlay } from "./styles"; // importe Overlay

const Hero = () => {
  const { id } = useParams();
  const restaurante = OpcoesDoDia.find(opcao => opcao.id === Number(id));

  return (
    <Container>
      {restaurante && <ImagemFundo src={restaurante.imagem[0]} alt={restaurante.nome} />}
      <Overlay />
      {restaurante && (
        <>
          <NatContainer>
            <p>{restaurante.nacionalidade}</p>
          </NatContainer>
          <NomeContainer>
            <p>{restaurante.nome}</p>
          </NomeContainer>
        </>
      )}
    </Container>
  );
}

export default Hero;
