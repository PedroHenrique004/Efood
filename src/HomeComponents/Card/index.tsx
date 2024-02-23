import { useNavigate } from "react-router-dom";

import { Button, CardContainer, Description, NameNote, TagContainer } from './styles'

import star from '../../images/estrela.png'

type Props = {
    imagem: string[]
    nome: string
    NotaAvaliacao: number
    descricao: string
    nacionalidade: string
    destaque?: boolean
    id: number
}

const Card = (props: Props) => {
    const navigate = useNavigate()

        return (
            <CardContainer>
                    {props.imagem.map((img, index) => (
                        <img key={index} src={img} alt={props.nome} />
                    ))}
                <TagContainer>
                    {props.destaque === true ? <p>Destaque da semana</p> : ''}
                    <p>{props.nacionalidade}</p>
                </TagContainer>
                <NameNote>
                    <h3>{props.nome}</h3>
                    <div>
                        <h3>{props.NotaAvaliacao}</h3>
                        <img src={star} alt="Avaliação" />
                    </div>
                </NameNote>
                <Description>{props.descricao}</Description>
                <Button onClick={() => navigate(`/restaurante/${props.id}`)}>Saiba mais</Button>
        </CardContainer>
        )
}

export default Card
