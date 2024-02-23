import { OpcoesDoDia } from '../Card/opcoes';
import Card from "../Card";
import { CardContainer, Container } from "./styles";

const Restaurantes = () => {
    return (
        <Container>
            <CardContainer>
                {OpcoesDoDia.map((opcao) => (
                    <Card 
                        id={opcao.id}
                        key={opcao.id}
                        imagem={opcao.imagem}
                        nome={opcao.nome}
                        NotaAvaliacao={opcao.NotaAvaliacao}
                        descricao={opcao.descricao}
                        nacionalidade={opcao.nacionalidade}
                        destaque={opcao.destaque}
                    />
                ))}
            </CardContainer>
        </Container>
    )
}

export default Restaurantes;
