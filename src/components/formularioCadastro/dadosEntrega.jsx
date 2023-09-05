import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';


function DadosEntrega({ onSubmit }) {
    const [cep, setCep] = useState("")
    const [endereco, setEndereco] = useState("")
    const [numero, setNumero] = useState("")
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            onSubmit({ cep, endereco, numero, estado, cidade })
        }}>
            <TextField id="cep" value={cep}
                onChange={(event) => {
                    setCep(event.prevent.value)
                }}
                label="CEP" type="number" variant="filled" margin="normal" />

            <TextField id="endereco" value={endereco}
                onChange={(event) => {
                    setEndereco(event.prevent.value)
                }}
                label="Endereço" type="text" variant="filled" fullWidth margin="normal" />

            <TextField id="numero" value={numero}
                onChange={(event) => {
                    setNumero(event.prevent.value)
                }}
                label="Numero" type="number" variant="filled" margin="normal" />

            <TextField id="estado" value={estado}
                onChange={(event) => {
                    setEstado(event.prevent.value)
                }}
                label="Estado" type="text" variant="filled" margin="normal" />

            <TextField id="cidade" value={cidade}
                onChange={(event) => {
                    setCidade(event.prevent.value)
                }}
                label="Cidade" type="text" variant="filled" margin="normal" />

            <Button type="submit"
                variant="contained"
                color="primary"
                fullWidth
            >
                Finalizar Cadastro
            </Button>
        </form>
    );
}

export default DadosEntrega