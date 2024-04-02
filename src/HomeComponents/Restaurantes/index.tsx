import { useEffect, useState } from 'react';
import Card from "../Card";
import { CardContainer, Container } from "./styles";

const Restaurantes = () => {
    const [restaurantes, setRestaurantes] = useState([]);

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then(response => response.json())
        .then(data => setRestaurantes(data));
    }, []);

    return (
        <Container>
            <CardContainer>
                {restaurantes.map((restaurante) => (
                    <Card 
                        id={restaurante.id}
                        key={restaurante.id}
                        imagem={restaurante.imagem}
                        nome={restaurante.titulo}
                        NotaAvaliacao={restaurante.avaliacao}
                        descricao={restaurante.descricao}
                        nacionalidade={restaurante.tipo}
                        destaque={restaurante.destacado}
                    />
                ))}
            </CardContainer>
        </Container>
    )
}

export default Restaurantes;
