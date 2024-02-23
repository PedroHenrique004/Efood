export class Rest {
    imagem: string[]
    nome: string
    NotaAvaliacao: number
    descricao: string
    id: number
    nacionalidade: string
    destaque?: boolean

    constructor(
        imagem: string[],
        nome: string,
        NotaAvaliacao: number,
        descricao: string,
        id: number,
        nacionalidade: string,
        destaque: boolean,
    ) {
        this.imagem = imagem
        this.nome = nome
        this.NotaAvaliacao = NotaAvaliacao
        this.descricao = descricao
        this.id = id
        this.nacionalidade = nacionalidade
        this.destaque = destaque
    }
}