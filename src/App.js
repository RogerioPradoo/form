import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/formularioCadastro/formularioCadastro';
import { Container, Typography } from '@mui/material';
import { validarCPF, validarSenha } from "./models/cadastro.js"
import ValidacoesCadastro from './context/validacoesCadastro';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h5" fontSize={20} fontFamily={"-moz-initial"}>Formulario Cadastro</Typography>
        <ValidacoesCadastro.Provider value={{ cpf: validarCPF, password: validarSenha, nome: validarSenha }}>
          <FormularioCadastro onSubmit={onSubmit} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function onSubmit(dados) {
  console.log(dados)
}

export default App;
