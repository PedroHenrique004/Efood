import { CardAlimento, Container, ContainerCards } from "./styles";
import { PedidosPossiveis } from "./pedidosPossiveis";

const Cardapio = () => {
  return (
    <>
      <Container>
        <ContainerCards>
          {PedidosPossiveis.map((pedido) => (
            <CardAlimento key={pedido.id}>
              <img src={pedido.imagem} alt={pedido.nome} />
              <h4>{pedido.nome}</h4>
              <p>{pedido.descricao}</p>
              <button>Adicionar ao carrinho</button>
            </CardAlimento>
          ))}
        </ContainerCards>
      </Container>
    </>
  );
};

export default Cardapio;

