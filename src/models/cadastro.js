function validarCPF(cpf) {
    if (cpf.length !== 11) {
        return { valido: true, texto: "O cpf deve conter 11 digítos e sem letra" }
    } else {
        return { valido: false, texto: "" }
    }
}

function validarSenha(password) {
    if (password.length < 4 || password.length > 72) {
        return { valido: true, texto: "Esse campo deve conter de 4 a 72 dígitos." }
    } else {
        return { valido: false, texto: "" }
    }
}

export {
    validarCPF, validarSenha
}