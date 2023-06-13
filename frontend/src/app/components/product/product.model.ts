export interface Cliente {
    id?: number,
    nome: string,
    imgUrl: string|null,
    endereco: {
            logradouro: string,
            numero: number|null,
            complemento: string,
            cep: string,
            bairro: string,
            cidade: string,
            estado: string,
            pais: string
        },
    rg: string,
    cpf: string,
    telefone: string,
    email: string,
    

}

