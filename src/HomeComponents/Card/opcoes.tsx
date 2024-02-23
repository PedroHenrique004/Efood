import image from '../../images/imagem.png'
import image2 from '../../images/imagem2.png'
import { Rest } from '../../models/Restaurantes'


export const OpcoesDoDia: Rest[] = [
    {
        id: 1,
        imagem: [image],
        nome: 'Hioki Sushi',
        NotaAvaliacao: 4.9,
        descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        nacionalidade: 'Japonesa'  ,
        destaque: true
    },
    {
        id: 2,
        imagem: [image2],
        nome: 'La Dolce Vita Trattoria',
        NotaAvaliacao: 4.6,
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        nacionalidade: 'Italiana'    
    }
]

