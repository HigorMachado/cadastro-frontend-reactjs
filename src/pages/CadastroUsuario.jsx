import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container } from "@material-ui/core";
import TopBar from '../components/topbar';
import TextField from '@material-ui/core/TextField';
import PasswordField from '../components/input/password';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '400px'
    },

    input: {
        marginTop: '15px'
    },

    saveButton: {
        marginTop: '15px',
        width: '50%',
        marginLeft: '50%',
        transform: 'translate(-50%)'
    }
}));

function getDefaultValues() {
    return {
        email: '',
        senha: ''
    }
}

export default function CadastroUsuario() {
    const classes = useStyles();
    const [values, setValues] = useState(getDefaultValues);

    function handleChange(event) {
        setValues({ ...values, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios.post('http://localhost:8080/api/usuario/novo', values)
            .then(resp => console.log(resp))
            .catch(error => console.error(error.message || 'Erro ao salvar usuário.'));
    }
    return (
        <Box>
            <TopBar title='Cadastro de usuário' />
            <Container className={classes.root}>
                <form
                    className={classes.form}
                    onSubmit={handleSubmit}
                >
                    <TextField
                        className={classes.input}
                        label="E-mail"
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    <PasswordField
                        className={classes.input}
                        label='Senha'
                        name='senha'
                        value={values.senha}
                        onChange={handleChange}
                    />
                    <Button
                        className={classes.saveButton}
                        variant="contained"
                        color="primary"
                        size="small"
                        type='submit'
                        startIcon={<SaveIcon />}
                    >
                        Salvar
                    </Button>
                </form>
            </Container>
        </Box>
    );
}