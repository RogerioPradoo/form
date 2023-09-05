import React from "react";

const ValidacoesCadastro = React.createContext(
    { cpf: semValidar, password: semValidar, nome: semValidar }
);

function semValidar(dados) {
    return { valido: true, texto: "" }
}

export default ValidacoesCadastro;