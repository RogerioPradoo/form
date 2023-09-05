import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@mui/material"
import ValidacoesCadastro from "../../context/validacoesCadastro"
import useErros from '../../hooks/useErros';

function DadosPessoais({ onSubmit }) {
    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();
    const [cpf, setCpf] = useState();
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const validacoes = useContext(ValidacoesCadastro)
    const [error, validarCampo, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                onSubmit({ nome, sobrenome, cpf, novidades, promocoes })
            }
        }}>

            <TextField nome={nome}
                value={nome}
                name="nome"
                onBlur={validarCampo}
                error={error.nome.valido}
                helperText={error.nome.texto}
                onChange={event => { setNome(event.target.value) }}
                id="nome" label="Nome" variant="filled" fullWidth margin="normal" />

            <TextField nome={sobrenome} value={sobrenome} onChange={event => { setSobrenome(event.target.value) }} id="sobrenome" label="Sobrenome" variant="filled" fullWidth margin="normal" />

            <TextField color="primary" value={cpf}
                onChange={event => { setCpf(event.target.value) }}
                id="cpf"
                name="cpf"
                label="CPF"
                variant="filled"
                fullWidth margin="normal"
                error={error.cpf.valido}
                helperText={error.cpf.texto}
                onBlur={validarCampo} />

            <FormControlLabel label="promocoes" control={
                <Switch
                    name="promocoes"
                    color='primary'
                    checked={promocoes}
                    onChange={(event) => {
                        setPromocoes(event.target.checked)
                    }}
                />
            } />

            <FormControlLabel label="novidades" control={
                <Switch
                    name="novidades"
                    color='primary'
                    checked={novidades}
                    onChange={(event) => {
                        setNovidades(event.target.checked)
                    }}
                />
            } />

            <Button type="submit"
                variant="contained"
                color="primary"
            >
                Próximo
            </Button>
        </form>
    )
}

export default DadosPessoais