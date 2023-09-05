import { TextField, Button } from "@material-ui/core";
import React, { useState, useContext } from "react";
import ValidacoesCadastro from "../../context/validacoesCadastro"
import useErros from "../../hooks/useErros";

function DadosUsuario({ onSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro)
    const [error, validarCampo, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                onSubmit({ email, password });
            }
        }}>

            <TextField id="email" name="email" value={email}
                onChange={(event) => {
                    setEmail(event.target.value)
                }}
                label="email" type="email" variant="filled" fullWidth margin="normal" required />

            <TextField id="password" name="password" value={password}
                onChange={(event) => {
                    setSenha(event.target.value)
                }}
                onBlur={validarCampo}
                error={error.password.valido}
                helperText={error.password.texto}
                label="senha" type="password" variant="filled" fullWidth margin="normal" required />

            <Button type="submit" variant="contained"
                color="primary">Próximo</Button>
        </form>
    )
}

export default DadosUsuario;