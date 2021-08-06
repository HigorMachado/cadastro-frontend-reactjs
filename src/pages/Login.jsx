import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container } from "@material-ui/core";
import TopBar from '../components/topbar';
import TextField from '@material-ui/core/TextField';
import PasswordField from '../components/input/password';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { VscAccount,VscSignIn } from 'react-icons/vsc';
import {CadastroUsuario} from '../pages/CadastroUsuario'


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
    },
    new: {
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

export default function Login(){
    const classes = useStyles();
    
    const [values, setValues] = useState(getDefaultValues);
    const [errors, setErrors] = useState(getDefaultValues);


function handleSubmit(event) {
    event.preventDefault();

    const errors = {}; 

    return errors;
}


   
    return (
        <Box>
            <TopBar title='Login' />
            <Container className={classes.root}>  
            <form
                    className={classes.form}
                    onSubmit={handleSubmit}
            > 
                  <TextField
                        label="E-mail"
                        name='email'
                        value={values.email}
                        error={!!errors.email}
                        helperText={errors.email}
                   />     
                  <PasswordField
                        label='Senha'
                        name='senha'
                        value={values.senha}
                        error={!!errors.senha}
                        helperText={errors.senha}
                  />         
                   <Button
                        className={classes.saveButton}
                        variant="contained"
                        color="primary"
                        size="small"
                        type='submit'
                        startIcon={<VscSignIn />}
                    >
                        Fazer login
                    </Button> 
                    <Button
                        className={classes.new}
                        variant="contained"
                        size="large"
                        color="primary"
                        size="small"
                        type="submit"
                        startIcon={<VscAccount/>} 
                        onclick="CadastroUsuario()"        
                                   >
                          Criar uma conta
                    </Button>
            </form>      
            </Container>
        </Box>
    );
}